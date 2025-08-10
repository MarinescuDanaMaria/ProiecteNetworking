import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Button from '../../components/Shared/Button';
import ChapterContentBlock from '../../components/Shared/ChapterContentBlock';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { UserDetailContext } from '../../context/UserDetailContext';


import { useRef } from 'react';


export default function ChapterView() {
  const { chapterParams, docId, chapterIndex, courseId } = useLocalSearchParams();
  const chapter = JSON.parse(chapterParams);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  const scrollRef = useRef(null); 
  const [currentPage, setCurrentPage] = useState(0); 

  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1);
    scrollRef.current?.scrollTo({ y: 0, animated: true }); 
  };

  const GetProgress = () => {
    const total = chapter?.subsections?.length || 1;
    return currentPage / total;
  };


  const onChapterComplete = async () => {
  setLoader(true);
  try {
    const currentChapters = userDetail.startedCourses[docId]?.completedChapters || [];

    // convertim la string toate valorile pentru a evita duplicate cauzate de tipuri diferite (ex: "0" vs 0)
    const stringified = currentChapters.map(String);

    if (stringified.includes(String(chapterIndex))) {
      router.replace('/courseView/' + docId);
      return;
    }

    const updatedCompleted = [...stringified, String(chapterIndex)];

    const userRef = doc(db, 'users', userDetail.uid);
    const updatedStartedCourses = {
      ...userDetail.startedCourses,
      [docId]: {
        completedChapters: updatedCompleted,
      },
    };

    // Actualizez progresul capitolului
    await updateDoc(userRef, {
      startedCourses: updatedStartedCourses,
    });
    // Obțin detalii despre curs pentru a verifica dacă trebuie adăugată insigna
    const courseRef = doc(db, 'courses', docId);
    const courseSnap = await getDoc(courseRef);
    let newBadges = userDetail.badges || [];
    if (courseSnap.exists()) {
      const courseData = courseSnap.data();
      const totalChapters = courseData.chapters?.length || 0;

      console.log("User badges before update:", userDetail.badges);
console.log("Badge to add:", courseData.achievementBadge);

      // Dacă toate capitolele sunt finalizate și utilizatorul nu are deja insigna
      if (updatedCompleted.length === totalChapters && courseData.achievementBadge && !newBadges.includes(courseData.achievementBadge)) {
        newBadges = [...newBadges, courseData.achievementBadge];
        await updateDoc(userRef, { badges: newBadges });
      }

      
    }
    setUserDetail({
      ...userDetail,
      startedCourses: updatedStartedCourses,
      badges: newBadges,
    });
    console.log("New badges:", newBadges);

    console.log("Updated user detail context:", {
  startedCourses: updatedStartedCourses,
  badges: newBadges,
});



    router.replace('/courseView/' + docId);
  } catch (error) {
    console.error('Error updating chapter completion:', error);
  } finally {
    setLoader(false);
  }
};

  const subsection = chapter?.subsections?.[currentPage];

  // TABELE -----------------------------------------------------------

  return (
    <ScrollView style={styles.container} ref={scrollRef}>
      <Progress.Bar
        progress={GetProgress()}
        width={Dimensions.get('screen').width * 0.85}
      />

      <View style={styles.content}>
        <ChapterContentBlock
  title={subsection?.name}
  content={subsection?.content}
/>

{courseId === '1' && chapterIndex === '0' && (
  <> 
<View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Organizație</Text>
    <Text style={styles.tableHeader}> Breșă de securitate </Text>
    <Text style={styles.tableHeader}>Identități expuse</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Oficiul Management Personal</Text>
    <Text style={styles.tableCell}>Date angajați și performanță expuse; posibil și date financiare </Text>
    <Text style={styles.tableCell}>4.000.000</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>CareFirst BlueCross </Text>
    <Text style={styles.tableCell}> Expunere nume, naștere, email, ID-uri asigurare</Text>
    <Text style={styles.tableCell}>1.100.000</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Penn State - Inginerie</Text>
    <Text style={styles.tableCell}> Atacatori au accesat date sensibile ale studenților și personalului </Text>
    <Text style={styles.tableCell}>18.000</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Salley Beauty </Text>
    <Text style={styles.tableCell}>Atac asupra cardurilor de plată în magazine</Text>
    <Text style={styles.tableCell}>Necunoscut</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>AT&T</Text>
    <Text style={styles.tableCell}> Date clienți furate de angajați și revândute</Text>
    <Text style={styles.tableCell}> 280.000</Text>
  </View>
    <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Anthem BlueCross</Text>
    <Text style={styles.tableCell}>Furt date medicale și financiare nedetectat 10 luni </Text>
    <Text style={styles.tableCell}>80.000.000</Text>
  </View>
  {/* și celelalte */}
</View>
  </>
)}

{courseId==='1' && chapterIndex === '1' && subsection.name==='Securitatea informației' &&
(
  <>
  <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Strat</Text>
    <Text style={styles.tableHeader}>Descriere</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Produse</Text>
    <Text style={styles.tableCell}>Reprezintă protecția în jurul datelor. Poate fi ceva simplu, precum încuietori, sau complex, ca echipamente de securitate în rețea.</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Oameni</Text>
    <Text style={styles.tableCell}>Cei care implementează și folosesc corect produsele de securitate pentru a proteja datele.</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Politici și proceduri</Text>
    <Text style={styles.tableCell}>Planuri și politici stabilite de o organizație pentru a asigura utilizarea corectă a produselor de către oameni.</Text>
  </View>
</View>
  </>
)}

{courseId==='1' && chapterIndex === '1' && subsection.name==='Terminologia securității informației' &&
(
  <>
  <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Termen</Text>
    <Text style={styles.tableHeader}>Exemplu în scenariul lui Ellie</Text>
    <Text style={styles.tableHeader}>Exemplu în securitatea informației</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Activ</Text>
    <Text style={styles.tableCell}>Scuter</Text>
    <Text style={styles.tableCell}>Baza de date a angajaților</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Amenințare</Text>
    <Text style={styles.tableCell}>Furtul scuterului</Text>
    <Text style={styles.tableCell}>Furtul de date</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Agent al amenințării</Text>
    <Text style={styles.tableCell}>Hoț</Text>
    <Text style={styles.tableCell}>Atacator, uragan</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Vulnerabilitate</Text>
    <Text style={styles.tableCell}>Gaura din gard</Text>
    <Text style={styles.tableCell}>Defect de software</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Vector de amenințare</Text>
    <Text style={styles.tableCell}>Intrarea prin gaura din gard</Text>
    <Text style={styles.tableCell}>Accesarea parolelor de pe server printr-o vulnerabilitate software</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Probabilitatea amenințării</Text>
    <Text style={styles.tableCell}>Probabilitatea ca scuterul să fie furat</Text>
    <Text style={styles.tableCell}>Probabilitatea unei infectări cu virus</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Risc</Text>
    <Text style={styles.tableCell}>Să nu mai cumpere scuterul</Text>
    <Text style={styles.tableCell}>Să nu instaleze rețeaua wireless</Text>
  </View>
</View>
  </>
)}
{courseId==='1' && chapterIndex === '2' && subsection.name==='Infractorii cibernetici' &&
(
  <>
 {/* primul tabel */}

<View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Tip atacator</Text>
    <Text style={styles.tableHeader}>Obiectiv</Text>
    <Text style={styles.tableHeader}>Ținte</Text>
    <Text style={styles.tableHeader}>Exemplu de atac</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Cybercriminali</Text>
    <Text style={styles.tableCell}>Profit financiar</Text>
    <Text style={styles.tableCell}>Utilizatori, companii, guverne</Text>
    <Text style={styles.tableCell}>Furtul datelor de card</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Script kiddies</Text>
    <Text style={styles.tableCell}>Distracție, notorietate</Text>
    <Text style={styles.tableCell}>Utilizatori, companii</Text>
    <Text style={styles.tableCell}>Ștergerea datelor</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Brokers</Text>
    <Text style={styles.tableCell}>Vânzarea vulnerabilităților</Text>
    <Text style={styles.tableCell}>Oricine</Text>
    <Text style={styles.tableCell}>Dezvăluirea unei breșe din sistem</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Insideri</Text>
    <Text style={styles.tableCell}>Răzbunare, presiune</Text>
    <Text style={styles.tableCell}>Guverne, companii</Text>
    <Text style={styles.tableCell}>Furt și publicare de informații sensibile</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Teroriști cibernetici</Text>
    <Text style={styles.tableCell}>Provocarea de panică</Text>
    <Text style={styles.tableCell}>Companii, infrastructuri</Text>
    <Text style={styles.tableCell}>Paralizarea rețelelor de apă sau electricitate</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Hacktiviști</Text>
    <Text style={styles.tableCell}>Proteste politice</Text>
    <Text style={styles.tableCell}>Guverne, companii</Text>
    <Text style={styles.tableCell}>Blocarea unui site financiar</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Atacatori de stat</Text>
    <Text style={styles.tableCell}>Spionaj, destabilizare</Text>
    <Text style={styles.tableCell}>Utilizatori, guverne</Text>
    <Text style={styles.tableCell}>Citirea mesajelor de email ale cetățenilor</Text>
  </View>
</View>

 {/* al doilea tab */}
  <Text> </Text>
  <Text style={styles.tableHeader}>Tipuri de web</Text>
  <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Tip web</Text>
    <Text style={styles.tableHeader}>Descriere</Text>
    <Text style={styles.tableHeader}>Exemplu</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Surface web</Text>
    <Text style={styles.tableCell}>Pagini indexate de motoare de căutare</Text>
    <Text style={styles.tableCell}>Site de manuale școlare</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Deep web</Text>
    <Text style={styles.tableCell}>Conținut accesibil doar prin formulare de căutare</Text>
    <Text style={styles.tableCell}>Baza de date medicală</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Dark web</Text>
    <Text style={styles.tableCell}>Informații ascunse, inaccesibile cu browsere obișnuite</Text>
    <Text style={styles.tableCell}>Piață neagră online</Text>
  </View>
</View>
  </>

)} 

{courseId==='3' && chapterIndex === '0' && subsection.name==='Tabel comparativ' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Acțiune</Text>
    <Text style={styles.tableHeader}>Virus</Text>
    <Text style={styles.tableHeader}>Vierme</Text>
    <Text style={styles.tableHeader}>Troian</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Ce face?</Text>
    <Text style={styles.tableCell}>Inserează cod malițios în fișier</Text>
    <Text style={styles.tableCell}>Exploatează vulnerabilități</Text>
    <Text style={styles.tableCell}>Se preface că este ceva legitim</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Cum se răspândește?</Text>
    <Text style={styles.tableCell}>Prin transfer de fișiere de la utilizatori</Text>
    <Text style={styles.tableCell}>Prin rețea, automat</Text>
    <Text style={styles.tableCell}>Prin fișiere mutate de utilizatori</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Infectează fișiere?</Text>
    <Text style={styles.tableCell}>Da</Text>
    <Text style={styles.tableCell}>Nu</Text>
    <Text style={styles.tableCell}>Poate</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Necesită acțiune de la utilizator?</Text>
    <Text style={styles.tableCell}>Da</Text>
    <Text style={styles.tableCell}>Nu</Text>
    <Text style={styles.tableCell}>Da</Text>
  </View>
</View>
</>
)}

{courseId==='3' && chapterIndex === '0' && subsection.name==='Colectarea datelor. Spyware' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Tip Tehnologie</Text>
    <Text style={styles.tableHeader}>Descriere</Text>
    <Text style={styles.tableHeader}>Impact</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Software de descărcare automată</Text>
    <Text style={styles.tableCell}>Instalează aplicații fără acțiunea utilizatorului</Text>
    <Text style={styles.tableCell}>Poate instala aplicații neautorizate</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Tehnologii de urmărire pasivă</Text>
    <Text style={styles.tableCell}>Colectează informații fără instalare suplimentară</Text>
    <Text style={styles.tableCell}>Poate urmări site-urile vizitate</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Software care modifică sistemul</Text>
    <Text style={styles.tableCell}>Schimbă setări precum pagina de start sau funcții de sistem</Text>
    <Text style={styles.tableCell}>Modifică setările fără permisiune</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Software de urmărire</Text>
    <Text style={styles.tableCell}>Monitorizează comportamentul utilizatorului și informații personale</Text>
    <Text style={styles.tableCell}>Poate duce la fraudă sau furt de identitate</Text>
  </View>
</View>
</>
)}

{courseId==='3' && chapterIndex === '0' && subsection.name==='Lansarea atacurilor' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Tip de atac</Text>
    <Text style={styles.tableHeader}>Descriere</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Spam</Text>
    <Text style={styles.tableCell}>Trimitere masivă de emailuri nesolicitate prin zombi</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Răspândire de malware</Text>
    <Text style={styles.tableCell}>Zombie-urile pot descărca și executa fișiere periculoase</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Manipularea sondajelor</Text>
    <Text style={styles.tableCell}>Fiecare zombie are o adresă IP unică → voturi false în sondaje online</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Blocare de servicii (DDoS)</Text>
    <Text style={styles.tableCell}>Botneturile pot copleși un server web cu cereri, făcându-l inaccesibil</Text>
  </View>
</View>
</>
)}

{courseId==='3' && chapterIndex === '1' && subsection.name==='Firewall-uri' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Funcție</Text>
    <Text style={styles.tableHeader}>Personal Firewall</Text>
    <Text style={styles.tableHeader}>Network Firewall</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Locație</Text>
    <Text style={styles.tableCell}>Pe un singur calculator</Text>
    <Text style={styles.tableCell}>La marginea rețelei</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Protecție</Text>
    <Text style={styles.tableHeader}>Doar pentru acel calculator</Text>
    <Text style={styles.tableHeader}>Pentru toate dispozitivele conectate</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Tip</Text>
    <Text style={styles.tableCell}>Software</Text>
    <Text style={styles.tableCell}>Dispozitiv hardware separat</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Filtrare</Text>
    <Text style={styles.tableCell}>Bazată pe aplicațiile care rulează</Text>
    <Text style={styles.tableCell}>Mecanisme avansate de filtrare a traficului</Text>

  </View>
</View>
</>
)}

{courseId==='5' && chapterIndex === '1' && subsection.name==='Securitatea dispozitivului mobil' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Funcție</Text>
    <Text style={styles.tableHeader}>Explicație</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Alarmă</Text>
    <Text style={styles.tableCell}>Dispozitivul poate emite sunete chiar și pe silențios.</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Ultima locație</Text>
    <Text style={styles.tableCell}>Locația finală poate fi salvată înainte ca bateria să se termine.</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Localizare GPS</Text>
    <Text style={styles.tableCell}>Poți vedea poziția pe hartă.</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Blochează de la distanță</Text>
    <Text style={styles.tableCell}>Trimite un mesaj pe ecran și blochează dispozitivul.</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Fotografie cu hoțul</Text>
    <Text style={styles.tableCell}>Face poză cu camera frontală după mai multe coduri greșite și o trimite.</Text>
  </View>
</View>
</>
)}

{courseId==='6' && chapterIndex === '0' && subsection.name==='Riscurile asociate datelor private' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Problemă</Text>
    <Text style={styles.tableHeader}>Explicație</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Informațiile sunt colectate în secret</Text>
    <Text style={styles.tableCell}>Utilizatorii nu știu cine le colectează datele sau cum sunt folosite</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Informațiile pot fi inexacte</Text>
    <Text style={styles.tableCell}>Nu avem control asupra corectitudinii datelor colectate</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Furtul de identitate afectează profilul</Text>
    <Text style={styles.tableCell}>Victimele apar cu date false pe care nu le pot corecta</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Evaluări inexacte</Text>
    <Text style={styles.tableCell}>Se combină factori necunoscuți ca religie, rasă, venit, etc.</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Consimțământul e ambiguu sau lipsă</Text>
    <Text style={styles.tableCell}>Politicile de confidențialitate sunt neclare și dificil de înțeles</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Decizii importante bazate pe date</Text>
    <Text style={styles.tableCell}>Datele influențează creditul, angajarea, asigurările</Text>
  </View>
</View>
</>
)}

{courseId==='6' && chapterIndex === '1' && subsection.name==='Ce este Criptografia?' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Caracteristică</Text>
    <Text style={styles.tableHeader}>Ce înseamnă</Text>
    <Text style={styles.tableHeader}>Cum protejează criptografia</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Confidențialitate</Text>
    <Text style={styles.tableCell}>Doar persoanele autorizate pot vedea datele</Text>
    <Text style={styles.tableCell}>Informațiile criptate pot fi văzute doar cu cheia de acces</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Integritate</Text>
    <Text style={styles.tableCell}>Asigură că datele nu au fost modificate</Text>
    <Text style={styles.tableCell}>Doar utilizatorii autorizați pot modifica datele</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Disponibilitate</Text>
    <Text style={styles.tableCell}>Datele sunt accesibile celor autorizați</Text>
    <Text style={styles.tableCell}>Fișierele criptate pot fi accesate rapid de cei care au cheia</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Autentificare</Text>
    <Text style={styles.tableCell}>Confirmă identitatea expeditorului</Text>
    <Text style={styles.tableCell}>Dovedește că mesajul vine de la un utilizator legitim</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Non-repudiere</Text>
    <Text style={styles.tableCell}>Imposibilitatea de a nega o acțiune efectuată</Text>
    <Text style={styles.tableCell}>Previne situații în care cineva neagă că a trimis un document</Text>
  </View>
</View>
</>
)}

{courseId==='6' && chapterIndex === '1' && subsection.name==='Tipuri de Criptografie' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Acțiune</Text>
    <Text style={styles.tableHeader}>Cheia folosită</Text>
    <Text style={styles.tableHeader}>Tipul cheii</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Trimiți un mesaj criptat</Text>
    <Text style={styles.tableCell}>Cheia destinatarului</Text>
    <Text style={styles.tableCell}>Publică</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Citești un mesaj criptat</Text>
    <Text style={styles.tableCell}>Cheia ta</Text>
    <Text style={styles.tableCell}>Privată</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Trimiți semnătură digitală</Text>
    <Text style={styles.tableCell}>Cheia ta</Text>
    <Text style={styles.tableCell}>Privată</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Verifici semnătură digitală</Text>
    <Text style={styles.tableCell}>Cheia expeditorului</Text>
    <Text style={styles.tableCell}>Publică</Text>
  </View>
</View>
</>
)}

{courseId==='6' && chapterIndex === '1' && subsection.name==='Responsabilitățile Organizațiilor' &&
(
<>
 <View style={styles.table}>
  <View style={styles.tableRow}>
    <Text style={styles.tableHeader}>Eroare comisă</Text>
    <Text style={styles.tableHeader}>Măsură recomandată</Text>
    <Text style={styles.tableHeader}>Explicație</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>A cerut email și parolă și le-a stocat în clartext</Text>
    <Text style={styles.tableCell}>Colectează doar informații necesare</Text>
    <Text style={styles.tableCell}>Nu cere informații inutile și protejează-le</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>A păstrat datele cardului 30 de zile după cumpărare</Text>
    <Text style={styles.tableCell}>Păstrează datele doar cât este necesar</Text>
    <Text style={styles.tableCell}>Șterge datele imediat după finalizarea tranzacției</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>A folosit date reale în sesiuni de training</Text>
    <Text style={styles.tableCell}>Nu folosi date reale când nu e necesar</Text>
    <Text style={styles.tableCell}>Folosește date fictive în scop educațional</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>A trimis fișiere sensibile din greșeală</Text>
    <Text style={styles.tableCell}>Restricționează accesul la date</Text>
    <Text style={styles.tableCell}>Angajații care nu au nevoie de date nu ar trebui să le acceseze</Text>
  </View>
   <View style={styles.tableRow}>
    <Text style={styles.tableCell}>Toți angajații aveau acces complet la sistem</Text>
    <Text style={styles.tableCell}>Limitează accesul administrativ</Text>
    <Text style={styles.tableCell}>Doar cei cu rol specific ar trebui să poată modifica sistemul</Text>
  </View>
    <View style={styles.tableRow}>
    <Text style={styles.tableCell}>A folosit un algoritm de criptare nesigur</Text>
    <Text style={styles.tableCell}>Folosește metode testate și standard</Text>
    <Text style={styles.tableCell}>Utilizează criptare validată de experți</Text>
  </View>
    <View style={styles.tableRow}>
    <Text style={styles.tableCell}>A aruncat documente cu date personale la gunoi</Text>
    <Text style={styles.tableCell}>Elimină datele în siguranță</Text>
    <Text style={styles.tableCell}>Distruge fizic documentele sau hard disk-urile</Text>
  </View>
</View>
</>
)}

        <View style={{ marginTop: 25 }}>
          {currentPage < (chapter?.subsections?.length || 0) - 1 ? (
            <Button text="Înainte" onPress={goToNextPage}/>
          ) : (
            <Button text="Finalizează" onPress={onChapterComplete} loading={loader} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: Platform.OS === 'ios' ? 55 : 25,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  content: {
    marginTop: 20,
  },
  topic: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    color: 'black',
  },
  explain: {
    fontFamily: 'outfit',
    fontSize: 20,
    marginTop: 7,
    color: 'black',
  },
  codeExampleText: {
    padding: 15,
    backgroundColor: Colors.BG_GRAY,
    borderRadius: 15,
    fontFamily: 'outfit',
    fontSize: 18,
    marginTop: 15,
    color: 'black',
  },
  codeDark: {
    backgroundColor: '#1D1D1D',
    color: Colors.WHITE,
  },
  table: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  marginTop: 20,
},
tableRow: {
  flexDirection: 'row',
},
tableHeader: {
  flex: 1,
  padding: 8,
  fontWeight: 'bold',
  backgroundColor: '#f0f0f0',
  borderRightWidth: 1,
  borderColor: '#ccc',
},
tableCell: {
  flex: 1,
  padding: 8,
  borderRightWidth: 1,
  borderColor: '#ccc',
},

});