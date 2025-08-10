import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getOpenAiKey } from '../../config/openaiKey';
import AnalogyModal from './AnalogyModal';

export default function ChapterContentBlock({ title, content = '', children }) {
  const [selectedText, setSelectedText] = useState('');
  const [showAnalogyModal, setShowAnalogyModal] = useState(false);
  const [analogy, setAnalogy] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTextSelection = (text) => {
    if (text.trim()) {
      setSelectedText(text.trim());
      generateAnalogy(text.trim());
    }
  };

  const generateAnalogy = async (text) => {
    setShowAnalogyModal(true);
    setLoading(true);

    try {
      const prompt = `Generează o analogie simplă și ușor de înțeles pentru următorul concept din domeniul securității cibernetice: "${text}". 
      Analogia ar trebui să fie relevantă și să ajute la înțelegerea conceptului. 
      Răspunsul trebuie să fie scurt și concis, maxim 2-3 propoziții.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getOpenAiKey()}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const analogyText = data.choices?.[0]?.message?.content?.trim() || 'Răspuns invalid de la AI.';
      setAnalogy(analogyText);
    } catch (error) {
      console.error('[generateAnalogy] Eroare în fetch:', error);
      setAnalogy('Ne pare rău, nu am putut genera o analogie în acest moment.');
    } finally {
      setLoading(false);
    }
  };

  const renderParagraph = (paragraph, paragraphKey) => {
    const lines = paragraph.split(/(?=•)/g); // separa dupa "•", dar păstrează simbolul

    return (
      <View key={paragraphKey}>
        {lines.map((line, lineIndex) => {
          const parts = line.split(/(\*\*[^*]+\*\*)/);
          return (
            <View key={`${paragraphKey}-${lineIndex}`} style={styles.paragraphContainer}>
              {parts.map((part, partIndex) => {
                const isBold = part.startsWith('**') && part.endsWith('**');
                const cleanText = isBold ? part.slice(2, -2) : part;

                return cleanText.split(/\s+/).map((word, wordIndex) => (
                  <TouchableOpacity
                    key={`${paragraphKey}-${lineIndex}-${partIndex}-${wordIndex}`}
                    onPress={() => handleTextSelection(word)}
                    style={styles.wordContainer}
                  >
                    <Text style={[styles.word, isBold && styles.boldWord]}>
                      {word + ' '}
                    </Text>
                  </TouchableOpacity>
                ));
              })}
            </View>
          );
        })}
      </View>
    );
  };

  const renderGroupedContent = () => {
    const cleanedContent = content.replace(/\r/g, '').replace(/[ \t]+\n/g, '\n');
    const lines = cleanedContent.split(/\n{2,}/);
   
    const result = [];

    let currentGroup = [];
    let insideBox = false;

    const isSubtitleLine = (line) => {
      const match = line.match(/\*\*([^*]+)\*\*/);
      if (!match) return false;
      const wordCount = match[1].trim().split(/\s+/).length;
      return wordCount > 2;
    };

    lines.forEach((line, idx) => {
      if (isSubtitleLine(line)) {
        if (insideBox && currentGroup.length > 0) {
          result.push(
            <View key={`box-${idx}`} style={styles.subtitleBox}>
              {currentGroup.map((l, i) => renderParagraph(l, `line-box-${idx}-${i}`))}
            </View>
          );
          currentGroup = [];
        }

        insideBox = true;
        currentGroup.push(line);
      } else if (insideBox) {
        currentGroup.push(line);
      } else {
        result.push(renderParagraph(line, `line-${idx}`));
      }
    });

    if (insideBox && currentGroup.length > 0) {
      result.push(
        <View key={`box-final`} style={styles.subtitleBox}>
          {currentGroup.map((l, i) => renderParagraph(l, `line-box-final-${i}`))}
        </View>
      );
    }

    return result;
  };

  return (
    <View style={styles.block}>
      {title && <Text style={styles.title}>{title}</Text>}

      {renderGroupedContent()}

      {children}

      <AnalogyModal
        visible={showAnalogyModal}
        onClose={() => setShowAnalogyModal(false)}
        analogy={analogy}
        loading={loading}
      />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 22,
    marginBottom: 6,
    color: '#000',
  },
  paragraphContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  wordContainer: {
    marginRight: 2,
  },
  word: {
    fontFamily: 'outfit',
    fontSize: 18,
    color: '#333',
    lineHeight: 26,
  },
  boldWord: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18
  },
  subtitleBox: {
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
});
