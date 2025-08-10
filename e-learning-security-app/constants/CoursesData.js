export const coursesData = [
  {
    id:1,
    title: "Introducere în Securitate",
    description:
      "Un curs introductiv despre securitatea informației, care acoperă conceptele fundamentale, tipurile de atacuri cibernetice, actorii implicați și strategiile de apărare. Este ideal pentru începători care vor să înțeleagă cum pot proteja informațiile în era digitală.",
    banner_image: "/banner3.png",
    achievementBadge: "Începător în securitate",
    summary: ``,
    chapters: [
      {
        title: "Provocările asigurării informațiilor",
        subsections: [
          {
            name: "Atacurile din prezent",
             content : `Deși se investesc anual miliarde de dolari în securitatea informației, numărul atacurilor cibernetice reușite continuă să crească, afectând sectoare esențiale:

 • **Retail:** Peste 1 miliard de date de carduri au fost furate într-un an prin atacuri asupra sistemelor PoS, folosind programe malițioase („memory-scrapers”) transmise prin emailuri infectate.
 • **Sănătate:** Dosarele medicale sunt ținte valoroase pentru furt de identitate și fraudă. Atacurile au crescut cu 60% într-un an, provocând pierderi medii de peste 2 milioane de dolari per organizație.
 • **Rețele** wireless casnice: Echipamentele de la 25 de producători sunt vulnerabile la atacuri care compromit toate dispozitivele conectate. Multe nu pot fi actualizate.
 • **Automobile** inteligente: Cercetători au preluat controlul de la distanță asupra funcțiilor unei mașini, determinând retragerea a 1,4 milioane de vehicule.
 • **Avioane:** Prin sistemele de divertisment, un cercetător a susținut că a preluat controlul direcției unui avion, fapt investigat de FBI.
 • **Furturi** auto PKES: Dispozitive de 17 dolari pot amplifica semnalul cheii mașinii, permițând deschiderea și pornirea fără cheie.
 • **Antivirusuri** ineficiente: În prima oră, cele mai populare patru soluții au detectat doar 30% din fișierele malițioase; rata a crescut la 72% după o săptămână, rămânând totuși sute de fișiere nedetectate zilnic.
 • Industria **muzicală:** Madonna și-a lansat albumul mai devreme după ce conținutul său a fost furat online, declarând că nu va mai folosi dispozitive conectate pentru materiale sensibile.
 • **Temeri** publice: 69% dintre americani se tem de furtul datelor de pe carduri online – mai mulți decât cei care se tem de infracțiuni fizice.
 • **Apple:** Dispozitivele Apple, deși considerate sigure, au prezentat o vulnerabilitate majoră care permitea accesul neautorizat chiar și după reinstalare.
 • **Statistică** generală: Între 2005 și 2015, în SUA au fost compromise peste 853 de milioane de înregistrări electronice cu date personale, financiare și medicale.
`,
            flashcards: [
              {
                title: "Flashcard 1",
                cards: [
                  {
                    front: "Ce sunt atacurile PoS?",
                    back: "Atacuri asupra sistemelor de plată din magazine, care fură datele cardurilor prin malware."
                  }
                ]
              },
              {
                title: "Flashcard 2",
                cards: [
                  {
                    front: "De ce este vizat sectorul sănătății?",
                    back: "Pentru că dosarele medicale conțin atât date personale, cât și financiare valoroase."
                  }
                ]
              },
              {
                title: "Flashcard 3",
                cards: [
                  {
                    front: "Ce vulnerabilitate au rețelele wireless casnice?",
                    back: "Echipamentele de la mulți producători permit lansarea de atacuri asupra dispozitivelor conectate."
                  }
                ]
              },
              {
                title: "Flashcard 4",
                cards: [
                  {
                    front: "Cum pot fi manipulate automobilele inteligente?",
                    back: "Cercetătorii au controlat funcții de la distanță precum frânele sau ștergătoarele."
                  }
                ]
              },
              {
                title: "Flashcard 5",
                cards: [
                  {
                    front: "Care este riscul produselor antivirus?",
                    back: "Nu detectează rapid toate amenințările – uneori, sute de fișiere malițioase scapă nedetectate."
                  }
                ]
              }
            ],
            qa: [
              {
                question: "Care este cauza atacurilor asupra sistemelor PoS?",
                answer: "Utilizarea de malware pentru a colecta date imediat după trecerea cardului."
              },
              {
                question: "Ce pierdere medie a fost raportată în sectorul sănătății?",
                answer: "Peste 2 milioane de dolari pe organizație."
              },
              {
                question: "Ce vulnerabilitate afectează rețelele wireless casnice?",
                answer: "Dispozitivele nu pot fi actualizate, iar producătorii nu oferă suport."
              },
              {
                question: "Ce tehnică de furt auto a fost demonstrată?",
                answer: "Folosirea unui amplificator de semnal pentru a porni mașina fără cheie."
              },
              {
                question: "Ce erori au afectat dispozitivele Apple?",
                answer: "Permiteau accesul la sistem chiar și după reinstalare completă."
              }
            ]
          }
        ]
      },
      {
        title: "Ce este securitatea informației?",
        subsections:[
            {
                name:"Înțelegerea securității",
                content:`**Conceptul de securitate**

Termenul securitate poate avea mai multe definiții:
• „Stare de libertate față de pericol”
• „Protejarea proprietății”
• „Grad de rezistență la daune”
• Diferențele apar în funcție de accentul pus pe proces (cum se obține securitatea) sau pe scop (ce înseamnă să fii în siguranță). În realitate, securitatea este o combinație între scopul de a fi în siguranță și procesul de a ajunge acolo.

**Securitatea ca proces**

Deoarece siguranța totală nu poate fi atinsă niciodată, securitatea este adesea privită ca un proces continuu care implică:
Pași necesari pentru a proteja o persoană sau proprietate de vătămare.

Exemplu: O casă trebuie protejată atât de:
Atacuri directe (un infractor sau hoț), cât și de pericole indirecte (furtuni, uragane).

Această protecție poate include:
• Uși încuiate
• Garduri
• Prezența autorităților
• Construcții solide și sisteme de reacție rapidă

**Prevenția atacurilor**

Securitatea presupune **măsuri** preventive (ex: încuierea ușilor) și răspuns rapid (ex: apelarea automată a poliției la 911 dacă apare ceva suspect).
Securitatea informației implică înțelegerea riscurilor și aplicarea unor măsuri pentru a proteja datele de atacuri directe sau indirecte. Securitatea este atât un **obiectiv** (siguranța), cât și un **proces** (măsuri preventive și reacție).

**Relația dintre securitate și comoditate**
Pe măsură ce securitatea crește, comoditatea scade. Cu alte cuvinte, ceva foarte **sigur** poate fi mai **greu** de utilizat. 
**Exemplu:** un sistem de alarmă care cere introducerea unui cod în 30 de secunde – sporește siguranța casei, dar e mai incomod decât să intri direct.
Securitatea înseamnă sacrificarea confortului pe termen scurt pentru protecție pe termen lung.
`,
                flashcards: [
        {
          title: "Definiții ale securității",
          cards: [
            {
              front: "Ce înseamnă securitate?",
              back: "Stare de libertate față de pericol, protejarea proprietății și grad de rezistență la daune."
            }
          ]
        },
        {
          title: "Securitatea ca proces",
          cards: [
            {
              front: "De ce este securitatea un proces?",
              back: "Pentru că implică pași continui pentru protecție împotriva pericolelor."
            }
          ]
        },
        {
          title: "Exemplu de măsuri de protecție",
          cards: [
            {
              front: "Ce măsuri de protecție pot avea casele?",
              back: "Uși încuiate, garduri, autorități, construcții solide, reacție rapidă."
            }
          ]
        },
        {
          title: "Comoditate vs. Securitate",
          cards: [
            {
              front: "Care este relația dintre securitate și comoditate?",
              back: "Pe măsură ce securitatea crește, comoditatea scade."
            }
          ]
        }
      ],
                qa: [
        {
          question: "De ce securitatea este considerată un proces continuu?",
          answer: "Pentru că siguranța totală nu poate fi atinsă și necesită acțiuni constante."
        },
        {
          question: "Ce înseamnă securitatea în contextul unei case?",
          answer: "Protecția casei față de atacuri directe și pericole naturale, prin măsuri fizice și de reacție."
        },
        {
          question: "Cum afectează securitatea comoditatea?",
          answer: "Măsurile de securitate cresc siguranța, dar pot face sistemul mai greu de utilizat."
        }
      ]
            },
              {
                name:"Securitatea informației",
                content:`**Definiția securității**

Securitatea informației presupune protejarea datelor digitale manipulate de procesoare, stocate pe dispozitive (hard disk, USB) și transmise prin rețea.
Este atât un obiectiv (protecția datelor), cât și un proces (cum se realizează protecția). Nu poate preveni toate atacurile, dar trebuie să limiteze efectele acestora și să prevină prăbușirea sistemului. Scopul principal este protecția.

**Obiectivele securității informației: Triada CIA**
• **Confidențialitate** (Confidentiality) – doar persoanele autorizate pot accesa informația.

 Exemplu: criptarea numărului cardului bancar.

• **Integritate** (Integrity) – datele sunt corecte și nealterate.

 Exemplu: un atacator nu poate schimba suma unei tranzacții.

• **Disponibilitate** (Availability) – datele sunt accesibile pentru cei autorizați.

 Exemplu: angajatul poate vedea comenzile online pentru a le trimite clientului.

**Protecții suplimentare: AAA**

• Autentificare (Authentication) – confirmă că persoana este cine pretinde că este (ex: parolă).

• Autorizare (Authorization) – permite accesul doar după autentificare, în funcție de drepturile acordate.

• Audit / Contabilitate (Accounting) – urmărește cine a accesat ce și când (jurnal de activitate).


**Cum se protejează informația?**

Pentru că informația este stocată pe hardware, manipulată prin software și transmisă prin comunicații, toate aceste zone trebuie protejate.

Securitatea este realizată prin trei straturi:
• Produse (echipamente, software),

• Oameni (utilizatori, experți),

• Politici și proceduri (reguli clare).

Aceste componente colaborează pentru a asigura protecția eficientă a datelor.

**Componente securitate**

Securitatea informației presupune un echilibru între protecție și utilizabilitate. Ea include:
• măsuri tehnice (criptare, acces controlat)

• politici clare,

• implicarea oamenilor în respectarea regulilor.

Scopul este prevenirea, detectarea și reacția eficientă la atacuri, fără a compromite complet accesibilitatea sau funcționalitatea sistemului.

**Rezumat secțiune**

O definiție cuprinzătoare a securității informației implică atât obiectivele, cât și procesul. Securitatea informației poate fi definită ca acea activitate care protejează integritatea, confidențialitatea și disponibilitatea informațiilor de pe dispozitivele care stochează, procesează și transmit informațiile, prin intermediul produselor, oamenilor și procedurilor.

**Straturi ale securității informației**

`,
                flashcards:[
        {
          title: "Triada CIA",
          cards: [
            {
              front: "Care sunt obiectivele Triadei CIA?",
              back: "Confidențialitate, Integritate, Disponibilitate."
            }
          ]
        },
        {
          title: "Protecțiile AAA",
          cards: [
            {
              front: "Ce înseamnă AAA în securitate?",
              back: "Autentificare, Autorizare, Audit."
            }
          ]
        },
        {
          title: "Straturile securității",
          cards: [
            {
              front: "Care sunt cele 3 straturi ale securității informației?",
              back: "Produse, Oameni, Politici și proceduri."
            }
          ]
        },
        {
          title: "Exemplu de produs de securitate",
          cards: [
            {
              front: "Ce este considerat un produs în securitate?",
              back: "Echipamente de protecție, criptare, software antivirus."
            }
          ]
        }
      ],
                qa:[
        {
          question: "Ce asigură confidențialitatea?",
          answer: "Accesul la informații doar pentru persoanele autorizate."
        },
        {
          question: "Ce scop are integritatea datelor?",
          answer: "Să se asigure că datele sunt corecte și nealterate."
        },
        {
          question: "Ce înseamnă audit în contextul AAA?",
          answer: "Urmărirea accesărilor și acțiunilor asupra datelor."
        },
        {
          question: "Care este scopul politicilor și procedurilor?",
          answer: "Asigurarea utilizării corecte a produselor de către oameni."
        }
      ]

            },
              {
                name:"Terminologia securității informației",
                content:`**Scenariu din viața reală** 

Așa cum se întâmplă în multe domenii avansate, și securitatea informației are un set propriu de termeni. Următorul scenariu ajută la ilustrarea acestor termeni și modul în care sunt folosiți.

Să presupunem că Ellie dorește să cumpere un scuter italian nou, pe care să-l folosească pentru a merge de la apartamentul ei la școală și la serviciu. Totuși, pentru că mai multe scutere au fost furate în zona unde locuiește, este îngrijorată în privința protejării acestuia. Deși îl parchează într-o parcare cu gard, chiar în fața apartamentului, există o gaură în gardul ce înconjoară complexul rezidențial, prin care oricine poate intra fără restricții. 

**În acest context:**

• Scuterul lui Ellie este un **activ** – un obiect care are valoare.

• Pericolul ca acesta să fie furat reprezintă o **amenințare** – o acțiune potențial periculoasă.

• Gaura din gard este o **vulnerabilitate** – un punct slab care permite amenințării să se manifeste.

• Persoana care ar putea fura scuterul este agentul **amenințării** – elementul capabil să execute fapta.

• Furtul scuterului este **rezultatul** nedorit – adică pierdere sau risc.

**Explicații detaliate**

O **amenințare**, în sine, nu înseamnă că securitatea a fost compromisă, ci doar că există un risc real de pierdere.

**Agentul** amenințării este persoana sau elementul care are puterea de a duce la îndeplinire amenințarea. În cazul lui Ellie, acesta este **hoțul**. În securitatea informației, agentul amenințării poate fi un **atacator** cibernetic, un **virus** informatic, sau chiar o forță a naturii (ex: un uragan care distruge echipamentele).
Ellie vrea să își protejeze scuterul și este îngrijorată din cauza unei găuri în gardul din jurul apartamentului. Gaura din gard este o **vulnerabilitate** – o slăbiciune sau un defect care permite unui agent al amenințării să treacă de sistemul de protecție.

**În securitatea informației**

O vulnerabilitate poate fi, de exemplu, un **defect** de software într-un sistem de operare care permite unui utilizator neautorizat să preia controlul unui calculator fără acordul sau cunoștința utilizatorului.
Dacă hoțul ajunge la scuterul lui Ellie prin gaura din gard, atunci el exploatează vulnerabilitatea – adică profită de acel punct slab. Acest lucru se numește **vector** de amenințare – mijlocul prin care se poate realiza un atac.

În lumea digitală, un atacator care știe că un server nu are toate actualizările poate folosi acest vector pentru a fura parole, de exemplu.

**Probabilitatea unei amenințări – cum luăm decizii în securitate?**

Ellie trebuie să ia o decizie: care este probabilitatea (sau probabilitatea amenințării) ca scuterul să-i fie furat? 
Acesta este conceptul de risc – o situație care implică expunerea la pericol.

Ea are mai multe opțiuni:
• **Evitarea** riscului (risk avoidance): Decide că riscul e prea mare și renunță să mai cumpere scuterul.

• **Acceptarea** riscului (risk acceptance): Îl cumpără totuși, știind că există pericolul ca un hoț să intre prin gard.

• **Reducerea** riscului (risk mitigation): Se plânge administratorului și solicită repararea gardului.

• **Descurajarea** riscului (risk deterrence): Cere afișarea unui semn cu mesaj de genul „Intrarea interzisă. Hoții vor fi pedepsiți!”

• **Transferul** riscului (risk transference): Cel mai probabil, Ellie va cumpăra asigurare. Dacă scuterul e furat, compania de asigurări suportă pierderea, nu ea.

**Rezumat scenariu**

Mai jos este un tabel care rezumă termenii de securitate:

`,
                flashcards: [
        {
          title: "Termeni fundamentali",
          cards: [
            {
              front: "Ce este o amenințare?",
              back: "Un eveniment sau o acțiune ce poate cauza daune unui activ."
            }
          ]
        },
        {
          title: "Agentul amenințării",
          cards: [
            {
              front: "Cine este agentul amenințării?",
              back: "Persoana sau elementul care poate executa o amenințare."
            }
          ]
        },
        {
          title: "Vulnerabilitate și vector",
          cards: [
            {
              front: "Ce este un vector de amenințare?",
              back: "Mijlocul prin care o amenințare este realizată, exploatând o vulnerabilitate."
            }
          ]
        }
      ],
                qa: [
        {
          question: "Cum poate fi definit riscul în securitate?",
          answer: "Probabilitatea ca o vulnerabilitate să fie exploatată de un agent al amenințării."
        },
        {
          question: "Ce înseamnă transferul riscului?",
          answer: "Mutarea responsabilității, de exemplu prin asigurare."
        },
        {
          question: "Cum se manifestă o amenințare în cazul lui Ellie?",
          answer: "Furtul scuterului din cauza unei găuri în gard."
        }
      ]

            },
              {
                name:"Înțelegerea importanței securității informației",
                content:`**Importanța securității**

Securitatea informației este importantă atât pentru persoane, cât și pentru organizații. Asta deoarece poate ajuta la:
• prevenirea furtului de date

• împiedicarea furtului de identitate,

• evitarea consecințelor legale pentru lipsa de protecție a informației,

• menținerea productivității,

• combaterea terorismului cibernetic.

**Prevenirea furtului de date**

Securitatea este adesea asociată cu prevenirea furtului: 
Ellie poate parca scuterul într-un garaj încuiat ca să nu fie furat. La fel, protejarea datelor de a fi **„furate”** este unul dintre principalele scopuri ale securității informației.
Pentru afaceri, este esențial să se apere împotriva furtului de informații valoroase, cum ar fi cercetarea pentru un produs nou sau listele de clienți.

**Țintele preferate ale infractorilor digitali**

Numerele de card bancar: de debit, credit sau carduri cadou.

Acestea pot fi vândute pe piața neagră și folosite pentru cumpărături online, înainte ca victima sau banca să observe ceva.

**Tehnici frecvente de hoție a datelor**

• Hoții fac o mică tranzacție pentru a vedea dacă un card este activ, fără a atrage atenția.

• Vânzătorii de pe piața neagră oferă garanții temporare că numerele de card vor funcționa.

• Aceștia monitorizează utilizarea pentru a evita detectarea – dacă un card e descoperit, clienții pierd bani.

• Dacă numărul furat e însoțit de informații personale (ex: CNP, dată naștere), hoțul poate răspunde la întrebări de securitate bancară și face cumpărături mari fără să fie detectat.

**Prevenirea furtului de identitate**

Furtul de identitate înseamnă să furi datele personale ale altei persoane – cum ar fi CNP-ul – și să te dai drept ea, de obicei pentru a obține bani.
**Exemple:**
• Deschiderea de conturi bancare pe numele victimei.

• Achiziționarea de bunuri costisitoare – uneori chiar mașini sau case – cu împrumuturi pe numele ei.

• În fiecare an, infractorii trimit declarații fiscale false în numele altora, pentru a încasa banii din rambursări (peste 6 miliarde de dolari pierderi anual, conform IRS – SUA).
`,
                flashcards:[
        {
          title: "Importanța protejării datelor",
          cards: [
            {
              front: "De ce este importantă securitatea informației pentru firme?",
              back: "Pentru a proteja date valoroase și a preveni fraude sau pierderi."
            }
          ]
        },
        {
          title: "Furtul de identitate",
          cards: [
            {
              front: "Ce este furtul de identitate?",
              back: "Utilizarea datelor personale ale altcuiva pentru obținerea de avantaje."
            }
          ]
        },
        {
          title: "Ținte pentru infractori digitali",
          cards: [
            {
              front: "Care sunt cele mai vizate informații de către hackeri?",
              back: "Numere de card, date personale, liste de clienți."
            }
          ]
        }
      ],
                qa:[
        {
          question: "Care este rolul securității în prevenirea furtului de date?",
          answer: "Asigură măsuri de protecție care limitează accesul neautorizat și detectează atacurile."
        },
        {
          question: "Cum pot fi folosite datele furate de infractori?",
          answer: "Pentru a răspunde la întrebări bancare și a face cumpărături mari."
        },
        {
          question: "Cum se poate preveni furtul de identitate?",
          answer: "Prin protejarea datelor personale și autentificare sigură."
        }
      ]

            }
        ]
      },
      {
        title: "Cine sunt atacatorii?",
        subsections:[
            {
            name:"Infractorii cibernetici",
            content:`**Ce este un Hacker ?**
În trecut, termenul  **„hacker”**  desemna o persoană cu abilități avansate care ataca calculatoare. Astăzi , securitatea modernă clasifică atacatorii în funcție de motivația, nivelul de abilități și țintele lor.

**Cele mai comune categorii:**

**1. Cybercriminalii – criminalii digitali**

• **Motivație:** bani, nu recunoaștere.

• **Ținte:** persoane (carduri, parole), afaceri (date clienți), guverne (proprietate intelectuală).

• **Metode:**
  - Fură date personale și le vând pe dark web.
  - Colaborează în rețele subterane (forumuri de pe deep/dark web) pentru a-și coordona atacurile.
  - Uneori sunt parte din bande organizate, în special în Europa de Est sau Asia.

• **Tehnici frecvente:**
  - Phishing, ransomware, skimming, atacuri asupra conturilor bancare.

• **Termen util:** cybercrime = infracțiune informatică, de obicei cu scop financiar.

**2. Script Kiddies – amatorii periculoși**

• **Motivație:** distracție, senzațional, validare socială.

• **Ținte:** oricine – de la site-uri personale până la servere de jocuri.

• **Caracteristici:**
  - Lipsiți de cunoștințe avansate, folosesc „kituri de atac” preconfigurate.
  - Descărcă scripturi automate de pe internet și le folosesc fără a înțelege cum funcționează.
  
• **Exemplu:** atacuri DDoS asupra serverelor de jocuri sau ștergere accidentală de date.

• Potrivit studiilor, 72% dintre atacuri provin din kituri de exploit, adesea folosite de script kiddies.

**3. Brokers – intermediarii vulnerabilităților**

• **Motivație:** profit prin vânzare.

• **Ținte:** oricine plătește – companii, guverne, grupuri obscure.

• **Rol:**
  - Caută și descoperă breșe de securitate (ex: buguri în software).
  - Pot alege între a le raporta responsabil (bug bounty) sau a le vinde în secret.

• **Exemplu:** cineva descoperă o vulnerabilitate în Windows și o vinde unui grup din dark web pentru sume mari.

• **Problemă:** aceste vulnerabilități rămân necunoscute pentru dezvoltatori și nu pot fi reparate, ceea ce le face extrem de periculoase.

**4. Insiders – pericolul din interior**

• **Motivație:** răzbunare, câștig personal, presiune.


• **Ținte:** propria organizație – companii, instituții, spitale.

• **Cine** sunt?:
  - Angajați, colaboratori sau parteneri care au acces la sistem.
  - Poate fi cineva concediat recent sau care simte că „deține” informația pe care a creat-o.

• **Exemple:**
  - Un angajat fură fișiere confidențiale și le vinde mass-mediei.
  - Un dezvoltator pleacă de la firmă și ia codul sursă cu el.
  - Un angajat vinde baze de date clienți către competiție.


• În peste **48%** din cazurile de scurgeri de date, vinovatul este o persoană din interior.

**5. Cyberteroriști – războinicii ideologici**

• **Motivație:** ideologie, principii radicale, distrugere socială.

• **Ținte:** infrastructuri critice – rețele electrice, apă, spitale, transport.

• **Caracteristici:**
  - Pot rămâne inactivi ani de zile și apoi să lovească neașteptat.
  - Atacurile sunt greu de prevăzut și extrem de periculoase.

• **Exemplu:** infectarea calculatoarelor care controlează sistemul de electricitate al unei țări.

• Spre deosebire de alți atacatori, nu sunt motivați de bani, ci de haos și frică.

**6. Hacktiviști – protestatarii digitali**

• **Motivație:** activism politic, ideologie.

• **Ținte:** guverne, corporații care susțin politici controversate.

• **Metode:**
  - Modifică site-uri pentru a transmite mesaje politice.
  - Lansează atacuri ca represalii pentru nedreptăți percepute.
  
• **Exemplu:** blocarea site-ului unei bănci pentru că a refuzat plăți către o organizație.

• **Hacktivism** = hack + activism – un amestec de protest și infracțiune cibernetică.

**7. Atacatori sponsorizati de stat**

• **Motivație:** spionaj, destabilizare, interese strategice.

• **Ținte:** cetățeni, guverne, companii străine.

• **Caracteristici:**
  - Extrem de bine finanțați, experți, greu de detectat.
  - Lucrează pentru guverne și pot ataca orice infrastructură critică.

• **Exemple:**
  - Furtul de e-mailuri ale oficialilor.
  - Sabotaj economic prin furt de secrete industriale.

• Se consideră cei mai periculoși atacatori: nu abandonează până nu reușesc, aleg ținte precise și au suport guvernamental.

**Caracteristici ale atacatorilor**

Tabelul rezumă informații despre atacatori: 

`,
            flashcards: [
        {
          title: "Tipuri de hackeri",
          cards: [
            {
              front: "Ce tipuri de atacatori sunt incluși în categoria 'infractorilor cibernetici'?",
              back: "Cybercriminali, Script Kiddies, Brokers, Insiders, Cyberteroriști, Hacktiviști, Atacatori sponsorizati de stat."
            }
          ]
        },
        {
          title: "Ce este un cybercriminal?",
          cards: [
            {
              front: "Ce urmăresc cybercriminalii?",
              back: "Obținerea de bani prin furt de date și vânzarea acestora pe dark web."
            }
          ]
        },
        {
          title: "Script Kiddies",
          cards: [
            {
              front: "Cine sunt 'script kiddies'?",
              back: "Amatori care folosesc unelte automate de atac, fără să le înțeleagă funcționarea."
            }
          ]
        },
        {
          title: "Hacktiviști",
          cards: [
            {
              front: "Ce motivează un hacktivist?",
              back: "Activism politic sau ideologic, exprimat prin atacuri asupra site-urilor."
            }
          ]
        },
        {
          title: "Atacatori sponsorizati de stat",
          cards: [
            {
              front: "Ce îi face pe atacatorii sponsorizati de stat periculoși?",
              back: "Sunt bine finanțați, foarte capabili, cu sprijin guvernamental și ținte precise."
            }
          ]
        }
      ],
            qa:[
        {
          question: "Ce metodă folosesc des cybercriminalii pentru a fura informații?",
          answer: "Phishing, ransomware, skimming și atacuri asupra conturilor bancare."
        },
        {
          question: "De ce sunt 'script kiddies' considerați periculoși?",
          answer: "Pentru că pot cauza daune serioase fără a înțelege instrumentele folosite."
        },
        {
          question: "Ce rol joacă 'brokers' în peisajul infracțional cibernetic?",
          answer: "Identifică vulnerabilități și le vând pe piața neagră pentru profit."
        },
        {
          question: "Cum contribuie 'insiders' la breșele de securitate?",
          answer: "Fură sau divulgă informații sensibile din interiorul organizației."
        },
        {
          question: "Care este scopul atacatorilor sponsorizati de stat?",
          answer: "Spionaj, destabilizare și sabotaj economic în interesul unei țări."
        }
      ]
            }

        ]
      },
      {
        title: "Construirea unei strategii de securitate cuprinzătoare",
        subsections:[
             {
             name:"Ce trebuie făcut?",
             content:`**Pași de urmat** 

Ce presupune o strategie practică și completă de securitate? Există patru elemente esențiale:

• Blocarea atacurilor
• Actualizarea apărării
• Minimizărea pierderilor
• Menținerea vigilenței

Aceste elemente nu sunt noi – tacticile au fost folosite încă din Evul Mediu, în special în fortificațiile europene. Înțelegerea acestor principii clasice ajută la aplicarea lor în securitatea informatică modernă.

**Blocarea atacurilor (Block Attacks)**

Cuvântul **„castel”** provine din latinul „fortress” – o **fortăreață**. În trecut, un castel avea două metode principale de apărare:
• Șanțuri pline cu apă pentru a ține inamicul la distanță.
• Ziduri de piatră între șanț și pereții exteriori ai castelului, formând un „perimetru de securitate”.

**Scopul:** oricine voia să atace trebuia să treacă prin acest perimetru solid.

În paralel, în securitatea informatică:
• Perimetrul de securitate este reprezentat de **rețeaua** la care e conectat calculatorul.
• **Dispozitivele** din rețea (ex: firewall, antivirus, sisteme de filtrare email/web) pot bloca traficul rău intenționat.

Pe lângă perimetrul extern, fiecare calculator trebuie să aibă protecție locală – exact cum un soldat avea propriul scut pentru a respinge săgețile care trec de ziduri. În informatică, această protecție locală înseamnă firewall personal, antivirus, reguli de securitate individuale.
Actualizarea apărării (Update Defenses)
Imaginează-ți că soldații dintr-un castel au scuturi de piele împotriva săgeților. Dar ce se întâmplă dacă săgețile inamicului sunt aprinse? Dacă nu știu să reacționeze, castelul poate fi incendiat.

**Concluzie:** apărarea trebuie actualizată constant pentru a face față „noilor tipuri de săgeți”.

**În securitatea IT:**

Atacatorii moderni sunt la fel de ingenioși, dacă nu mai mult, decât cei de acum 1000 de ani.
În fiecare zi apar noi **amenințări**.
Este vital ca sistemele să fie **actualizate** continuu – atât software-ul, cât și hardware-ul, cât și sistemele de operare.

**Minimizează pierderile (Minimize Losses)**

Dacă o săgeată aprinsă trece de zid și lovește o balot de fân, castelul arde – dacă apărătorii nu au o găleată cu apă pregătită, e prea târziu.
 În informatică: este esențial să accepți că unele atacuri vor trece de apărare. De aceea:
• Se fac copii de siguranță (backup).
• Se aplică politici de recuperare în caz de atac reușit.
•Se planifică din timp răspunsul la incidente pentru a limita pagubele.

**Menține vigilența (Stay Alert)**

Un castel nu ar fi sigur dacă apărătorii dorm sau se ascund sub paturi de frică. Toți cei care apărau castelul trebuiau să fie vigilenți, atenți și gata de luptă.
La fel în securitatea modernă:
Securitatea nu este sarcina „altcuiva”, ci responsabilitatea fiecărui utilizator.

Este nevoie de:
• Cunoștințe despre ce trebuie făcut.
• Motivație de a rămâne în alertă.
• Vigilență constantă, deoarece apar atacuri noi în fiecare zi – exploatează vulnerabilități încă necunoscute.
`,
             flashcards: [
        {
          title: "Blocarea atacurilor",
          cards: [
            {
              front: "Ce înseamnă blocarea atacurilor în securitatea informatică?",
              back: "Folosirea unui perimetru de securitate cu firewall-uri, antivirusuri și protecție locală pentru fiecare dispozitiv."
            }
          ]
        },
        {
          title: "Actualizarea apărării",
          cards: [
            {
              front: "De ce trebuie actualizată constant apărarea în securitate IT?",
              back: "Pentru a face față noilor tipuri de atacuri care apar zilnic."
            }
          ]
        },
        {
          title: "Minimizarea pierderilor",
          cards: [
            {
              front: "Cum se pot minimiza pierderile în caz de atac?",
              back: "Prin backupuri, politici de recuperare și planuri de reacție rapidă."
            }
          ]
        },
        {
          title: "Menținerea vigilenței",
          cards: [
            {
              front: "Ce presupune vigilența în securitatea modernă?",
              back: "Conștientizare, educație, motivație și reacție rapidă la noi amenințări."
            }
          ]
        },
        {
          title: "Paralela castel-securitate",
          cards: [
            {
              front: "Cum este comparat un castel medieval cu un sistem de securitate IT?",
              back: "Perimetru de apărare = firewall; scut individual = antivirus local."
            }
          ]
        }
      ],
             qa:[
        {
          question: "Care este scopul blocării atacurilor?",
          answer: "Împiedicarea accesului neautorizat prin perimetre de securitate și protecție individuală."
        },
        {
          question: "De ce este importantă actualizarea sistemelor?",
          answer: "Pentru a combate noi amenințări care apar zilnic și care pot exploata vulnerabilități necunoscute."
        },
        {
          question: "Ce reprezintă minimizarea pierderilor într-o strategie de securitate?",
          answer: "Reducerea impactului unui atac prin backupuri și proceduri de răspuns."
        },
        {
          question: "Ce rol joacă utilizatorii în securitatea informațiilor?",
          answer: "Toți utilizatorii trebuie să fie vigilenți și educați, nu doar departamentele IT."
        },
        {
          question: "Cum ajută analogia cu castelul în explicarea securității?",
          answer: "Ilustrează clar structura în straturi și necesitatea apărării multiple."
        }
      ]
            },
        ]
      }
    ],
    quiz:[
      
    {
  title: "Quiz 1",
  totalPoints: 100,
  questions: [
    {
      question: "Fiecare dintre următoarele este un motiv pentru care este dificil să ne apărăm de atacatorii de astăzi, cu excepția:",
      options: [
        "detectarea rapidă a vulnerabilităților",
        "complexitatea uneltelor de atac",
        "confuzia utilizatorului",
        "sofisticarea crescută a atacurilor"
      ],
      correctAns: "detectarea rapidă a vulnerabilităților",
      points: 100 / 6
    },
    {
      question: "În sens general, „securitatea” înseamnă:",
      options: [
        "disponibilă doar pe computere specializate",
        "protejare împotriva acțiunilor directe",
        "pașii necesari pentru a proteja o persoană sau o proprietate împotriva răului",
        "ceva ce se poate atinge relativ ușor"
      ],
      correctAns: "pașii necesari pentru a proteja o persoană sau o proprietate împotriva răului",
      points: 100 / 6
    },
    {
      question: "__________ asigură faptul că doar persoanele autorizate pot vedea informațiile.",
      options: [
        "Integritatea",
        "Confidențialitatea",
        "Disponibilitatea",
        "Autorizarea"
      ],
      correctAns: "Confidențialitatea",
      points: 100 / 6
    },
    {
      question: "De ce pot brokerii să ceară un preț atât de mare pentru ceea ce vând?",
      options: [
        "Sunt profesioniști licențiați",
        "Țintele atacurilor sunt mereu corporații bogate",
        "Vulnerabilitatea descoperită este necunoscută și e puțin probabil să fie corectată rapid",
        "Lucrează în echipă și toți trebuie plătiți"
      ],
      correctAns: "Vulnerabilitatea descoperită este necunoscută și e puțin probabil să fie corectată rapid",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele este un strat succesiv în realizarea securității informației, cu excepția:",
      options: [
        "politici și proceduri",
        "oameni",
        "produse",
        "scopuri"
      ],
      correctAns: "scopuri",
      points: 100 / 6
    },
    {
      question: "Ce este o persoană sau element care are capacitatea de a realiza o amenințare?",
      options: [
        "exploatator",
        "agent al amenințării",
        "element periculos",
        "agent de risc"
      ],
      correctAns: "agent al amenințării",
      points: 100 / 6
    }
  ]
},
{
  title: "Quiz 2",
  totalPoints: 100,
  questions: [
    {
      question: "În terminologia securității informației, un/ o __________ este o slăbiciune care permite unui atacator să ocolească protecțiile de securitate.",
      options: [
        "acces",
        "vulnerabilitate",
        "gaură de vierme",
        "control al accesului"
      ],
      correctAns: "vulnerabilitate",
      points: 100 / 6
    },
    {
      question: "__________ asigură că indivizii sunt cine pretind că sunt.",
      options: [
        "Demonstrarea",
        "Autentificarea",
        "Contabilitatea",
        "Certificarea"
      ],
      correctAns: "Autentificarea",
      points: 100 / 6
    },
    {
      question: "Motivația __________ este atacarea în numele principiilor sau credințelor proprii.",
      options: [
        "teroriștilor cibernetici",
        "angajaților din interior",
        "script kiddies",
        "spionilor informatici"
      ],
      correctAns: "teroriștilor cibernetici",
      points: 100 / 6
    },
    {
      question: "Care este diferența dintre un hacktivist și un terorist cibernetic?",
      options: [
        "Hacktivistul este motivat de ideologie, iar teroristul cibernetic nu",
        "Teroriștii cibernetici lucrează în grupuri, hacktiviștii singuri",
        "Scopul hacktivistului nu este să creeze panică",
        "Teroriștii cibernetici sunt mai bine finanțați"
      ],
      correctAns: "Scopul hacktivistului nu este să creeze panică",
      points: 100 / 6
    },
    {
      question: "Păstrarea copiilor de rezervă cu date importante într-un loc sigur este un exemplu de __________.",
      options: [
        "minimizarea pierderilor",
        "trimiterea informațiilor în siguranță",
        "blocarea atacurilor",
        "stratificare"
      ],
      correctAns: "minimizarea pierderilor",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele poate fi clasificat drept „insider” cu excepția:",
      options: [
        "partenerilor de afaceri",
        "contractorilor",
        "criminalilor cibernetici",
        "angajaților"
      ],
      correctAns: "criminalilor cibernetici",
      points: 100 / 6
    }
  ]
},
{
  title: "Quiz 3",
  totalPoints: 100,
  questions: [
    {
      question: "Care este un obiectiv al atacatorilor sponsorizati de stat?",
      options: [
        "a corecta o nedreptate percepută",
        "a spiona cetățenii",
        "a vinde vulnerabilități celui care oferă mai mult",
        "faimă înaintea profitului"
      ],
      correctAns: "a spiona cetățenii",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele este o caracteristică a criminalilor cibernetici, cu excepția:",
      options: [
        "motivație scăzută",
        "finanțare mai bună",
        "aversiune redusă față de risc",
        "tenacitate mai mare"
      ],
      correctAns: "motivație scăzută",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele este o caracteristică a infracțiunii informatice, cu excepția:",
      options: [
        "încercări neautorizate de accesare a informațiilor",
        "atacuri direcționate asupra rețelelor financiare",
        "utilizarea exclusivă a viermilor și virușilor",
        "furtul informațiilor personale"
      ],
      correctAns: "utilizarea exclusivă a viermilor și virușilor",
      points: 100 / 6
    },
    {
      question: "Un exemplu de __________ este un defect de software într-un sistem de operare care permite unui utilizator neautorizat să acceseze un computer fără parolă.",
      options: [
        "exploatarea unui activ",
        "agent al amenințării",
        "vulnerabilitate",
        "amenințare"
      ],
      correctAns: "vulnerabilitate",
      points: 100 / 6
    },
    {
      question: "__________ asigură că informația este corectă și că niciun utilizator neautorizat sau software malițios nu a modificat acele date.",
      options: [
        "Integritate",
        "Obscuritate",
        "Stratificare",
        "Confidențialitate"
      ],
      correctAns: "Integritate",
      points: 100 / 6
    },
    {
      question: "Protejarea informației este realizată prin __________.",
      options: [
        "protejarea dispozitivelor pe care sunt stocate informațiile",
        "securizarea doar a serverelor locale",
        "angajarea unui Ofițer de Securitate Informațională",
        "reducerea factorilor de risc"
      ],
      correctAns: "protejarea dispozitivelor pe care sunt stocate informațiile",
      points: 100 / 6
    }
  ]
}
]
  },
  {
    id:2,
    title:"Securitatea personală",
    description:"Acest curs oferă o introducere practică în protejarea informațiilor personale în mediul digital, abordând principalele tipuri de atacuri informatice precum spargerea parolelor, ingineria socială, furtul de identitate și riscurile din rețelele sociale. Cursul propune soluții concrete pentru prevenirea acestor amenințări, incluzând utilizarea parolelor puternice, a managerilor de parole și a unui comportament atent online.",
    banner_image:"/banner5.png",
    achievementBadge: "Securitate personală",
    summary:`🔐 1. Parolele și autentificarea:
Când utilizatorii se conectează la un calculator sau un site web, li se cere o informație care să le confirme identitatea – de obicei o parolă.


Parolele constau în combinații secrete de litere, cifre și simboluri și sunt principalul mijloc de autentificare.


Totuși, parolele nu oferă o apărare puternică împotriva atacatorilor, deoarece se bazează pe memorie umană.


🧠 2. Slăbiciunea memoriei umane:
Oamenii pot memora un număr limitat de parole complexe.


Deseori aleg parole simple, scurte sau le reutilizează, ceea ce duce la vulnerabilitate.


Atacuri:


Dictionary attack: compară parolele furate cu digesturi de cuvinte din dicționar.


Brute-force attack: testează toate combinațiile posibile de caractere până găsește parola.


🎭 3. Ingineria socială:
Atacatorii exploatează slăbiciunile umane pentru a obține informații.


Tehnici:


Phishing: e-mailuri false care imită site-uri legitime.


Typo squatting: folosesc domenii scrise greșit (ex. gooogle.com).


Pretexting: crearea unui scenariu fals pentru a obține informații (ex: cineva pretinde că e angajat la bancă).


Hoax: mesaje false de tip alarmist (ex: „virus periculos”).


Dumpster diving: căutarea în gunoi după informații utile.


Shoulder surfing: urmărirea victimei când introduce informații personale.


🪪 4. Furtul de identitate:
Se folosește informația personală (nume, CNP, nr. card) pentru fraude financiare.


Poate afecta scorul de credit și împiedica accesul la credite sau locuri de muncă.


🌐 5. Rețelele sociale – riscuri:
Rețelele sociale facilitează conectarea, dar aduc și riscuri:


Informațiile personale pot fi folosite în scopuri malițioase.


Utilizatorii pot deveni prea încrezători în „prieteni”.


Setările de securitate pot fi neclare și greu de gestionat.

🔑 6. Securitatea parolelor:
Soluția este folosirea de password managers:


Generatoare de parole: creează parole unice și complexe.


Vaults/Seifuri online: stochează parolele criptat.


Aplicații dedicate: protejate de o parolă principală.


Dacă nu se folosesc aceste instrumente, parolele trebuie să fie lungi și unice.


📩 7. Recunoașterea phishingului:
Semnele includ:


Logouri oficiale false.


Linkuri asemănătoare cu cele legitime.


Cereri urgente de acțiune.


Cea mai bună apărare: nu deschide e-mailuri neașteptate, chiar dacă par de încredere.


💡 8. Prevenirea furtului de identitate:
Măsuri:


Tocarea documentelor financiare.


Evitarea purtării CNP-ului în portofel.


Păstrarea datelor personale într-un loc sigur.


Monitorizarea lunară a conturilor financiare este esențială.


🛡️ 9. Apărarea în rețelele sociale:
Verifică periodic setările de confidențialitate.


Gândește înainte să postezi: „Ce ar zice șeful sau mama mea?”


Arată profil limitat persoanelor necunoscute sau colaboratorilor.
`,
    chapters:[
      {
        title:"Atacuri asupra securității personale",
        subsections:[
          {
            name:"Atacuri asupra parolelor",
            content:`Inițial, atacurile informatice vizau distrugerea datelor, dar astăzi scopul principal este furtul de informații personale pentru câștig financiar. Hackerii folosesc metode precum phishingul, parolele slabe sau încrederea excesivă în rețele sociale pentru a obține date sensibile. Aceste atacuri afectează orice dispozitiv, indiferent de sistemul de operare. Capitolul explică aceste riscuri și oferă soluții de apărare pentru protejarea securității personale.
            🔐 Atacuri asupra securității personale
Există mai multe tipuri de atacuri care vizează securitatea personală a utilizatorilor. Printre cele mai frecvente se numără:
Atacuri asupra parolelor


Ingineria socială


Furtul de identitate


Atacuri în rețelele sociale


🔓 Atacuri asupra parolelor
✅ Ce sunt?
Când un utilizator se autentifică pe un dispozitiv sau un site, i se cere un nume de utilizator și o parolă pentru a-și dovedi identitatea (proces numit autentificare). Parola este o combinație secretă de litere, cifre și simboluri cunoscută doar de utilizator.
⚠️ De ce sunt vulnerabile parolele?
Deși parolele sunt cea mai utilizată metodă de autentificare, oferă adesea protecție slabă din cauza:
Dependenței de memoria umană (oamenii uită ușor parolele complexe)


Tendinței de a folosi parole ușor de reținut (ex: „princess”, „123456”)


Reutilizării aceleiași parole pe mai multe site-uri


Folosirii de informații personale (ex: nume, date de naștere)


📜 Exemple istorice
În 1961, MIT a introdus parolele în sistemele informatice. În 1962, un cercetător a reușit să acceseze parolele altor utilizatori pentru a obține mai mult timp de procesare, evidențiind lipsa măsurilor de siguranță.
⚠️ Slăbiciuni frecvente ale parolelor
Parolele eficiente trebuie să fie lungi și complexe, dar acestea sunt greu de memorat.


Utilizatorii trebuie să țină minte numeroase parole: pentru e-mail, social media, bancă, muncă etc.


Studiile arată:


28% dintre utilizatori au peste 13 parole


Utilizatorii de 16–24 ani au în medie 6,6 conturi sociale diferite


30% dintre parolele analizate aveau doar 5-6 caractere


🔁 Politici care complică situația
Multe companii cer schimbarea parolelor la 45–60 de zile


Nu se permite reutilizarea parolelor anterioare


Aceste politici forțează utilizatorii să memoreze parole noi constant


🧠 Soluții comune... dar periculoase
Pentru a face față, mulți:
Creează parole slabe (ex: „desk”, „Hannah”, „abc123”)


Refolosesc aceeași parolă peste tot


Apelează la modele previzibile: adăugarea cifrei 1, simboluri comune, sau înlocuiri ca „0” pentru „o” („pa55word”)


📉 Cele mai slabe parole
Conform unei analize pe 32 de milioane de parole, iată top 10 cele mai folosite (și ușor de spart):
Rang
Parolă
Nr. utilizatori
1
123456
290.731
2
12345
79.078
3
123456789
76.790
4
password
61.958
5
iloveyou
51.622
6
princess
35.231
7
rockyou
22.588
8
1234567
21.726
9
12345678
20.553
10
abc123
17.542



🔐 Provocări în crearea parolelor sigure
Unele site-uri limitează securitatea parolelor prin:
Restricții asupra lungimii maxime (prea scurtă pentru a fi sigură)


Interzicerea caracterelor speciale precum @, #, $


Interzicerea lipirii parolelor în câmpul de login, forțând utilizatorii să le rețină din memorie


Un expert în securitate a rezumat problema astfel:
 Majoritatea utilizatorilor nu pot și nu vor să memoreze parole complexe, așa că aleg parole slabe. Dacă li se cere o parolă sigură, o notează undeva și o schimbă înapoi la cea veche după scurt timp, folosind adesea aceeași parolă în mai multe locuri.
🧨 Tipuri de atacuri asupra parolelor
1. Ghicitul online (online guessing)
Atacatorul introduce parole la întâmplare în formularul de autentificare. Acest tip de atac este limitat de majoritatea sistemelor (de ex. blocarea contului după 5 încercări).
Chiar și cu o parolă scurtă de 8 caractere formată din litere mari, mici, cifre și simboluri, pot fi necesare peste 5 milioane de ani pentru a o ghici manual cu 2-3 încercări/secundă.
2. Crăparea offline (offline cracking)
Majoritatea atacurilor moderne folosesc această metodă. Când o parolă este creată, sistemul nu stochează parola direct, ci un rezultat criptat numit digest, obținut printr-un algoritm hash. Când utilizatorul se loghează, sistemul compară hash-ul noii parole cu cel stocat.
Atacatorii fură aceste digesturi și folosesc propriile calculatoare pentru a genera variante de parole, le transformă în hash și le compară cu cele furate. Dacă se potrivește, parola a fost descoperită.
Un grup de 5 servere poate genera până la 350 de miliarde de parole pe secundă, accelerând masiv procesul de spargere.
🧠 Tehnici de crăpare a parolelor
Atac prin forță brută
Se generează toate combinațiile posibile de caractere (litere, cifre, simboluri) și se testează împotriva digesturilor furate. Este metoda cea mai lentă, dar și cea mai completă. Poate fi optimizată astfel:
Se stabilesc limite minime și maxime de lungime


Se definesc seturi de caractere și limbi (ex: engleză, spaniolă, germană)


Se folosesc măști pentru a reduce căutarea (ex: dacă știi că parola începe cu „sk”, restul e „????”)


Se ignoră combinațiile improbabile pentru a eficientiza procesul (ex: doar cuvinte reale)


Atac prin dicționar
Se generează digesturi pentru cuvinte reale din dicționar și se compară cu cele furate. Este eficient deoarece mulți utilizatori aleg parole simple precum „alarm”, „after”, „agree”.
💥 Spargerea masivă din 2009
Un atacator a pătruns pe un server aparținând unui dezvoltator de aplicații sociale, obținând peste 32 de milioane de parole în format clar. Aceste parole au fost postate online și au devenit o resursă valoroasă pentru atacatori.
Ce au obținut hackerii:
Un set real de parole ale utilizatorilor (pentru prima dată, acces la parole din viața reală)


Informații despre comportamentul utilizatorilor – cum aleg parolele:


Mulți încep cu literă mare și termină cu cifre/punctuație, ca într-o propoziție


Multe parole conțin nume + an, ex: Braden2008


Aceste tipare sunt folosite pentru a crea măști eficiente precum ?abcd&e-2 !?!! ?1!1?2?2?2?2, care reduc semnificativ timpul de spargere
            `,
  flashcards: [
    {
      "title": "Definirea parolelor și vulnerabilitățile lor",
      "cards": [
        {
          "front": "Ce este o parolă și la ce servește?",
          "back": "O parolă este o combinație secretă de litere, cifre și simboluri cunoscută doar de utilizator, folosită pentru autentificare."
        },
        {
          "front": "De ce sunt parolele vulnerabile?",
          "back": "Din cauza dependenței de memoria umană, reutilizării parolelor, folosirii informațiilor personale și a parolelor ușor de ghicit."
        }
      ]
    },
    {
      "title": "Politici și greșeli frecvente privind parolele",
      "cards": [
        {
          "front": "Ce politici de companie îngreunează gestionarea parolelor?",
          "back": "Cer schimbarea parolelor la 45–60 de zile și interzic reutilizarea lor."
        },
        {
          "front": "Care sunt cele mai slabe parole frecvent utilizate?",
          "back": "Exemple: 123456, password, iloveyou, abc123."
        }
      ]
    },
    {
      "title": "Atacuri asupra parolelor",
      "cards": [
        {
          "front": "Ce este atacul prin ghicit online?",
          "back": "Introducerea de parole la întâmplare în formularul de login; limitat de sistemele moderne."
        },
        {
          "front": "Ce este crăparea offline?",
          "back": "Atacatorul fură digesturi hash și încearcă parole offline până găsește o potrivire."
        }
      ]
    },
    {
      "title": "Tehnici de crăpare a parolelor",
      "cards": [
        {
          "front": "Cum funcționează atacul prin forță brută?",
          "back": "Testează toate combinațiile posibile de caractere până găsește parola corectă."
        },
        {
          "front": "Cum funcționează atacul prin dicționar?",
          "back": "Compară digesturi ale cuvintelor din dicționar cu cele furate, eficient împotriva parolelor simple."
        }
      ]
    },
    {
      "title": "Caz celebru de spargere de parole",
      "cards": [
        {
          "front": "Ce s-a întâmplat în atacul masiv din 2009?",
          "back": "Au fost publicate peste 32 de milioane de parole reale, dezvăluind tipare comune folosite de utilizatori."
        },
        {
          "front": "Ce tipare de parole au fost observate în 2009?",
          "back": "Parole care încep cu literă mare, se termină cu cifre și includ nume + an (ex: Braden2008)."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Care sunt cauzele principale ale slăbiciunii parolelor?",
      "answer": "Memoria limitată a utilizatorilor, parolele simple și reutilizarea lor pe mai multe site-uri."
    },
    {
      "question": "Ce metodă de atac presupune testarea tuturor combinațiilor posibile de caractere?",
      "answer": "Atacul prin forță brută."
    },
    {
      "question": "Cum funcționează crăparea offline a parolelor?",
      "answer": "Se fură hash-urile și se testează parole până când una generează același hash."
    },
    {
      "question": "Ce caracteristici au parolele frecvent sparte?",
      "answer": "Sunt scurte, simple, bazate pe cuvinte din dicționar sau informații personale."
    },
    {
      "question": "De ce sunt unele politici de schimbare a parolelor considerate problematice?",
      "answer": "Obligă utilizatorii să memoreze constant parole noi, ceea ce duce la alegeri mai slabe și reutilizare."
    }
  ]
},
{
    name:"Atacuri prin inginerie socială",
    content:`🎭 Ingineria socială se bazează pe manipularea psihologică a utilizatorilor pentru a obține informații confidențiale sau a-i convinge să facă acțiuni riscante. Nu se bazează direct pe tehnologie, ci pe reacțiile umane.
🧪 Exemple comune
E-mail neașteptat: Un mesaj pare să vină de la un prieten și conține un link („Trebuie să vezi asta!”) sau un fișier („Ești tu în poza asta?”). Scopul este infectarea cu malware.


Cerere urgentă de ajutor: Cineva pretinde că a fost jefuit într-o țară străină și are nevoie urgentă de bani. Victima trimite bani atacatorului.


Mesaj text fals: Un mesaj spune că cardul a fost blocat și cere apăsarea unui buton, apoi introduce date bancare sensibile.


Videoclip despre dezastru: Un site convingător te roagă să descarci un clip despre un dezastru natural. Fișierul poate conține malware.


Situație
Ce ți se cere să faci
Ce se întâmplă
E-mail neașteptat
Să dai click sau să deschizi
Poți instala malware
Cerere de ajutor
Să trimiți bani
Banii ajung la atacator
Avertizare prin SMS
Să oferi datele cardului
Atacatorul le fură
Video despre dezastru
Să descarci un clip
Poți instala malware


🧠 Tehnici de manipulare folosite
Atacatorii folosesc principii psihologice pentru a câștiga încrederea victimei:
Principiu
Explicație
Exemplu
Autoritate
Pretind că sunt șefi sau persoane importante
„Sunt CEO-ul companiei.”
Intimidare
Amenință cu consecințe
„Resetează-mi parola sau chem șeful.”
Consens social
Se bazează pe comportamentul altora
„Colegul tău a făcut deja asta.”
Raritate
Creează senzația de urgență
„Nu mai am timp de pierdut.”
Urgență
Presiune de timp
„Consiliul se întrunește în 5 min.”
Familiaritate
Se dau drept persoane cunoscute
„Ți-am citit evaluarea, e excelentă.”
Încredere
Se bazează pe reputația falsă
„Știi cine sunt.”

Atacatorii pot apela și la flirt, lingușiri sau expresii precum „Sunt puțin confuz, mă ajuți?” pentru a obține cooperarea victimei.

🎣 Phishing
Phishing-ul este o formă de inginerie socială în care atacatorul trimite un e-mail fals sau creează un site ce pare legitim. Scopul este să determine victima să introducă date sensibile: parole, numere de card, CNP, etc.
Aceste mesaje par autentice: folosesc logo-ul oficial, culorile brandului și un limbaj similar cu cel real. Când victima accesează linkul, este redirecționată către un site fals unde introduce datele de logare, care sunt apoi capturate de atacator.
🐟 Variante ale phishing-ului
Spear phishing: Țintește utilizatori specifici, personalizând mesajul cu date reale (nume, companie, funcție).


Whaling: Țintește persoane importante („pești mari”) precum directori sau persoane bogate dintr-o organizație.


Vishing (voice phishing): În loc de e-mail, atacatorul sună victima și folosește un mesaj audio care pretinde că vine de la bancă. Vocea automată cere apoi introducerea codului cardului, CNP-ului etc., prin tastele telefonului.



💻 Alte tipuri de atacuri de inginerie socială
✍️ Typo Squatting (domenii scrise greșit)
Când utilizatorul greșește la tastarea adresei unui site (ex. scrie goggle.com în loc de google.com), poate fi redirecționat către un site fals care seamănă cu cel real. Acest site:
Colectează adrese de e-mail pentru spam


Afișează reclame pentru profit


Poate păcăli utilizatorul să instaleze malware


Exemplu: peste 62% dintre domeniile active scrise greșit după facebook.com sunt create intenționat pentru typo squatting.
 → Site-ul fals goggle.com a avut 825.000 vizitatori unici într-o lună, iar pierderile anuale estimate cauzate de acest tip de atac depășesc 285 milioane dolari.
Și adresele de email greșite sunt exploatate (ex. mail trimis la finances@goggle.com), expunând date confidențiale. Un experiment pe 6 luni a capturat 120.000 de emailuri private, inclusiv parole și informații financiare.

🎭 Pretexting
Pretexting înseamnă inventarea unui scenariu fals (pretext) pentru a obține încrederea victimei și a o convinge să ofere informații sensibile.
Exemplu: Atacatorul se dă drept angajat de la un institut de sondare, pune câteva întrebări banale, apoi sună la compania în care pretinde că lucrează victima și cere acces la datele ei (ex: CNP, card bancar, raport de credit).

🚨 Hoaxes (Alarme false)
Un hoax este un avertisment fals, de obicei trimis prin e-mail, care pretinde că există un virus periculos. Mesajul cere utilizatorului:
Să șteargă fișiere importante


Să schimbe setări critice


Să apeleze un număr de telefon care aparține atacatorului


Scopul este să compromită sistemul sau să obțină control asupra acestuia.

🗑️ Dumpster Diving
Atacatorul caută printre gunoaie pentru a obține informații utile, aparent neimportante. Exemple:
Obiect
De ce e valoros
Calendare
Află când angajații sunt plecați
Stick-uri USB, HDD
Pot conține informații sensibile
Memo-uri
Informații despre funcționarea internă
Organigrame
Identifică persoane cu autoritate
Agende telefonice
Nume și contacte pentru viitoare atacuri
Manuale interne
Detalii despre sistemele IT și vulnerabilități

Atacul poate viza și gospodării: se fură scrisori, carduri preaprobați, documente bancare, istoricul angajărilor etc.

👀 Shoulder Surfing (privirea peste umăr)
Un bărbat introduce codul PIN la ATM. O femeie grăbită se apropie, îl presează subtil verbal, iar el se grăbește. După ce finalizează operațiunea, pe ecran apare întrebarea „Doriți altă tranzacție?”. Bărbatul pleacă fără să apese nimic. Femeia, care i-a reținut PIN-ul, apasă „DA”, reintroduce PIN-ul și retrage bani.
Shoulder surfing înseamnă observarea codurilor, parolelor sau altor date introduse fizic de o persoană. Se poate face:
La ATM


În magazine (când introduci PIN-ul)


În cafenele, aeroporturi, etc. (când tastezi parola pe laptop)


Tehnici mai avansate implică:
Binocluri (în aeroporturi, centre comerciale)


Camere ascunse în rucsacuri sau cărți

`,
flashcards:[{
      "title": "Ce este ingineria socială?",
      "cards": [
        {
          "front": "Pe ce se bazează atacurile de tip inginerie socială?",
          "back": "Pe manipularea psihologică a utilizatorilor pentru a obține informații confidențiale sau a-i determina să comită acțiuni riscante."
        },
        {
          "front": "Este ingineria socială un atac tehnologic?",
          "back": "Nu. Se bazează pe reacțiile umane, nu pe vulnerabilități tehnice."
        }
      ]
    },
    {
      "title": "Exemple comune de atacuri sociale",
      "cards": [
        {
          "front": "Ce se întâmplă în cazul unui e-mail neașteptat care pare de la un prieten?",
          "back": "Conține linkuri sau fișiere infectate cu malware."
        },
        {
          "front": "Ce urmărește un mesaj de tip cerere urgentă de ajutor?",
          "back": "Să obțină bani de la victimă invocând o situație disperată."
        }
      ]
    },
    {
      "title": "Tehnici psihologice folosite de atacatori",
      "cards": [
        {
          "front": "Ce înseamnă principiul 'autoritate' în atacurile sociale?",
          "back": "Atacatorul pretinde că este o persoană importantă (ex: CEO) pentru a convinge victima."
        },
        {
          "front": "Cum funcționează principiul de 'raritate'?",
          "back": "Creează presiune prin urgență și timp limitat pentru a forța victima să acționeze rapid."
        }
      ]
    },
    {
      "title": "Phishing și variantele lui",
      "cards": [
        {
          "front": "Ce este phishingul?",
          "back": "Trimiterea unui email fals care imită un site legitim, pentru a colecta date sensibile."
        },
        {
          "front": "Ce este vishingul?",
          "back": "Phishing prin telefon, folosind un mesaj audio fals pentru a cere date confidențiale."
        }
      ]
    },
    {
      "title": "Alte forme de inginerie socială",
      "cards": [
        {
          "front": "Ce este typo squatting?",
          "back": "Folosirea unor site-uri cu adrese scrise greșit (ex: goggle.com) pentru a păcăli utilizatorii."
        },
        {
          "front": "Ce este shoulder surfing?",
          "back": "Urmărirea unei persoane când tastează coduri sau parole pentru a le memora."
        }
      ]
    }],
qa:[{
      "question": "Ce urmărește un atac de tip pretexting?",
      "answer": "Inventarea unui scenariu fals pentru a obține încrederea victimei și a accesa date sensibile."
    },
    {
      "question": "Cum funcționează un hoax?",
      "answer": "Trimite alerte false prin email, convingând utilizatorul să șteargă fișiere sau să sune un număr controlat de atacator."
    },
    {
      "question": "Cum se numește tehnica de obținere a datelor din gunoaie?",
      "answer": "Dumpster diving."
    },
    {
      "question": "Ce este spear phishingul?",
      "answer": "O formă de phishing care vizează utilizatori specifici, folosind informații reale despre aceștia."
    },
    {
      "question": "Care este scopul unui mesaj fals de avertizare prin SMS?",
      "answer": "Determinarea victimei să introducă date bancare sensibile pe un site fals."
    }],
},
{
  name:"Furtul de identitate",
  content:`🆔 Furtul de identitate presupune folosirea informațiilor personale ale unei persoane (nume, CNP, număr de card) pentru a comite fraude financiare. Atacatorii pot:
obține carduri de credit,


închiria locuințe,


deschide conturi bancare sau


face cumpărături în numele victimei.


Consecințele sunt grave: victima rămâne cu o istorie de credit afectată, poate pierde oportunități de angajare sau credite pentru casă/mașină/studii.
🔓 Acțiuni comune în cazul furtului de identitate:
Emiterea de cecuri sau carduri false și golirea contului bancar


Înregistrarea unui abonament de telefonie mobilă pe numele victimei


Declararea falimentului pentru a evita evacuarea


Achiziționarea de produse scumpe (ex: televizoare mari) cu datele cardului


Deschiderea de conturi bancare frauduloase în numele victimei


Deschiderea de conturi noi de credit, fără a plăti facturile


Contractarea de credite mari pentru mașini sau motociclete


🛠️ Metode prin care atacatorii obțin informații personale:
Tehnică
Explicație
Dumpster diving
Facturi, extrase bancare sau chitanțe aruncate pot fi colectate din coșuri
Phishing
Victimele sunt păcălite să-și introducă datele pe site-uri false
Formular de schimbare adresă
Redirecționează corespondența către o cutie poștală a atacatorului
Pretexting
Atacatorul pretinde că e dintr-o firmă serioasă și cere date personale
Furt fizic
Portofele sau genți furate conțin adesea informații valoroase


💰 Furtul de identitate prin declarații fiscale false
O metodă în creștere este folosirea CNP-ului unei persoane pentru a trimite o declarație fiscală falsă și a cere o returnare de bani mai mare decât cea reală. Deoarece IRS (autoritatea fiscală americană) trimite rambursările rapid, hoții primesc banii înainte ca victima să depună formularul real.
→ În 2013, IRS a plătit peste 5,8 miliarde USD în rambursări false.
 → Unele grupări au creat centre fictive de consultanță fiscală, prin care au furat date și au generat peste 3,4 milioane USD în rambursări frauduloase.
`,
  flashcards:[
    {
      "title": "Ce este furtul de identitate?",
      "cards": [
        {
          "front": "Ce presupune furtul de identitate?",
          "back": "Folosirea informațiilor personale ale unei persoane (nume, CNP, card) pentru comiterea de fraude financiare."
        },
        {
          "front": "Care sunt consecințele furtului de identitate pentru victimă?",
          "back": "Istoric de credit afectat, pierderea oportunităților de angajare sau de obținere a unui împrumut."
        }
      ]
    },
    {
      "title": "Metode de obținere a datelor personale",
      "cards": [
        {
          "front": "Ce este dumpster diving?",
          "back": "Căutarea în gunoaie după documente precum facturi sau extrase bancare pentru a obține informații sensibile."
        },
        {
          "front": "Cum funcționează formularul de schimbare a adresei?",
          "back": "Atacatorul redirecționează corespondența victimei către o cutie poștală proprie pentru a intercepta date."
        }
      ]
    },
    {
      "title": "Declarații fiscale false",
      "cards": [
        {
          "front": "Cum este comis furtul de identitate prin declarații fiscale?",
          "back": "Se folosește CNP-ul victimei pentru a depune o declarație fiscală falsă și a primi rambursări frauduloase."
        },
        {
          "front": "Cât a plătit IRS în rambursări false în 2013?",
          "back": "Peste 5,8 miliarde de dolari."
        }
      ]
    }
  ],
  qa:[  {
      "question": "Ce poate face un atacator cu datele tale personale?",
      "answer": "Poate obține carduri, credite, închiria locuințe sau face cumpărături în numele tău."
    },
    {
      "question": "Ce este pretextingul în contextul furtului de identitate?",
      "answer": "Atacatorul pretinde că este reprezentant al unei firme pentru a obține date personale."
    },
    {
      "question": "Ce tip de documente caută atacatorii prin dumpster diving?",
      "answer": "Facturi, chitanțe, extrase de cont, agende sau memorii interne."
    }],
},
{
  name:"Riscurile rețelelor sociale",
  content:`📱 Rețelele sociale grupează persoane și organizații în funcție de interesele comune și permit partajarea de informații, poze, videoclipuri și documente.
Popularitatea lor a explodat: în 2008, Facebook avea 100 milioane de utilizatori, iar în 2012 a depășit 1 miliard. Până în 2015, a ajuns la 1,49 miliarde de utilizatori activi lunar.
Deși orice site are riscuri, rețelele sociale implică unele riscuri suplimentare:
⚠️ Riscuri specifice rețelelor sociale
Informațiile personale pot fi folosite în scopuri rău intenționate
 Utilizatorii postează date precum ziua de naștere, adresa, planuri de vacanță etc. Acestea pot fi folosite pentru:


spargerea locuinței cât timp ești plecat


ghicirea parolelor slabe (ex: nume de animale de companie)


furt de identitate


Utilizatorii pot fi prea încrezători
 Atacatorii creează conturi false și interacționează amical. După câteva zile/săptămâni, victimele le oferă date personale sau dau click pe linkuri infectate cu malware.


Securitatea platformelor este adesea slabă sau confuză
 Deoarece scopul acestor site-uri este partajarea informației, setările de confidențialitate sunt deseori neclare sau ineficiente. Actualizările frecvente ale politicilor de securitate pot deruta utilizatorii.


Acceptarea oricărei cereri de prietenie poate avea consecințe neașteptate
 Un prieten acceptat la întâmplare poate vedea nu doar profilul tău, ci și informațiile prietenilor tăi. Astfel, poate exploata și alte conturi din rețea.`,
flashcards: [
    {
      "title": "Riscuri în utilizarea rețelelor sociale",
      "cards": [
        {
          "front": "Cum pot fi folosite în mod abuziv informațiile personale postate pe rețelele sociale?",
          "back": "Pentru spargerea locuinței, ghicirea parolelor slabe sau furtul de identitate."
        },
        {
          "front": "Ce pericol presupune acceptarea oricărei cereri de prietenie?",
          "back": "Un atacator poate accesa datele tale și ale prietenilor tăi, exploatând rețeaua extinsă."
        }
      ]
    },
    {
      "title": "Slăbiciuni ale platformelor sociale",
      "cards": [
        {
          "front": "De ce este securitatea rețelelor sociale considerată slabă?",
          "back": "Setările de confidențialitate sunt adesea confuze, iar politicile se schimbă frecvent fără notificare clară."
        },
        {
          "front": "Cum exploatează atacatorii încrederea utilizatorilor?",
          "back": "Creează conturi false, câștigă încrederea și obțin date sau instalează malware prin linkuri."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Ce tip de informații partajate pe rețelele sociale pot fi folosite pentru atacuri?",
      "answer": "Ziua de naștere, adresa, planuri de vacanță, nume de animale de companie."
    },
    {
      "question": "De ce trebuie să fim selectivi cu cine acceptăm ca prieten în social media?",
      "answer": "Pentru că pot accesa informații personale și ale altor prieteni, crescând riscul de atacuri."
    }
  ]
}

        ]
      },
      {
        title:"Măsuri de apărare pentru securitatea personală",
        subsections:[
          {
            name:"Apărarea parolelor",
            content:`🛡️ Măsuri de apărare pentru securitatea personală
Pentru a te proteja de atacuri precum furtul de identitate, phishing sau riscurile din rețelele sociale, este esențial să folosești:
parole puternice,


metode de identificare a atacurilor,


gestionarea inteligentă a informațiilor personale.


🔒 Apărarea prin parole
Cea mai eficientă metodă pentru a proteja conturile este folosirea tehnologiei de gestionare a parolelor. Dacă nu folosești un manager de parole, trebuie să creezi și să memorezi parole complexe. Două reguli importante:
Orice parolă care poate fi memorată ușor este slabă.


Orice parolă reutilizată pe mai multe conturi este o vulnerabilitate.


🧰 Tipuri de manageri de parole
Password generators
 Generează parole pe loc, în funcție de parola principală și adresa site-ului. Necesită extensii browser pe fiecare dispozitiv.


Online vaults
 Parolele sunt stocate online și recuperate când e nevoie. Sunt vulnerabile dacă platforma online este compromisă.


Password management applications
 Aplicații instalate local, ce stochează parole într-un fișier securizat cu o parolă principală. Cele mai sigure și recomandate.


🔐 Funcții avansate ale aplicațiilor de gestionare a parolelor
Protecție în memorie: parolele sunt criptate chiar în timpul funcționării aplicației.


Fișiere-cheie: fișiere separate (ex. pe USB) care trebuie conectate pentru a accesa baza de date.


Blocare pe contul utilizatorului: accesibil doar celui care l-a creat.


Import/export parole: pentru backup sau migrare.


Generator de parole aleatorii: creează parole complexe în funcție de reguli alese (caractere mari/mici, simboluri etc.)


Un exemplu de parolă puternică generată automat:
 WUuAôxB$2aWøBnd&Tf7MfEtm
📊 Utilizarea în practică
Deși managerii de parole sunt esențiali, puțini utilizatori îi folosesc.
 Un studiu a arătat că:
73% dintre experții în securitate folosesc manageri de parole,


Doar 24% dintre utilizatorii obișnuiți fac acest lucru,


De 4 ori mai mulți experți afirmă că este una dintre cele mai importante metode pentru a rămâne în siguranță online.


🔐 Crearea parolelor puternice
Dacă nu folosești un manager de parole, este esențial să creezi parole puternice și unice pentru fiecare cont. Câteva reguli de bază:
❌ Nu folosi cuvinte din dicționar sau cuvinte care sună ca în vorbirea curentă.


❌ Evită secvențele simple (ex: abc, 123, qwerty) sau caractere repetate (xxxx).


❌ Nu folosi date personale (zile de naștere, nume de familie, nume de animale).


✅ O parolă puternică trebuie să aibă minimum 18 caractere.


🧮 De ce contează lungimea parolei?
Cu cât o parolă este mai lungă, cu atât mai multe combinații posibile există și cu atât mai greu este de spart.
Formula:
 Număr taste tastatură ^ Lungimea parolei = Număr total de parole posibile
Exemple pentru o tastatură standard (80 taste):
Lungime parolă
Număr parole posibile
2
6.400
3
512.000
4
4.096.000
5
3,28 miliarde
8
1.677.721.600.000.000

📝 Observație: Lungimea e mai importantă decât complexitatea. Parola thisisalongerpassword e mai sigură decât uS^#16.
🧩 Simboluri speciale
Poți întări parola folosind caractere care nu apar pe tastatură, prin coduri ALT (ex: ALT + 0163 = £). Lista completă poate fi accesată cu comanda charmap.exe în Windows.
🍏 Generatorul Apple
Apple oferă un generator de parole încorporat. Când creezi o parolă nouă, poți selecta:
Memorable (ușor de ținut minte)


Letters and Numbers


Random


FIPS-181 compliant (standard de securitate guvernamental)
 Poți ajusta lungimea și calitatea parolei folosind slide-uri intuitive.
`,
flashcards:[
    {
      "title": "Reguli esențiale pentru parole sigure",
      "cards": [
        {
          "front": "Care sunt cele două reguli esențiale pentru parole sigure?",
          "back": "1. Orice parolă ușor de memorat este slabă. 2. Parolele nu trebuie reutilizate pe mai multe conturi."
        },
        {
          "front": "De ce trebuie evitate parolele ușor de reținut?",
          "back": "Pentru că sunt, de regulă, simple, scurte și ușor de ghicit de atacatori."
        }
      ]
    },
    {
      "title": "Tipuri de manageri de parole",
      "cards": [
        {
          "front": "Ce sunt password generators?",
          "back": "Programe care creează parole unice pe loc, pe baza parolei principale și a site-ului vizitat."
        },
        {
          "front": "Ce sunt password management applications?",
          "back": "Aplicații instalate local, care stochează parole într-un fișier securizat cu o parolă principală."
        }
      ]
    },
    {
      "title": "Funcții avansate ale aplicațiilor de parole",
      "cards": [
        {
          "front": "Ce înseamnă protecție în memorie?",
          "back": "Parolele sunt criptate inclusiv în timpul utilizării aplicației, pentru siguranță maximă."
        },
        {
          "front": "Ce sunt fișierele-cheie?",
          "back": "Fișiere externe (ex: pe USB) necesare pentru a debloca baza de date cu parole."
        }
      ]
    },
    {
      "title": "Reguli pentru crearea parolelor manual",
      "cards": [
        {
          "front": "Ce trebuie evitat la crearea unei parole?",
          "back": "Cuvinte din dicționar, date personale, secvențe simple sau caractere repetate."
        },
        {
          "front": "Care este lungimea minimă recomandată pentru o parolă sigură?",
          "back": "18 caractere."
        }
      ]
    },
    {
      "title": "Importanța lungimii și complexității parolei",
      "cards": [
        {
          "front": "De ce este lungimea parolei mai importantă decât complexitatea?",
          "back": "Pentru că o parolă mai lungă are un număr mult mai mare de combinații posibile și e mai greu de spart."
        },
        {
          "front": "Ce înseamnă FIPS-181?",
          "back": "Un standard de securitate guvernamental pentru generarea parolelor conforme."
        }
      ]
    }
  ],
qa:[
    {
      "question": "Ce tip de aplicație este cel mai recomandat pentru gestionarea parolelor?",
      "answer": "Password management application – instalată local și securizată cu o parolă principală."
    },
    {
      "question": "Ce procent dintre experții în securitate folosesc manageri de parole?",
      "answer": "73%."
    },
    {
      "question": "Care este formula pentru calculul numărului de parole posibile?",
      "answer": "Număr taste tastatură ^ Lungimea parolei."
    },
    {
      "question": "Ce este un exemplu de parolă mai sigură decât una complexă, dar scurtă?",
      "answer": "Parola „thisisalongerpassword” este mai sigură decât „uS^#16”."
    },
    {
      "question": "Cum pot fi folosite caractere speciale care nu apar pe tastatură?",
      "answer": "Folosind coduri ALT, de exemplu ALT + 0163 = £."
    }
  ]
          },
          {
            name:"Recunoașterea atacurilor de tip phishing",
            content:`🎣 Phishing-ul începe, de obicei, cu un email care pare să vină de la o sursă de încredere — o bancă sau un site cunoscut unde ai cont. Deși emailurile par autentice, ele pot conține următoarele semne de avertizare:

⚠️ Elemente comune în atacurile de phishing:
Logo-uri oficiale
 Atacatorii folosesc logo-uri și elemente grafice care imită site-ul real pentru a păcăli victima. Dar simpla prezență a unui logo nu garantează autenticitatea mesajului.


Linkuri suspecte
 Emailurile de phishing conțin aproape întotdeauna linkuri. Acestea par legitime, dar sunt adesea variante foarte apropiate de adresele reale (ex:
 www.ebay_secure.com, www.e--bay.com, www.e-baynet.com).


Mesaje urgente sau amenințătoare
 Majoritatea atacurilor cer un răspuns rapid (ex: „Contul tău va fi blocat!”). Scopul este de a forța utilizatorul să acționeze fără să verifice.


🔍 Sfat important:
Chiar dacă analizezi cu atenție un email, poate fi dificil să-ți dai seama dacă este phishing. Orice mesaj neașteptat, care cere o acțiune urgentă și pare să vină de la o entitate oficială, trebuie considerat suspect.
🔗 Nu da click pe linkuri din emailuri — adresa afișată (ex: www.ebay.com) poate ascunde o destinație reală periculoasă (ex: www.evil.com).
`,
flashcards:[
    {
      "title": "Cum recunoști un email de phishing",
      "cards": [
        {
          "front": "Care sunt semnele unui email de phishing?",
          "back": "Logo-uri oficiale false, linkuri care imită adrese reale și mesaje urgente sau amenințătoare."
        },
        {
          "front": "Ce trebuie să faci când primești un email suspect cu un link?",
          "back": "Nu da click — linkul afișat poate ascunde o adresă periculoasă."
        }
      ]
    },
    {
      "title": "Tactici comune în atacurile de phishing",
      "cards": [
        {
          "front": "De ce funcționează mesajele urgente în atacurile de phishing?",
          "back": "Pentru că presează utilizatorul să acționeze rapid, fără să verifice autenticitatea mesajului."
        },
        {
          "front": "Ce trebuie considerat suspect într-un email aparent oficial?",
          "back": "Orice cerere neașteptată de a introduce date sau de a accesa rapid un link."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Care este scopul principal al unui email de phishing?",
      "answer": "Să păcălească victima să acceseze un site fals și să introducă date personale."
    },
    {
      "question": "Cum arată adesea linkurile din emailurile de phishing?",
      "answer": "Sunt adrese care imită site-uri reale, dar conțin mici variații (ex: e--bay.com, ebay_secure.com)."
    }
  ]
          },
          {
            name:"🛡️ Evitarea furtului de identitate",
            content:`Furtul de identitate apare atunci când cineva folosește informațiile tale personale (ex: nume, CNP, număr de card) pentru a comite fraudă sau alte infracțiuni. Protejarea identității presupune două pași esențiali:
🔐 1. Protejează informațiile personale
Toacă documentele financiare care conțin date sensibile înainte de a le arunca.


Nu purta cardul de asigurări sociale (ex: CNP în SUA) în portofel și nu-l scrie pe cecuri.


Nu oferi date personale prin telefon sau email.


Păstrează documentele personale într-un loc sigur acasă.


💳 2. Monitorizează conturile financiare
Fii atent la activități neobișnuite – ex: facturi care nu mai vin sau carduri necerute primite prin poștă.


Verifică apelurile legate de cumpărături suspecte.


Analizează lunar facturile și extrasele de cont, imediat ce le primești.



🧾 Drepturi legale – FACTA (2003)
Legea americană Fair and Accurate Credit Transactions Act (FACTA) permite utilizatorilor să:
obțină gratuit câte un raport de credit la 12 luni de la fiecare din cele 3 agenții naționale,


conteste informațiile eronate, iar agenția are 30 de zile să investigheze și să le corecteze,


adauge o declarație oficială la raport, dacă problema nu este rezolvată.


🔁 Recomandare: solicită câte un raport de credit la fiecare 4 luni, alternativ de la cele 3 agenții. Astfel, poți monitoriza situația ta financiară tot anul, fără costuri.
`,

  flashcards: [
    {
      "title": "Cum îți protejezi identitatea",
      "cards": [
        {
          "front": "Ce pași poți urma pentru a-ți proteja datele personale?",
          "back": "Toacă documentele sensibile, nu purta CNP-ul în portofel, nu oferi date prin telefon/email și păstrează actele într-un loc sigur."
        },
        {
          "front": "Cum poți detecta un posibil furt de identitate?",
          "back": "Monitorizează facturile și extrasele bancare, fii atent la carduri primite fără a le cere sau facturi care nu mai vin."
        }
      ]
    },
    {
      "title": "Drepturi legale și recomandări",
      "cards": [
        {
          "front": "Ce drepturi oferă legea FACTA (2003)?",
          "back": "Acces gratuit anual la un raport de credit de la fiecare din cele 3 agenții, posibilitatea de a contesta erorile și de a adăuga o declarație oficială."
        },
        {
          "front": "Cum poți monitoriza gratuit situația financiară tot anul?",
          "back": "Solicitând câte un raport de credit la fiecare 4 luni, alternativ de la cele 3 agenții."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Ce trebuie să faci înainte de a arunca documente financiare?",
      "answer": "Să le toci, dacă includ informații personale sensibile."
    },
    {
      "question": "Ce permite FACTA utilizatorilor să facă în cazul unei erori în raportul de credit?",
      "answer": "Să o conteste, iar agenția are obligația să o investigheze în 30 de zile."
    }
  ]
          },
          {
            name:"🔐 Setarea măsurilor de siguranță în rețelele sociale",
            content:`Rețelele sociale sunt o sursă bogată de informații pentru atacatori: date personale, răspunsuri la întrebări de securitate (ex: „Care este numele de fată al mamei tale?”) și multe altele. Din păcate, platformele au adesea setări implicite prea permisive și își modifică frecvent politicile de securitate, adesea fără avertisment.
🛡️ Sfaturi generale de apărare
Ai grijă ce postezi
 Evită postările care pot dezvălui absența de acasă (ex: „Plecat în vacanță 2 săptămâni”) sau informații stânjenitoare. Întreabă-te:
 Ce-ar spune șeful meu? Sau mama mea? înainte de a publica.


Controlează cine poate vedea informațiile tale
 Unele informații pot fi jenante sau compromițătoare dacă ajung la angajatori sau necunoscuți.
 Este recomandat să accepți doar prieteni de încredere și să oferi altora o versiune limitată a profilului (ex: „prieteni restricționați”).


Fii la curent cu setările de securitate
 Acestea se actualizează frecvent. Verifică periodic ce opțiuni ai disponibile și ajustează-le pentru mai mult control.



📘 Recomandări pentru utilizarea sigură a Facebook (Tabelul 2-7)
Recomandare
De ce este importantă
Gândește-te cum vrei să folosești Facebook
Dacă vrei doar să păstrezi legătura cu apropiații, restricționează ce și cui postezi
Citește ghidul de confidențialitate Facebook
Îți explică funcțiile și politicile actualizate
Ajustează setările de confidențialitate
Setările implicite sunt deseori prea permisive
Verifică-ți profilul din perspectiva altora
Folosește opțiunea „Previzualizare ca...”
Alege cu atenție prietenii
Prietenii pot vedea informații private sau fotografii
Afișează un profil limitat cunoscuților
Oferă o versiune restrânsă celor cu care nu vrei să împarți tot
Restricționează Timeline-ul și etichetările
Controlează ce pot posta alții despre tine sau cine te poate eticheta
Dezactivează opțiunile, apoi activează-le selectiv
Mai bine începi cu totul închis și activezi doar ce e necesar

`,

  flashcards: [
    {
      "title": "Importanța confidențialității online",
      "cards": [
        {
          "front": "De ce este riscant să postezi planuri de vacanță sau informații stânjenitoare?",
          "back": "Poate semnala absența de acasă sau afecta reputația personală/profesională."
        },
        {
          "front": "Ce întrebare ar trebui să-ți pui înainte de a posta?",
          "back": "„Ce-ar spune șeful meu? Sau mama mea?”"
        }
      ]
    },
    {
      "title": "Controlul vizibilității profilului",
      "cards": [
        {
          "front": "Cum poți limita accesul altora la informațiile tale?",
          "back": "Acceptând doar prieteni de încredere și folosind opțiunea de „prieteni restricționați”."
        },
        {
          "front": "De ce este importantă funcția „Previzualizare ca...” pe Facebook?",
          "back": "Pentru a vedea cum arată profilul tău din perspectiva altor persoane."
        }
      ]
    },
    {
      "title": "Setări și recomandări de siguranță",
      "cards": [
        {
          "front": "Ce recomandă experții în ceea ce privește opțiunile implicite?",
          "back": "Să începi cu toate setările dezactivate și să activezi doar ce e necesar."
        },
        {
          "front": "De ce trebuie verificate frecvent setările de securitate?",
          "back": "Pentru că platformele își schimbă frecvent politicile fără avertisment."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "De ce este riscant să accepți necunoscuți ca prieteni în rețelele sociale?",
      "answer": "Pot accesa date personale și le pot folosi în scopuri malițioase."
    },
    {
      "question": "Care este o bună practică atunci când setezi confidențialitatea pe rețelele sociale?",
      "answer": "Să începi cu toate opțiunile dezactivate și să activezi doar ce este strict necesar."
    },
    {
      "question": "Ce funcție oferă Facebook pentru a verifica ce văd ceilalți despre tine?",
      "answer": "„Previzualizare ca...”"
    }
  ]
          },
        ]
      }
    ],
    quiz:
    [
      {
    "title": "Quiz 1",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Procesul de furnizare a dovezii că utilizatorul este „autentic” sau real se numește __________.",
        "options": ["identificare", "genuinizare", "autentificare", "înregistrare"],
        "correctAns": "autentificare",
        "points": 20
      },
      {
        "question": "Care dintre următoarele NU este o caracteristică a unei parole slabe?",
        "options": ["informații personale într-o parolă", "o parolă cu mai puțin de șase caractere", "o parolă care folosește atât litere cât și cifre", "un cuvânt comun din dicționar"],
        "correctAns": "o parolă care folosește atât litere cât și cifre",
        "points": 20
      },
      {
        "question": "A înșela pe cineva pentru a obține informații sigure se numește __________.",
        "options": ["inginerie socială", "atac magic", "atac de tip forță brută", "atac subtil"],
        "correctAns": "inginerie socială",
        "points": 20
      },
      {
        "question": "Scopul unui atac de tip phishing este __________.",
        "options": ["captarea tastelor apăsate", "trimiterea unui email fraudulos către un utilizator", "a păcăli un utilizator să divulge informații personale", "duplicarea unui serviciu legitim"],
        "correctAns": "a păcăli un utilizator să divulge informații personale",
        "points": 20
      },
      {
        "question": "Care dintre următoarele poate fi realizat de un hoț de identitate, cu excepția:",
        "options": ["Emiterea de cecuri sau carduri contrafăcute și retragerea tuturor banilor din cont", "Depunerea unui faliment în numele persoanei pentru a evita plata datoriilor", "Deschiderea unui cont bancar în numele persoanei și emiterea de cecuri fără acoperire", "Trimiterea de malware în sistemul contabil online al unei bănci"],
        "correctAns": "Trimiterea de malware în sistemul contabil online al unei bănci",
        "points": 20
      }
    ]
  },
  {
    "title": "Quiz 2",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Care dintre următoarele este un pas pentru prevenirea furtului de identitate, cu excepția:",
        "options": ["Păstrarea informațiilor personale într-un loc sigur", "Purtarea unui card de securitate socială în portofel în locul originalului", "Tocarea documentelor financiare care conțin informații personale", "Necomunicarea informațiilor personale la telefon sau prin email"],
        "correctAns": "Purtarea unui card de securitate socială în portofel în locul originalului",
        "points": 20
      },
      {
        "question": "Parolele se bazează pe care tip de autentificare?",
        "options": ["ceea ce ai", "ceea ce faci", "ceea ce știi", "ceea ce ești"],
        "correctAns": "ceea ce știi",
        "points": 20
      },
      {
        "question": "Un/ o __________ este un nume unic pentru identificare.",
        "options": ["parolă", "valoare", "autentificare", "nume de utilizator"],
        "correctAns": "nume de utilizator",
        "points": 20
      },
      {
        "question": "Care dintre următoarele este o caracteristică a unei parole puternice, cu excepția:",
        "options": ["Trebuie să fie lungă", "Trebuie să fie ușor de memorat", "Trebuie să fie complexă", "Nu trebuie repetată pe mai multe conturi"],
        "correctAns": "Trebuie să fie ușor de memorat",
        "points": 20
      },
      {
        "question": "Ce tehnică folosesc atacatorii în prezent pentru a descoperi o parolă?",
        "options": ["ghicire online", "spargere offline", "regenerare hash", "reproducere de digest"],
        "correctAns": "spargere offline",
        "points": 20
      }
    ]
  },
  {
    "title": "Quiz 3",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Care dintre aceste atacuri asupra parolelor este cel mai temeinic?",
        "options": ["atac de tip dicționar", "atac rapid", "atac de forță brută", "atac grill"],
        "correctAns": "atac de forță brută",
        "points": 20
      },
      {
        "question": "Observarea unei persoane care introduce un cod PIN de la distanță se numește __________.",
        "options": ["urmărire din spate (piggybacking)", "imitare (spoofing)", "privit peste umăr (shoulder surfing)", "supraveghere cibernetică"],
        "correctAns": "privit peste umăr (shoulder surfing)",
        "points": 20
      },
      {
        "question": "Ce este un atac de tip vishing?",
        "options": ["un atac care folosește telefonul în loc de email sau website", "un atac care vizează doar „peștii mari”", "un atac de inginerie socială care folosește mesaje text", "un atac asupra parolelor proiectat să spargă parole lungi"],
        "correctAns": "un atac care folosește telefonul în loc de email sau website",
        "points": 20
      },
      {
        "question": "Un utilizator care introduce americanbank.net în browser în loc de americanbank.com și este dus pe un site fals asemănător este victima __________.",
        "options": ["atacului de redirecționare SRNA", "direcționării URL", "tipografierii greșite (typo squatting)", "atacului de tip jacket"],
        "correctAns": "tipografierii greșite (typo squatting)",
        "points": 20
      },
      {
        "question": "Cum poate un atacator folosi o păcăleală (hoax)?",
        "options": ["Trimițând o păcăleală, atacatorul poate convinge un utilizator să citească emailul mai des", "O păcăleală poate convinge un utilizator că circulă un virus și că trebuie să-și schimbe setările", "Un utilizator care primește mai multe păcăleli poate suna superiorul pentru ajutor", "Păcălelile nu mai sunt folosite de atacatori astăzi"],
        "correctAns": "O păcăleală poate convinge un utilizator că circulă un virus și că trebuie să-și schimbe setările",
        "points": 20
      }
    ]
  },
  {
    "title": "Quiz 4",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Michelle pretinde că este un manager din alt oraș și îl sună pe Eric pentru a-l păcăli să îi dea parola. Ce tip de atac de inginerie socială a realizat Michelle?",
        "options": ["pretexting", "dedublare", "imitare de caracter", "duplicare"],
        "correctAns": "pretexting",
        "points": 20
      },
      {
        "question": "De ce sunt parolele lungi mai puternice decât cele scurte?",
        "options": ["Parolele lungi sunt confuze pentru atacatori", "Parolele lungi necesită mai multe încercări pentru a fi descoperite", "Parolele lungi folosesc mereu caractere speciale, cifre și litere", "Parolele scurte folosesc mai puțină memorie, deci sunt mai ușor de spart"],
        "correctAns": "Parolele lungi necesită mai multe încercări pentru a fi descoperite",
        "points": 20
      },
      {
        "question": "Care dintre următoarele NU este un manager de parole?",
        "options": ["aplicație de gestionare parole", "generator de parole", "seif online", "depozit de hashing"],
        "correctAns": "depozit de hashing",
        "points": 20
      },
      {
        "question": "Care dintre următoarele se găsește de obicei într-un email de tip phishing, cu excepția:",
        "options": ["logo-uri oficiale ale site-ului real", "linkuri web care sunt variații apropiate ale unei adrese legitime", "o cerere urgentă de acțiune imediată", "numărul de telefon al site-ului real"],
        "correctAns": "numărul de telefon al site-ului real",
        "points": 20
      },
      {
        "question": "Care dintre următoarele NU ar putea fi realizată într-un atac de tip shoulder surfing?",
        "options": ["Urmărirea victimei când introduce cardul într-un bancomat", "Observarea unei persoane care tastează o parolă pe tastatură", "Vederea unei persoane care își scrie numărul de securitate socială pe hârtie", "Urmărirea unei persoane care introduce PIN-ul la casă într-un magazin"],
        "correctAns": "Vederea unei persoane care își scrie numărul de securitate socială pe hârtie",
        "points": 20
      }
    ]
  }
    ]




  },
  {
    id:3,
    title:"Securitatea informatică",
    description:"Acest curs oferă o introducere practică în securitatea informatică.",
    banner_image:"/cap3.png",
    achievementBadge: "Securitate informatică",
    summary:` rezumat curs 3 `,
    chapters:[{
      title:"Atacuri cu ajutorul Malware-ului",
      subsections:[
      {
        name:"Introducere",
        content:`**Protejarea dispozitivelor**

Protejarea unui dispozitiv personal – fie că e desktop, laptop sau tabletă – este o provocare chiar și pentru utilizatorii avansați. Asta pentru că atacurile informatice sunt **frecvente** și în continuă evoluție.
De exemplu, un furnizor important de securitate cibernetică a raportat că la fiecare **3** **minute** are loc un atac cibernetic asupra unei companii.
Nu există o singură aplicație sau setare care să protejeze complet un dispozitiv. La fel cum o **casă** trebuie protejată împotriva mai multor pericole (furt, incendiu, inundații etc.), un **calculator** are nevoie de protecție împotriva mai multor tipuri de atacuri informatice.
`,
        flashcards:[{
  "title": "Provocările protejării dispozitivelor personale",
  "cards": [
    {
      "front": "De ce este dificil să protejezi un dispozitiv personal împotriva atacurilor informatice?",
      "back": "Pentru că atacurile sunt frecvente, în continuă evoluție și nu există o aplicație sau setare unică care să ofere protecție completă."
    }
  ]
}
],
        qa:[{
  "question": "Ce analogie este folosită pentru a explica necesitatea protecției multilaterale a unui dispozitiv?",
  "answer": "Protejarea unui calculator este comparată cu protejarea unei case împotriva furtului, incendiului și inundațiilor – fiind necesare măsuri multiple."
}
]
      },
      {
        name:"Malware",
        content:`**Definiție Malware** 

Un software rău intenționat, un program care pătrunde într-un sistem fără acordul utilizatorului și are efecte dăunătoare. De obicei, el conține un „payload” – o funcție **malițioasă** care se activează când malware-ul este rulat.

**Tipuri de Malware**

Malware-ul poate fi clasificat în funcție de 4 caracteristici:
• **Circulație** (cum se răspândește)
• **Infectare** (cum pătrunde în sistem)
• **Camuflare** (cum evită detectarea)
• **Capabilități** de atac

**Mod de funcționare**

Pentru a evita detectarea, un malware se poate **„metamorfoza”**, adică își **schimbă** **codul** pentru a nu fi recunoscut de programele antivirus.

Unele tipuri de malware se răspândesc rapid între utilizatori prin:
• **Rețele** partajate
• **Stick-uri** USB
• **Atașamente** de email

După ce ajunge într-un sistem, malware-ul trebuie să îl infecteze, adică să se integreze în sistem. Trei tipuri principale de malware au aceste caracteristici:
• **Viruși**
• **Viermi**
• **Troiani**
`,
        flashcards:[
          {
    "title": "Flashcard 1",
    "cards": [
      {
        "front": "Care sunt cele patru caracteristici de clasificare ale unui malware?",
        "back": "Circulație (cum se răspândește), Infectare (cum pătrunde în sistem), Camuflare (cum evită detectarea), Capabilități de atac."
      }
    ]
  },
  {
    "title": "Flashcard 2",
    "cards": [
      {
        "front": "Cum poate evita detectarea un malware?",
        "back": "Se poate metamorfoza, adică își schimbă codul pentru a nu fi recunoscut de programele antivirus."
      }
    ]
  }
        ],
        qa:[
          
  {
    "question": "Prin ce metode se poate răspândi rapid un malware?",
    "answer": "Prin rețele partajate, stick-uri USB și atașamente de email."
  },
  {
    "question": "Care sunt cele trei tipuri principale de malware care infectează sistemele?",
    "answer": "Viruși, viermi și troiani."
  }


        ]
      },
      {
        name:"Viruși",
        content:`**Ce este un virus informatic?**

Un virus informatic este similar cu un virus biologic: se reproduce singur și are ca scop principal crearea de copii proprii. De exemplu, un virus poate crea milioane de copii într-un timp foarte scurt, fără intervenție umană.

**Important: Virus ≠ Malware**
 Un virus este doar un tip de malware, deși termenii sunt adesea confundați în mass-media.

**Cum infectează virușii fișierele**

Virușii pot infecta multe tipuri de fișiere. 
De exemplu:
• Un virus care infectează fișiere **executabile** se numește **program** virus.
• Un virus care infectează documente cu **macrocomenzi** (ex. Word, Excel) se numește **macro** virus.

**Macrocomenzile** sunt secvențe automate de comenzi. Când documentul este deschis, instrucțiunile macro sunt executate automat.

**Poveste reală: Primul virus pe un PC personal**

În 1982, Rick Skrenta, un elev de clasa a noua din Pittsburgh, a creat virusul **Elk** **Cloner**, care se activa pe fiecare al **50-lea** **start** de dischetă și afișa un poem pe ecran. Acesta este unul dintre primele exemple de virus pentru un computer personal.

**Tip de infectare: „Appender infection”**

Acesta este un mod de infectare des întâlnit:
1. Virusul se atașează la **sfârșitul** unui fișier.
2. Inserează la **începutul** fișierului o instrucțiune **„jump”** care redirecționează execuția către codul virusului.
3. Când fișierul este **lansat**, codul virusului se execută.

**Tehnici avansate ale virușilor**

Virușii moderni sunt tot mai greu de **detectat**. Unii folosesc o tehnică numită infecție **fragmentată** (split infection): codul periculos este împărțit în mai multe părți și inserat **aleatoriu** în programul gazdă. 
Aceste bucăți de cod pot conține și **„informație** **goală”** pentru a ascunde intenția reală.
Unii viruși sunt capabili să detecteze dacă sunt analizați de specialiști în securitate. 

Dacă găsesc fișiere tipice de analiză, pot:
• Să se autodistrugă
• Bloca complet sistemul

**Ce face un virus când este activat**

Când fișierul infectat este deschis:
1. Virusul execută o acțiune malițioasă (numită payload)
2. Se reproduce în alte fișiere de pe același computer

**Acțiuni frecvente ale virușilor:**
• Blochează/repornește computerul repetat
• Șterge fișiere
• Dezactivează setările de securitate
• Formatează hard disk-ul

**Notă:** Uneori, virusul poate rămâne **inactiv** (dormant) un timp înainte de a acționa.

**Cum se răspândesc virușii**

Un virus nu se răspândește automat pe alte calculatoare. Are nevoie de:
• un fișier infectat (ex: atașament email, USB)
• o persoană care să mute acel fișier pe alt dispozitiv

**Asemănări cu virușii biologici**

Atât virușii biologici cât și cei informatici:
• Intră în „gazdă” pasiv
• Se pot reproduce doar în gazda corectă
• Pot rămâne inactivi o perioadă
• Se multiplică pe seama gazdei

`,
        flashcards:[{
    "title": "Flashcard 1",
    "cards": [
      {
        "front": "Ce este un virus informatic?",
        "back": "Un virus informatic este un tip de malware care se reproduce singur și creează copii ale sale, infectând fișiere fără intervenție umană."
      }
    ]
  },
  {
    "title": "Flashcard 2",
    "cards": [
      {
        "front": "Ce este o infecție de tip 'appender'?",
        "back": "Este o tehnică în care virusul se atașează la sfârșitul unui fișier și adaugă la început o instrucțiune care execută codul său malițios."
      }
    ]
  },
  {
    "title": "Flashcard 3",
    "cards": [
      {
        "front": "Cum se răspândesc virușii informatici?",
        "back": "Prin fișiere infectate mutate manual pe alte dispozitive, de exemplu prin emailuri sau stick-uri USB. Nu se răspândesc automat."
      }
    ]
  }],
        qa:[ {
    "question": "Care este diferența dintre un virus și malware?",
    "answer": "Virusul este doar un tip de malware, nu sinonim cu întregul concept de malware."
  },
  {
    "question": "Ce face un virus atunci când este activat?",
    "answer": "Execută un payload (acțiune malițioasă), se reproduce și poate bloca sistemul, șterge fișiere sau dezactiva securitatea."
  },
  {
    "question": "Cum evită unii viruși detectarea?",
    "answer": "Prin infecție fragmentată (split infection), inserând bucăți de cod în programul gazdă și adăugând cod 'gunoi'."
  }]
      },
      {
        name:"Vierme. Troian",
        content:`**Viermii (Worms)**

Un **vierme** este un tip de **malware** care se răspândește prin rețea, fără ajutorul utilizatorului. 
Exploatează vulnerabilități în aplicații sau sisteme și se propagă **automat** la alte dispozitive.

**Exemplu:** Un vierme celebru din 1988 a exploatat o **setare** **greșită** care permitea rularea comenzilor trimise prin email și a încercat să **fure** **parole**.

**Viermii moderni:**

• Lasă în urmă cod dăunător (payload)
• Pot șterge fișiere
• Pot permite controlul de la distanță asupra calculatorului

** Diferență:**

Viermii se răspândesc **automat** între calculatoare, pe când virușii se răspândesc doar pe calculatorul **gazdă**, prin acțiunea utilizatorului.

**Troienii (Trojans)**

Un Troian este un program care pare **inofensiv** (ex: aplicație de calendar), dar care, odată instalat, face ceva **dăunător**:
• Instalează **malware** ascuns
• Fură **parole** sau date
• Trimite datele **atacatorului** prin rețea

**Diferență esențială:**

• Virusul intră fără știrea utilizatorului
• Troianul este instalat cu acordul utilizatorului, dar ascunde intenția reală

`,
        flashcards:[{
    "title": "Flashcard 1",
    "cards": [
      {
        "front": "Cum se răspândesc viermii (worms)?",
        "back": "Viermii se răspândesc automat prin rețea, exploatând vulnerabilități, fără ajutorul utilizatorului."
      }
    ]
  },
  {
    "title": "Flashcard 2",
    "cards": [
      {
        "front": "Care este diferența dintre un virus și un troian?",
        "back": "Virusul pătrunde în sistem fără acordul utilizatorului, în timp ce troianul este instalat voluntar, dar are intenții ascunse."
      }
    ]
  }],
        qa:[{
    "question": "Ce pot face viermii moderni după ce infectează un sistem?",
    "answer": "Pot lăsa cod dăunător (payload), șterge fișiere sau permite controlul de la distanță."
  },
  {
    "question": "Ce definește un troian (Trojan)?",
    "answer": "Este un program aparent legitim care, odată instalat, execută acțiuni dăunătoare precum furtul de date sau instalarea de malware."
  }]
      },
      {
        name:"Tabel comparativ",
        content:`**Virus vs. Vierme vs. Troian**

Tabelul de mai jos prezintă diferențele dintre cele 3 tipuri de viruși: 

`,
        flashcards:[{
  "title": "Compararea virusului, viermelui și troianului",
  "cards": [
    {
      "front": "Cum se deosebesc virusul, viermele și troianul în funcție de modul de răspândire?",
      "back": "Virusul se răspândește prin fișiere mutate de utilizatori, viermele se propagă automat prin rețea, iar troianul se transferă tot de către utilizator, dar sub forma unui program aparent legitim."
    }
  ]
}],
        qa:[{
  "question": "Care dintre următoarele tipuri de malware NU necesită acțiune din partea utilizatorului pentru a se răspândi?",
  "answer": "Viermele"
}
]
      },
      {
        name:"Camuflare",
        content:`**(Concealment)**

Unele tipuri de malware sunt create special pentru a **evita** **detectarea**.
Un exemplu este **rootkit-ul** – un set de instrumente software care ascunde prezența altui malware (virus, troian, vierme etc.).

**Rootkit-ul - descriere:**
• Modifică sistemul de operare astfel încât acesta să ignore fișierele sau activitatea malițioasă
• Șterge sau ascunde dovezi (ex: fișiere jurnal/loguri)

Un rootkit poate **înlocui** fișiere de sistem cu versiuni modificate care:
• Ignoră fișierele periculoase
• Oferă o listă „curată” către programele antivirus

**Consecință:**
Utilizatorul nu mai poate avea încredere în propriul sistem – rootkit-ul controlează ce e vizibil și ce nu.

**Singura soluție sigură:**

**Formatarea** hard disk-ului și **reinstalarea** sistemului de operare.
`,
        flashcards:[{
  "title": "Ce este un rootkit?",
  "cards": [
    {
      "front": "Cum funcționează un rootkit și de ce este periculos?",
      "back": "Un rootkit modifică sistemul de operare pentru a ascunde fișiere și activități malițioase, oferind astfel o imagine falsă utilizatorului și antivirusului. Singura soluție sigură este formatarea și reinstalarea sistemului."
    }
  ]
}
],
        qa:[{
  "question": "Care este principala consecință a unui rootkit instalat pe un sistem?",
  "answer": "Utilizatorul nu mai poate avea încredere în ceea ce vede, deoarece rootkit-ul controlează ce fișiere și activități sunt vizibile."
}
]
      },
      {
        name:"Capacitățile „Payload”-ului",
        content:`**Ce este Payload-ul?** 
  
Este partea din malware care execută acțiuni **dăunătoare**.
**Exemple** de acțiuni:
• Execută comenzi de la distanță
• Fură parole și informații personale
• Șterge programe sau date
• Dezactivează protecția sistemului
• Lansează atacuri asupra altor calculatoare

**Executarea de comenzi (Execute Commands)**

Când malware-ul permite unui atacator să ruleze comenzi pe computerul victimei, se numește executare de cod arbitrar.
**Exemplu:** Atacatorul profită de o vulnerabilitate și folosește un cod mic numit shellcode, care deschide o interfață de **comandă** (shell) de unde se pot trimite instrucțiuni.
Dacă aceste comenzi sunt lansate de la distanță prin internet, vorbim de executare de cod de la **distanță** (remote code execution).
`,
        flashcards:[{
  "title": "Payload și executarea comenzilor",
  "cards": [
    {
      "front": "Ce este un payload și cum poate fi folosit de un atacator?",
      "back": "Payload-ul este partea din malware care execută acțiuni dăunătoare, precum ștergerea de date, furtul de informații sau lansarea de comenzi de la distanță prin internet (executare de cod arbitrar sau remote code execution)."
    }
  ]
}
],
        qa:[{
  "question": "Ce înseamnă executare de cod de la distanță (remote code execution)?",
  "answer": "Este o formă de atac în care malware-ul permite unui atacator să ruleze comenzi pe computerul victimei prin internet, folosind o vulnerabilitate."
}
]
      },
      {
        name:"Colectarea datelor. Spyware",
        content:`**Unele tipuri de malware**

Sunt create pentru a colecta date importante și a le trimite atacatorului. 
**Exemple:**
• Spyware
• Adware
• Ransomware

**Spyware (Programe de spionaj)**

Spyware-ul este software care spionează utilizatorul fără acordul său. 
Acesta:
• Se instalează fără ca utilizatorul să știe
• Se folosește de resursele computerului
• Poate distribui informații personale sau sensibile

**Notă:**
Nu tot spyware-ul este rău intenționat. Unele programe pot fi folosite, de exemplu, de părinți pentru a supraveghea activitatea online a copiilor.

**Keylogger (Capturare tastatură)**

Un **keylogger** este un tip de spyware care înregistrează fiecare tastă apăsată pe tastatură, în mod invizibil pentru utilizator.
Poate fi:
• **Hardware** – un dispozitiv fizic conectat între tastatură și calculator (poate fi ascuns și preia tot ce tastezi).
• **Software** – un program care rulează pe calculator, se ascunde ca un rootkit și trimite datele atacatorului.

**Poate colecta:**

• Parole
• Numere de card
• Informații personale

**Keylogger-ele moderne:**

• Pot transmite datele fără a fi extrase fizic
• Pot fi complet invizibile (ex: integrate în tastatură)
• Unele pot activa camera sau face capturi de ecran

**Sfat:**
Pe computerele publice, folosește tastatura virtuală (cu mouse-ul) pentru a evita capturarea tastelor.

**Tipuri de tehnologii folosite de spyware**

Tabelul surprinde diferențele dintre tehnologiile folosite de spyware:

`,
        flashcards:[{
    "title": "Spyware - Funcționare generală",
    "cards": [
      {
        "front": "Ce este spyware-ul și cum acționează?",
        "back": "Spyware-ul este un software care se instalează fără acordul utilizatorului, folosește resursele sistemului și poate trimite date personale atacatorilor."
      }
    ]
  },
  {
    "title": "Tipuri de tehnologii spyware",
    "cards": [
      {
        "front": "Care sunt câteva tehnologii folosite de spyware?",
        "back": "Software de descărcare automată, tehnologii de urmărire pasivă, software care modifică sistemul și software de urmărire a comportamentului."
      }
    ]
  },
  {
    "title": "Keylogger – Definiție și tipuri",
    "cards": [
      {
        "front": "Ce este un keylogger și ce forme poate avea?",
        "back": "Un keylogger este un tip de spyware care înregistrează tastele apăsate. Poate fi hardware (dispozitiv fizic) sau software (program ascuns)."
      }
    ]
  }],
        qa:[{
    "question": "Ce tip de spyware înregistrează tastele apăsate de utilizator?",
    "answer": "Keylogger"
  },
  {
    "question": "Ce tehnologie spyware poate modifica setările sistemului fără permisiune?",
    "answer": "Software care modifică sistemul"
  },
  {
    "question": "Ce măsură de siguranță poți lua pe un computer public pentru a evita un keylogger software?",
    "answer": "Folosirea tastaturii virtuale (cu mouse-ul)"
  }]
      },
      {
        name:"Adware",
        content:`**Adware-ul este un program care:**

• Colectează date despre utilizator
• Afișează reclame nedorite sau pop-up-uri

Funcționează prin:
• Monitorizarea activității online
• Trimiterea acestor date către terți care personalizează reclamele

**Probleme cauzate de adware:**

• Reclame deranjante (ex: conținut ofensator)
• Încetinirea calculatorului
• Interferă cu productivitatea
• Poate cauza crash-uri sau pierderi de date

**Adware-ul** poate detecta dacă ești pe cale să cumperi ceva și poate trimite această informație firmelor care îți vor trimite reclame prin poștă sau telefon.

`,
        flashcards:[
  {
    "title": "Adware – Definiție și efecte",
    "cards": [
      {
        "front": "Ce este adware-ul și ce efecte poate avea asupra utilizatorului?",
        "back": "Adware-ul este un program care colectează date despre utilizator și afișează reclame nedorite. Poate încetini calculatorul, interfera cu productivitatea și cauza pierderi de date."
      }
    ]
  }

],
        qa:[{
    "question": "Care este scopul principal al unui program adware?",
    "answer": "Să colecteze date despre utilizator și să afișeze reclame personalizate"
  }]
      },
      {
        name:"Ransomware",
        content:`**Ce este?**

Ransomware-ul blochează accesul la calculatorul tău până când plătești o **„răscumpărare”** (de obicei între 300–500$).

Cum funcționează:
1. Afișează un mesaj fals care pretinde că vine de la o autoritate.
2. Te acuză că ai făcut ceva ilegal și cere plată imediată.
3. Nu îți permite să folosești calculatorul până nu plătești.

**Variante:**
• Poate părea un mesaj legitim de la Windows
• Poate cere plata pentru **„repararea”** unei probleme inventate
• Poate fura **datele** cardului atunci când plătești

**Ransomware-ul:**
• Se integrează adânc în sistem
• Nu poate fi **închis** sau oprit prin restart
• E deseori parte dintr-un **„pachet”** cu alte tipuri de malware

`,
        flashcards:[{
    "title": "Ransomware – Cum funcționează",
    "cards": [
      {
        "front": "Ce este ransomware-ul și cum acționează?",
        "back": "Ransomware-ul blochează accesul la calculator și cere o răscumpărare. Afișează un mesaj fals de la o autoritate și nu poate fi oprit ușor. Poate fura datele cardului și face parte dintr-un pachet de malware."
      }
    ]
  }],
        qa:[{
    "question": "Care este scopul principal al unui ransomware?",
    "answer": "Să blocheze accesul la sistem și să forțeze plata unei sume de bani pentru deblocare."
  }]
      },
      {
        name:"Ștergere de date",
        content:`**Unele tipuri de malware**

Au ca scop ștergerea fișierelor importante (documente, poze, fișiere de sistem).

**Logic Bomb**

O **logic** **bomb** (bombă logică) este un cod malițios ascuns într-un program aparent legitim care se activează la un anumit eveniment:
• O dată sau oră exactă
• O acțiune specifică (ex: deschiderea unui fișier)

**Exemple reale:**

• Un fost angajat a inserat o bombă logică pentru a distruge 4000 de servere după ce a fost concediat.
• Altul a introdus cod malițios pentru a șterge date și a forța compania să îl reangajeze pe bani mai mulți.

**De ce sunt greu de detectat?**

• Sunt ascunse în programe foarte mari
• Pot fi doar câteva linii de cod
• Nu sunt detectate de antivirus în mod obișnuit

**Atenție:** Logic bomb ≠ Easter egg
Un Easter egg este o funcție **ascunsă**, dar inofensivă (ex: jocuri sau animații secrete în aplicații).

`,
        flashcards:[{
    "title": "Logic Bomb – Definiție și pericol",
    "cards": [
      {
        "front": "Ce este o bombă logică (logic bomb) și de ce este periculoasă?",
        "back": "Este un cod malițios ascuns într-un program legitim, care se activează la un eveniment specific. Este greu de detectat și poate provoca ștergeri masive de date."
      }
    ]
  }],
        qa:[{
    "question": "Care este diferența dintre o logic bomb și un easter egg?",
    "answer": "Logic bomb este malițioasă și periculoasă, în timp ce un easter egg este o funcție ascunsă, dar inofensivă."
  }]
      },
      {
        name:"Modificarea setărilor de securitate",
        content:`**Unele tipuri de malware**

Modifică setările de securitate ale sistemului pentru a permite atacuri viitoare. Un exemplu este **backdoor-ul** (ușă din spate):
• Permite accesul atacatorului chiar și după ce malware-ul aparent a fost eliminat
• Ocolește parolele sau măsurile de protecție

Dezvoltatorii legitimi pot folosi **temporar** backdoor-uri pentru testare, dar dacă nu sunt eliminate la timp, pot fi exploatate de hackeri.

`,
        flashcards:[ {
    "title": "Backdoor – Ușă din spate în sistem",
    "cards": [
      {
        "front": "Ce este un backdoor și de ce este periculos?",
        "back": "Un backdoor este o metodă care permite accesul în sistem ocolind parolele sau protecțiile. Poate fi folosit de atacatori chiar și după eliminarea aparentă a malware-ului."
      }
    ]
  }],
        qa:[ {
    "question": "De ce poate fi riscantă prezența unui backdoor chiar și după instalarea legitimă?",
    "answer": "Pentru că dacă nu este eliminat la timp, poate fi exploatat de hackeri pentru a pătrunde în sistem."
  }]
      },
      {
        name:"Lansarea atacurilor",
        content:`**Botneturi și Zombi**
        
Un malware poate transforma computerul infectat într-un **zombie** – un dispozitiv controlat de la distanță fără știrea utilizatorului.
Când mii de astfel de calculatoare zombie sunt conectate într-o rețea, formează un **botnet** controlat de un atacator numit **bot** **herder**.

Atacatorul trimite comenzi printr-un sistem numit Command & Control (C&C) – adesea prin:
• HTTP (protocol standard, greu de detectat)
• Bloguri, postări pe rețele sociale sau emailuri „draft” care nu sunt trimise (tehnică dead drop)

Utilizatorul nu își dă seama că dispozitivul său este folosit în scopuri **malițioase**, deoarece computerul funcționează **normal**.

Unele botneturi pot avea peste 50 de milioane de zombie și pot trimite peste 60% din spam-ul global.

**Pe scurt:**

• Backdoor-ul deschide ușa atacatorilor
• Zombii sunt computere controlate de la distanță
• Botneturile sunt rețele de zombi folosite în atacuri masive
• Atacurile pot dura ani, fără ca utilizatorul să observe

**Atacuri realizate cu ajutorul botnet-urilor**

Tabelul prezintă diferențele între tipuri de atacuri.
`,
        flashcards:[{
    "title": "Botnet și calculatoare zombie",
    "cards": [
      {
        "front": "Ce este un zombie în contextul malware?",
        "back": "Un zombie este un calculator infectat care este controlat de la distanță de un atacator, fără ca utilizatorul să știe."
      }
    ]
  },
  {
    "title": "Comunicarea și utilizarea botneturilor",
    "cards": [
      {
        "front": "Cum comunică atacatorul cu rețeaua de zombie (botnet)?",
        "back": "Prin sisteme Command & Control (C&C), adesea mascate în protocoale standard (HTTP) sau postări ascunse pe bloguri și rețele sociale."
      }
    ]
  }],
        qa:[ {
    "question": "Care este rolul unui bot herder într-un botnet?",
    "answer": "Bot herder-ul este atacatorul care controlează rețeaua de calculatoare zombie prin comenzi centralizate."
  },
  {
    "question": "Cum pot botneturile manipula sondajele online?",
    "answer": "Folosind calculatoare zombie cu IP-uri unice pentru a trimite voturi false și a altera rezultatele sondajului."
  }]
      },
    ]
    },
    {
      title:"Apărări pentru calculator (Computer Defenses)",
      subsections:[
        {
        name:"Introducere",
        content:`**Din cauza numărului mare**

Și diversității atacurilor cibernetice, este esențial ca orice calculator să aibă mecanisme de protecție bine configurate.
Acestea includ:
• Gestionarea **actualizărilor** (patch-urilor)
• **Firewall-uri** personale
• Software **antimalware**
• **Monitorizarea** controlului contului de utilizator
• Crearea de **backup-uri**
• Planuri de **recuperare** în caz de atac
`,
        flashcards:[{
    "title": "Măsuri de protecție esențiale",
    "cards": [
      {
        "front": "Care sunt principalele mecanisme de protecție împotriva atacurilor cibernetice?",
        "back": "Actualizări regulate, firewall personal, software antimalware, monitorizarea conturilor, backup-uri și planuri de recuperare."
      }
    ]
  }],
        qa:[{
    "question": "De ce este importantă gestionarea patch-urilor într-un sistem de protecție?",
    "answer": "Pentru a corecta vulnerabilitățile cunoscute și a preveni exploatarea lor de către atacatori."
  }]
      },
      {
        name:"Gestionarea actualizărilor",
        content:`**Pe măsură ce**

Sistemele de operare au devenit mai complexe, au apărut și vulnerabilități neintenționate. 
Atacatorii pot profita de acestea dacă nu sunt remediate la timp.

**Tipuri de actualizări:**

• **Security** **Patch** – actualizare care repară o vulnerabilitate
• **Feature** **Update** – adaugă funcționalități noi, dar nu repară probleme de securitate
• **Service** **Pack** – pachet care conține toate patch-urile și actualizările

**Microsoft clasifică patch-urile în funcție de:**

• **Gravitatea** vulnerabilității (Critică, Importantă, Moderată, Redusă)
• **Probabilitatea** unui atac (de la 1 – „Atac foarte probabil” la 3 – „Puțin probabil”)

**Actualizările în Windows 10**

Microsoft a schimbat modul în care utilizatorii primesc actualizările:

**Reguli noi:**

• Actualizări **forțate** – nu pot fi refuzate
• Fără selecție **individuală** – nu poți alege ce actualizări să instalezi
• Actualizări **continue** – de obicei în a doua zi de marți a fiecărei luni („Patch Tuesday”)

**Alte opțiuni utile:**

• Alegerea momentului de restart – poți seta dacă și când să repornească PC-ul
• Distribuție eficientă – un dispozitiv poate distribui actualizările altora din aceeași rețea
• Resetare cu versiune actualizată – funcția „PC Reset” reinstalează automat Windows cu cele mai recente patch-uri

De exemplu, dacă un calculator trebuie resetat, nu mai este nevoie să instalezi toate patch-urile manual – se **reinstalează** o versiune deja actualizată.

**Automatizare completă**

Microsoft urmează modelul altor companii (precum Google Chrome), care instalează automat actualizările fără intervenția utilizatorului, fără notificări și fără opțiuni de dezactivare.

`,
        flashcards:[{
    "title": "Tipuri de actualizări și patch-uri",
    "cards": [
      {
        "front": "Care sunt principalele tipuri de actualizări ale sistemului?",
        "back": "Security Patch (repară vulnerabilități), Feature Update (adaugă funcții), Service Pack (include toate actualizările)."
      }
    ]
  },
  {
    "title": "Clasificarea patch-urilor Microsoft",
    "cards": [
      {
        "front": "Cum clasifică Microsoft patch-urile de securitate?",
        "back": "După gravitate (Critică, Importantă, Moderată, Redusă) și probabilitatea unui atac (1 – foarte probabil, 3 – puțin probabil)."
      }
    ]
  },
  {
    "title": "Actualizări automate în Windows 10",
    "cards": [
      {
        "front": "Ce caracteristici are sistemul de actualizări din Windows 10?",
        "back": "Actualizări forțate, fără selecție individuală, programate regulat (Patch Tuesday), cu distribuție în rețea și reinstalare automată cu patch-uri."
      }
    ]
  }],
        qa:[{
    "question": "Ce este un Security Patch?",
    "answer": "O actualizare care repară o vulnerabilitate de securitate."
  },
  {
    "question": "Care este scopul funcției „PC Reset” din Windows 10?",
    "answer": "Reinstalează automat sistemul cu cele mai recente patch-uri aplicate."
  },
  {
    "question": "Ce zi este denumită în mod tradițional „Patch Tuesday” de către Microsoft?",
    "answer": "A doua zi de marți a fiecărei luni."
  }]
      },
      {
        name:"Firewall-uri",
        content:`**Ce sunt și cum ne protejează?**
        
Un **firewall** este un „zid digital” care limitează răspândirea programelor periculoase, la fel cum un zid de protecție oprește focul într-o clădire.

**Tipuri de firewall-uri**

**1. Personal Firewall (bazat pe software)**

• Rulează ca un program pe calculatorul local
• Blochează traficul care intră sau iese din acel computer
• Este inclus în majoritatea sistemelor de operare moderne (ex: Windows)

Se mai numește și **host-based** application firewall. 
Funcționează pe baza aplicațiilor:
• Când o aplicație are nevoie de acces la internet, utilizatorul poate permite (unblock) acea conexiune.
• Este mai sigur decât o deschidere permanentă, care ar rămâne vulnerabilă mereu.

Control detaliat – doar aplicațiile aprobate pot comunica.

**2. Network Firewall (bazat pe hardware)**

• Este un dispozitiv separat, poziționat la „marginea rețelei”
• Protejează toate dispozitivele conectate la rețea
• Analizează traficul care vine și pleacă din rețea, acceptând sau blocând datele pe baza unor reguli

Este **frecvent** găsit în routere de acasă, imprimante sau alte echipamente de rețea.

**Recomandare**
Ideal este să folosești ambele tipuri:
• Personal firewall → controlează ce face fiecare aplicație
• Network firewall → protejează întreaga rețea de acces extern

**Verificări recomandate**

Verifică **periodic:**
• Dacă firewall-urile sunt activate (unele malware-uri încearcă să le dezactiveze)
• Dacă există puncte de acces nesigure
• Dacă firewall-ul funcționează corect (prin teste externe)

**Comparație: Personal vs. Network Firewall**

Tabelul de mai jos prezintă diferențele dintre firewall-ul personal și cel de rețea. 

`,
        flashcards:[{
    "title": "Tipuri de firewall-uri",
    "cards": [
      {
        "front": "Care este diferența principală dintre un Personal Firewall și un Network Firewall?",
        "back": "Personal Firewall protejează un singur calculator (software), în timp ce Network Firewall protejează întreaga rețea (hardware)."
      }
    ]
  },
  {
    "title": "Recomandări privind utilizarea firewall-urilor",
    "cards": [
      {
        "front": "Ce se recomandă pentru o protecție completă a sistemului?",
        "back": "Folosirea atât a unui Personal Firewall pentru controlul aplicațiilor, cât și a unui Network Firewall pentru protecția rețelei."
      }
    ]
  }],
        qa:[{
    "question": "Ce este un firewall personal (host-based)?",
    "answer": "Este un software care controlează traficul de date de pe un singur computer și permite doar aplicațiilor aprobate să comunice."
  },
  {
    "question": "Unde este amplasat un firewall de rețea și ce face?",
    "answer": "Este amplasat la marginea rețelei și controlează tot traficul care intră și iese din rețea, protejând toate dispozitivele conectate."
  }]
      },
      {
        name:"Instalarea unui software antimalware",
        content:`**Ce este un antivirus?**
        
Inițial, antivirusul (AV) era principala metodă de apărare împotriva atacatorilor. 
Acesta:
• Scanează fișierele pentru viruși
• Monitorizează activitatea de pe computer
• Detectează documente suspecte
• Poate curăța, carantina sau șterge fișierele infectate

**Scanarea** are loc când fișierele sunt deschise, create sau modificate.

**Limitările antivirusului tradițional**

Astăzi, antivirusul este doar o parte a unui sistem de apărare complet.
Alte tipuri de atacuri (Trojani, ransomware, spyware etc.) necesită protecții diferite.

**Analiza statică:**

• Compară fișierele **suspecte** cu o bază de **semnături** cunoscute (numită signature file)
• Caută șiruri de caractere specifice virușilor (string scanning)
• Nu detectează virușii **necunoscuți**

**Dezavantaj:**
AV trebuie să fie actualizat constant. Dacă baza de semnături e învechită, virusul poate trece nedetectat.

**Detectare euristică dinamică (Dynamic Heuristic Detection)**

O alternativă modernă este detecția euristică, care:
• Creează un mediu virtual (code emulation) unde „simulează” rularea codului
• Analizează comportamentul fișierului în acest mediu
• Nu execută codul pe computerul real

Este ca un agent de securitate care analizează comportamentul unei persoane necunoscute în lipsa unei poze (analogie cu verificările din aeroport).

**Antispyware și Popup Blocker**

**Antispyware** – protejează împotriva spyware-ului (care fură informații personale)
**Popup** **Blocker** – oprește reclamele pop-up enervante din browser:
 • Poți seta cât de sever să fie blocajul
 • Unele permit anumite pop-up-uri utile

Browserul poate afișa mesaje precum:
**Popup** **blocked**; to see this popup or additional options click here

**Concluzie**
**Antivirusul** este doar o piesă din puzzle:
• Oferă protecție parțială
• Trebuie combinat cu alte metode: firewall, backup, actualizări regulate, antispyware etc.

**Recomandare:**
Instalează și folosește AV-ul, chiar dacă nu oferă protecție completă.
`,
        flashcards:[{
    "title": "Limitările antivirusului tradițional",
    "cards": [
      {
        "front": "Care este principala limitare a antivirusului tradițional?",
        "back": "Depinde de semnături cunoscute, deci nu poate detecta viruși noi necunoscuți fără actualizări constante."
      }
    ]
  },
  {
    "title": "Detecția euristică dinamică",
    "cards": [
      {
        "front": "Cum funcționează detecția euristică dinamică?",
        "back": "Simulează rularea codului într-un mediu virtual pentru a analiza comportamentul fișierului fără a afecta computerul real."
      }
    ]
  }],
        qa:[{
    "question": "Ce face un antivirus tradițional când detectează un fișier infectat?",
    "answer": "Îl poate curăța, pune în carantină sau șterge pentru a preveni răspândirea."
  },
  {
    "question": "Ce alte măsuri trebuie luate alături de antivirus pentru o protecție completă?",
    "answer": "Firewall-uri, backup-uri, actualizări regulate, antispyware și popup blockers."
  }]
      },
      {
        name:"Monitorizarea Controlului Contului Utilizator (UAC)",
        content:`**Un cont de utilizator**

Definește nivelul de privilegii al unei persoane care folosește un computer. 
Acest nivel stabilește:
• Ce fișiere și foldere poate accesa
• Ce modificări de configurare poate face

**Tipuri de conturi Windows:**

• **Guest** – acces limitat, utilizare temporară
• **Standard** – activități zilnice, modificări minime
• **Administrator** – control total asupra sistemului

**Ce este UAC?**

User Account Control (UAC) este o funcție de securitate care:
• Alertează utilizatorul când un program vrea să modifice setările sistemului
• Cere aprobare pentru acțiuni sensibile (instalări, modificări de sistem)

**Scop:** previne ca un troian sau malware să facă modificări fără știrea ta.

**Cum funcționează UAC?**

Când UAC cere aprobare:
• Se activează modul **secure** desktop – ecranul se estompează pentru a preveni manipulări automate
• Apare o fereastră de confirmare (dialog box) :
   - Utilizatorul administrator apasă **Yes**
   - Utilizatorul standard trebuie să introducă **parola** unui administrator

**Niveluri de protecție UAC (configurabile)**

• Always notify – Avertizează la orice schimbare (recomandat)
• Notify me only when programs try to make changes
• Notify me only (fără estomparea ecranului)
• Never notify – Dezactivat (nu este recomandat)

UAC folosește culori pentru a indica riscul:
 🔴 roșu = risc mare, 🟡 galben = risc scăzut

**Recomandări de utilizare**

• Dacă UAC apare în timp ce instalezi un program cunoscut → **aprobă**
• Dacă apare în timp ce navighezi pe un site necunoscut → **refuză**
• Nu ignora ferestrele UAC – pot fi un semn că un program încearcă să facă modificări fără permisiune
`,
        flashcards:[{
    "title": "Tipuri de conturi Windows",
    "cards": [
      {
        "front": "Care sunt cele trei tipuri principale de conturi în Windows?",
        "back": "Guest (acces limitat), Standard (activități zilnice), Administrator (control total)."
      }
    ]
  },
  {
    "title": "Ce este și cum funcționează UAC?",
    "cards": [
      {
        "front": "Ce este UAC și ce face?",
        "back": "UAC (User Account Control) este o funcție de securitate care alertează utilizatorul când un program vrea să modifice sistemul și cere aprobare pentru acțiuni sensibile."
      }
    ]
  }],
        qa:[ {
    "question": "Ce face modul secure desktop când UAC cere aprobare?",
    "answer": "Estompează ecranul și afișează o fereastră de confirmare, prevenind manipulări automate."
  },
  {
    "question": "Ce nivel de protecție UAC este recomandat pentru securitate maximă?",
    "answer": "Always notify – avertizează la orice schimbare."
  }]
      },
      {
        name:"Crearea copiilor de siguranță (data backups)",
        content:`**Crearea de Backups**

**Importanță:**
Backup-urile protejează datele împotriva atacurilor, erorilor de utilizator, defecțiunilor hardware sau dezastrelor naturale. 
Ele permit restaurarea sistemului la o stare **funcțională.**

**Tipuri de backup:**

• Scheduled Backups: efectuate intenționat de utilizator (automat la o oră stabilită sau manual).
• Continuous Backups: realizate automat, fără intervenția utilizatorului, monitorizând și salvând fișierele modificate.

**Scheduled Backups – Pași esențiali:**

• **Ce** **se** **salvează?** 
Fișiere personale greu de recreat (documente, poze, date financiare). Programele nu sunt prioritare dacă pot fi reinstalate.

• **Ce** **mediu** **se** **folosește?** 
De preferat hard disk extern, conectat prin USB (rapid și portabil).

• **Unde** **se** **stochează?**
Ideal: o locație diferită (altă clădire, cloud etc.). Se recomandă regula 3-2-1: 3 copii, pe 2 tipuri de medii, 1 copie off-site.

• **Cât** **de** **des?**
Zilnic pentru computerele folosite frecvent. Dacă nu e posibil, de 2 ori pe săptămână.

**Continuous Backups – Caracteristici:**

• Se execută în fundal fără intervenție.
• Fișierele modificate sunt automat salvate.
• Serviciile online oferă: acces universal, backup al fișierelor de sistem, restaurare online, ștergere întârziată (30 zile).

**Recuperarea după Atacuri**

• Pregătirea este cheia: sistemele trebuie pregătite din timp pentru a putea fi restaurate.
• Recomandare pentru Windows: crearea unui recovery drive (pe USB) sau system repair disc (pe DVD).
• Alternative gratuite: imagini bootabile de tip rescue discs, care pot scana și dezinfecta sistemul fără a porni hard diskul compromis.
`,
        flashcards:[{
    "title": "Tipuri de backup și importanța lor",
    "cards": [
      {
        "front": "Ce este regula 3-2-1 pentru backup?",
        "back": "Păstrează 3 copii ale datelor, pe 2 tipuri diferite de medii, cu 1 copie off-site (în altă locație)."
      }
    ]
  }],
        qa:[{
    "question": "Care este diferența principală dintre Scheduled și Continuous Backups?",
    "answer": "Scheduled Backups sunt programate manual sau automat la intervale fixe, în timp ce Continuous Backups salvează automat fișierele imediat ce sunt modificate."
  }]
      },
    ]
    }
  ],
       quiz:[
      {
  "title": "Quiz 1",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Un ______________ necesită ca utilizatorul să-l transporte de la un computer la altul.",
      "options": ["adware", "worm", "rootkit", "virus"],
      "correctAns": "virus",
      "points": 20
    },
    {
      "question": "Care dintre acestea NU este o acțiune pe care o poate efectua un virus?",
      "options": [
        "transportul prin rețea la alt dispozitiv",
        "reformatarea hard disk-ului",
        "blocarea computerului",
        "ștergerea fișierelor"
      ],
      "correctAns": "transportul prin rețea la alt dispozitiv",
      "points": 20
    },
    {
      "question": "Ce tip de malware blochează computerul unui utilizator și apoi afișează un mesaj care pretinde că provine de la o agenție de aplicare a legii?",
      "options": ["virus", "ransomware", "worm", "Trojan"],
      "correctAns": "ransomware",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este un tip de malware a cărui trăsătură principală este circulația și/sau infectarea?",
      "options": ["Trojan", "virus", "worm", "botnet"],
      "correctAns": "botnet",
      "points": 20
    },
    {
      "question": "Un utilizator care instalează un program care tipărește cupoane, dar în fundal colectează parolele sale, a instalat un ______________.",
      "options": ["virus", "worm", "Trojan", "logic bomb"],
      "correctAns": "logic bomb",
      "points": 20
    }
  ]
}
,
{
  "title": "Quiz 2",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Ce tip de payload malware permite unui atacator să execute practic orice comandă pe computerul victimei?",
      "options": [
        "executare cod arbitrar",
        "configurare de la distanță",
        "control principal",
        "cod extins de acces"
      ],
      "correctAns": "executare cod arbitrar",
      "points": 20
    },
    {
      "question": "Care dintre acestea NU ar putea fi definit ca o bombă logică?",
      "options": [
        "Ștergerea tuturor datelor dacă numele lui John Smith este eliminat din lista angajaților",
        "Reformatarea hardului la 3 luni după ce Susan Jones a plecat din companie",
        "Trimiterea de emailuri spam către toți utilizatorii din companie",
        "Acordarea de ani suplimentari de credit pentru pensie dacă prețul acțiunilor scade sub 10$"
      ],
      "correctAns": "Trimiterea de emailuri spam către toți utilizatorii din companie",
      "points": 20
    },
    {
      "question": "Ce înseamnă accesarea unui computer, program sau serviciu care ocolește orice protecție de securitate normală?",
      "options": ["hole", "backdoor", "trapdoor", "honey pit"],
      "correctAns": "backdoor",
      "points": 20
    },
    {
      "question": "Care dintre acestea este un termen general pentru software-ul care adună informații fără consimțământul utilizatorului?",
      "options": ["pullware", "adware", "spyware", "scrapeware"],
      "correctAns": "spyware",
      "points": 20
    },
    {
      "question": "Care afirmație despre un keylogger NU este adevărată?",
      "options": [
        "Keylogger-ele software sunt ușor de detectat",
        "Pot fi folosite pentru a captura parole",
        "Se instalează între tastatură și portul USB",
        "Pot trimite informațiile prin Internet"
      ],
      "correctAns": "Keylogger-ele software sunt ușor de detectat",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 3",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Botnet-urile sunt compuse din ______________.",
      "options": ["instrumente IRC", "zombies", "herders", "spam"],
      "correctAns": "zombies",
      "points": 20
    },
    {
      "question": "Fiecare dintre următoarele este un motiv pentru care adware-ul este detestat, cu excepția ______________.",
      "options": [
        "reflectă abilitățile de programare ale atacatorului",
        "interferează cu productivitatea utilizatorului",
        "afișează conținut inadecvat",
        "poate încetini sau bloca sistemul"
      ],
      "correctAns": "reflectă abilitățile de programare ale atacatorului",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o caracteristică tipică a unui serviciu de backup cu plată?",
      "options": [
        "backup pe hard extern",
        "acces universal",
        "feedback despre fișiere",
        "ștergere imediată"
      ],
      "correctAns": "backup pe hard extern",
      "points": 20
    },
    {
      "question": "Câți purtători trebuie să aibă un virus pentru a se replica și ataca?",
      "options": ["1", "2", "3", "4"],
      "correctAns": "1",
      "points": 20
    },
    {
      "question": "Ce nivel al UAC oferă cel mai scăzut nivel de securitate?",
      "options": [
        "Universal notify",
        "Always notify",
        "Never notify",
        "Notify on demand"
      ],
      "correctAns": "Never notify",
      "points": 20
    }
  ]
}
,
{
  "title": "Quiz 4",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Care dintre următoarele îmbunătățiri software oferă funcții noi, dar nu abordează vulnerabilități?",
      "options": [
        "actualizare de funcționalitate",
        "patch",
        "pachet de service",
        "pachet de resurse"
      ],
      "correctAns": "actualizare de funcționalitate",
      "points": 20
    },
    {
      "question": "Ce tip de firewall este un dispozitiv hardware extern?",
      "options": [
        "firewall personal",
        "firewall la distanță",
        "firewall de rețea",
        "firewall de aplicație"
      ],
      "correctAns": "firewall de rețea",
      "points": 20
    },
    {
      "question": "Baza de date care conține semnătura unui virus se numește ______________.",
      "options": ["string file", "malware DB", "virus resource file", "signature file"],
      "correctAns": "signature file",
      "points": 20
    },
    {
      "question": "Care dintre acestea NU este o întrebare esențială privind backup-ul de date?",
      "options": [
        "Ce fișiere ar trebui să fie salvate?",
        "Cine ar trebui să facă backup-ul?",
        "Unde ar trebui să fie stocate?",
        "Cât de des ar trebui efectuate?"
      ],
      "correctAns": "Cine ar trebui să facă backup-ul?",
      "points": 20
    },
    {
      "question": "Un ______________ este o imagine descărcabilă ce poate scana computerul pentru malware.",
      "options": [
        "disc de reparare",
        "disc de salvare",
        "disc de resurse",
        "disc curat"
      ],
      "correctAns": "disc de salvare",
      "points": 20
    }
  ]
}


  
  
]
  },
   {
    id:4,
    title:"Securitatea pe internet",
    description:"Acest curs oferă o introducere practică în securitatea pe internet",
    banner_image:"/cap4.jpg",
    achievementBadge: "Securitate pe internet",
    summary:` rezumat curs 4 `,
    chapters:[
      {
      title:"Cum funcționează internetul ?",
      subsections:[
      {
        name:"Introducere",
        content:`**Ce este Internetul?**

**Internetul** este o rețea globală care permite dispozitivelor conectate (calculatoare, telefoane, tablete) să **comunice** și să facă schimb de informații. 

Există două idei **greșite** comune:
• Internetul nu este format doar din dispozitive individuale, ci din rețele conectate între ele la nivel global.
• Internetul nu este deținut de o singură entitate, ci este operat de guverne, companii, școli și utilizatori individuali care colaborează liber.

Înțelegerea modului în care funcționează uneltele de bază ale Internetului (precum web-ul și emailul) este esențială pentru a învăța despre securitatea online. 
Majoritatea atacurilor cibernetice folosesc aceste două canale.
`,
        flashcards:[
          {
    title: "Flashcard 1",
    cards: [
      {
        front: "Este Internetul deținut de o singură entitate?",
        back: "Nu, Internetul este operat în mod colaborativ de guverne, companii, școli și utilizatori individuali."
      }
    ]
  }

        ],
        qa:[
          {
    question: "De ce este important să înțelegem cum funcționează web-ul și emailul?",
    answer: "Pentru că majoritatea atacurilor cibernetice folosesc aceste două canale."
  }
        ]
      },
      {
        name:"World Wide Web (WWW)",
        content:`**Ce este WWWW?**

Web-ul este o componentă a Internetului ce permite accesarea informației în format standardizat. 
Acesta se bazează pe **HTML** (Hypertext Markup Language), un limbaj care permite combinarea textului, imaginilor, sunetelor, videoclipurilor și linkurilor într-o singură **pagină.**

**Browser-ul** **web** este aplicația care interpretează codul HTML și afișează pagina pentru utilizator.
Utilizatorii pot naviga ușor de la o pagină la alta prin **linkuri** (hyperlinkuri).

**Cum funcționează afișarea unei pagini web?**

Atunci când un utilizator cere o pagină web:
• Browserul trimite o cerere către un server.
• Serverul răspunde cu documentul HTML cerut, folosind HTTP (Hypertext Transfer Protocol).
• Browserul salvează documentul pe calculatorul utilizatorului și îl afișează.

**HTTP** este parte dintr-un set mai larg de protocoale numit **TCP/IP** (Transmission Control Protocol / Internet Protocol), care asigură **transferul** **datelor** pe Internet.
`,
        flashcards:[ {
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce este web-ul și pe ce se bazează?",
        back: "Web-ul este o componentă a Internetului ce permite accesarea informațiilor în format standardizat, bazându-se pe HTML."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Cum funcționează afișarea unei pagini web?",
        back: "Browserul trimite o cerere către un server, care răspunde cu un document HTML prin HTTP. Apoi, browserul îl afișează utilizatorului."
      }
    ]
  }],
        qa:[ {
    question: "Care este rolul unui browser web?",
    answer: "Interpretarea codului HTML și afișarea paginii pentru utilizator."
  },
  {
    question: "Ce protocol este folosit pentru transferul paginilor web?",
    answer: "HTTP, parte din setul de protocoale TCP/IP."
  }]
      },
       {
        name:"Emailul",
        content:`**Emailul a devenit**

Parte esențială a vieții de zi cu zi. Se trimit peste 2,3 milioane de emailuri pe secundă, iar acest număr crește anual cu ~5%.

**Există două sisteme principale pentru trimiterea și primirea mesajelor:**

**1. Protocolul SMTP și POP3**

• SMTP (Simple Mail Transfer Protocol) – trimite emailuri.
• POP3 (Post Office Protocol) – descarcă emailurile pe dispozitivul local printr-un program numit email client.

După descărcare, emailurile pot fi șterse de pe server.

**2. Protocolul IMAP**

• IMAP (Internet Mail Access Protocol) – mai avansat, emailurile rămân pe server.
• Se pot organiza în foldere, accesa de pe orice dispozitiv și sincroniza automat.

Permite citirea și scrierea offline; modificările se sincronizează când există conexiune.

**Atașamente email**

**Atașamentele** sunt fișiere adăugate la emailuri (ex: documente Word, poze, tabele). 
Ele sunt codificate într-un format special și trimise împreună cu mesajul. La primire, calculatorul destinatarului le decodează în formatul lor original.

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care este diferența dintre POP3 și IMAP?",
        back: "POP3 descarcă emailurile pe dispozitiv și le poate șterge de pe server, în timp ce IMAP le păstrează pe server și permite sincronizare între dispozitive."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Cum sunt gestionate atașamentele în emailuri?",
        back: "Atașamentele sunt codificate și trimise împreună cu mesajul, iar calculatorul destinatarului le decodează la recepție."
      }
    ]
  }],
        qa:[ {
    question: "Ce protocol este folosit pentru trimiterea emailurilor?",
    answer: "SMTP (Simple Mail Transfer Protocol)."
  },
  {
    question: "De ce este IMAP preferat față de POP3 în multe cazuri?",
    answer: "Pentru că permite accesul de pe mai multe dispozitive și sincronizarea automată a folderelor."
  }]
      }
    ]
    },
     {
      title:"Riscuri ale securității pe internet",
      subsections:[
        {
        name:"Introducere",
        content:`**Utilizarea Internetului**

Implică mai multe **riscuri**, printre care:
• vulnerabilități ale browserului 
• reclame malițioase (malvertising)
• descărcări automate periculoase (drive-by)
• cookie-uri
• riscuri asociate emailului`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care sunt câteva riscuri asociate utilizării Internetului?",
        back: "Vulnerabilități ale browserului, reclame malițioase (malvertising), descărcări automate periculoase, cookie-uri și riscuri legate de email."
      }
    ]
  }],
        qa:[{
    question: "Ce este un risc comun legat de reclame online?",
    answer: "Malvertising – reclame malițioase care pot infecta dispozitivul fără acțiunea utilizatorului."
  }]
      },
      {
        name:"Vulnerabilități ale browserului",
        content:`**La început, conținutul web**
                
Era static – doar text și imagini. Pe măsură ce utilizatorii au cerut conținut dinamic (ex: animații, conținut personalizat), HTML-ul simplu nu a mai fost suficient. 
Soluțiile au fost:
• coduri de tip **script** descărcate de pe server
• **componente** **suplimentare** instalate în browser: extensii, plug-in-uri și add-on-uri

**Scripting Code – JavaScript**

Una dintre cele mai populare metode de a adăuga funcționalitate dinamică este JavaScript. Codul JavaScript este inclus direct în paginile HTML. 
Când utilizatorul accesează pagina, codul este descărcat și executat de browserul său.

**Riscuri cu JavaScript**

• poate colecta și trimite date fără acordul utilizatorului
• poate trimite emailuri sau comenzi periculoase
• poate fi folosit pentru a accesa rețeaua și a ataca sistemul utilizatorului

**Pentru a preveni abuzurile, JavaScript este limitat prin:**

• limitarea capabilităților (nu poate accesa fișierele locale)
• sandboxing (executare într-un mediu restricționat)
• same origin policy (nu poate accesa date din surse diferite)

**Extensii, Plug-In-uri și Add-On-uri**

Toate aceste componente adaugă funcționalități noi browserului, dar pot deveni puncte vulnerabile:
• **Extensii:** scrise de obicei în JavaScript, adaugă funcții specifice. Sunt dependente de browser.
• **Plug-In-uri:** programe externe care rulează în browser (ex: pentru audio, video). 
  **Exemple:** Java, Flash, Adobe Reader.
• **Add-On-uri:** modifică întregul comportament al browserului, nu doar o pagină. Pot adăuga bare de unelte, monitoriza taburi și conținutul tuturor paginilor.

**Riscuri:**
• Unele pot avea vulnerabilități exploatate de atacatori (ex: Flash)
• Pot permite rularea de cod malițios
• Se pot folosi pentru a controla complet calculatorul
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "De ce a devenit necesar JavaScript în paginile web?",
        back: "Pentru a adăuga funcționalitate dinamică precum animații și conținut personalizat, deoarece HTML-ul simplu nu mai era suficient."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce riscuri poate implica rularea codului JavaScript?",
        back: "Poate colecta date fără acord, trimite comenzi periculoase sau ataca sistemul utilizatorului."
      }
    ]
  },
  {
    title: "Flashcard 3",
    cards: [
      {
        front: "Care este diferența dintre extensii, plug-in-uri și add-on-uri?",
        back: "Extensiile adaugă funcții specifice, plug-in-urile rulează programe externe, iar add-on-urile modifică comportamentul general al browserului."
      }
    ]
  }],
        qa:[{
    question: "Cum este securizat JavaScript pentru a preveni abuzurile?",
    answer: "Prin limitarea accesului la fișiere, rulare în sandbox și politica same origin."
  },
  {
    question: "Ce vulnerabilitate majoră este asociată cu plug-in-urile?",
    answer: "Pot permite rularea de cod malițios și pot fi exploatate de atacatori, precum în cazul Flash."
  },
  {
    question: "Ce rol au extensiile în browser?",
    answer: "Extensiile scrise în JavaScript adaugă funcționalități specifice și sunt dependente de browser."
  }]
      },
    {
        name:"Malvertising – Reclame malițioase",
        content:`**Ce este Malvertising-ul?**

Malvertising-ul apare atunci când atacatorii folosesc rețele de reclame pentru a distribui viruși către utilizatorii care accesează site-uri legitime.

**Cum funcționează:**

• Site-urile apelează la rețele externe de reclame.
• Acestea pot fi compromise de atacatori, care livrează reclame cu malware (troieni, ransomware etc.).
• Utilizatorii nici nu trebuie să dea click – simpla afișare poate activa descărcarea.

**Avantaje pentru atacatori:**

• Folosesc site-uri mari și de încredere pentru a păcăli utilizatorii.
• Administratorii site-urilor nu știu ce tip de reclame se afișează.
• Conținutul publicitar se rotește constant, deci e greu de identificat sursa exactă.
• Se pot plasa reclame direcționate pe baza locației sau a cuvintelor-cheie căutate.

Ex: Cineva care caută „alocație guvernamentală pentru călătorii” poate fi țintit cu un anunț malițios aparent legitim.

**Prevenirea malvertising-ului**

Este dificil de controlat, deoarece:
• Utilizatorii nu știu că sunt atacați.
• Site-urile nu știu ce conținut oferă rețelele terțe de reclame.
• Tehnologii vechi precum Adobe Flash sunt deseori exploatate și încă folosite.

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce este malvertising-ul?",
        back: "Este o tehnică prin care atacatorii folosesc rețele de reclame pentru a distribui malware către utilizatori prin site-uri legitime."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "De ce este malvertising-ul greu de prevenit?",
        back: "Pentru că utilizatorii și administratorii nu știu că sunt atacați, iar conținutul publicitar se schimbă constant și provine de la rețele externe."
      }
    ]
  }],
        qa:[ {
    question: "Cum pot atacatorii infecta utilizatori fără ca aceștia să dea click?",
    answer: "Prin simpla afișare a unei reclame compromise care activează automat descărcarea de malware."
  },
  {
    question: "Ce tip de tehnologii învechite sunt adesea exploatate în malvertising?",
    answer: "Adobe Flash și alte tehnologii vechi încă folosite de unele site-uri."
  }]
      },
    {
        name:"Drive-By Downloads",
        content:`**Ce este un drive-by download?** 
        
Un drive-by download apare atunci când un site web legitim este infectat cu conținut malițios, iar utilizatorii devin victime doar accesând pagina — fără să dea click sau să descarce nimic.

• Atacatorii exploatează vulnerabilități din serverul web pentru a injecta cod periculos.
• Codul este adesea invizibil (ex: un iframe de zero pixeli – cadru HTML ascuns).
• Dacă browserul utilizatorului este vulnerabil, scriptul descarcă automat malware pe calculatorul acestuia.

`,
        flashcards:[ {
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce este un atac de tip drive-by download?",
        back: "Este un atac în care utilizatorul descarcă malware automat doar accesând un site infectat, fără a da click sau a descărca ceva în mod intenționat."
      }
    ]
  }],
        qa:[{
    question: "Cum reușesc atacatorii să execute un drive-by download?",
    answer: "Prin injectarea unui cod invizibil (ex: iframe de 0 pixeli) într-un site legitim și exploatarea vulnerabilităților browserului utilizatorului."
  }]
      },
    {
        name:"Cookie-uri",
        content:`**HTML nu reține**
  
Preferințele utilizatorilor, așa că site-urile folosesc **cookie-uri** – fișiere mici salvate pe calculatorul tău – pentru a **memora** setările, istoricul sau informațiile personale.

**Tipuri de cookie-uri:**

• **First-party** cookie: creat de site-ul pe care îl vizitezi, ex: preferințe de limbă.
• **Third-party** cookie: plasate de rețele publicitare externe pentru a urmări activitatea ta pe mai multe site-uri.
• **Locally** **Shared** **Objects** (LSO): cunoscute ca Flash cookies, pot stoca date mai mari și nu pot fi șterse ușor din browser.

**Cookie-urile pot afecta confidențialitatea și securitatea**

Ele pot fi folosite pentru a:
• urmări obiceiurile de navigare
• crea profiluri de utilizator
• livra reclame direcționate
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce sunt cookie-urile și la ce folosesc?",
        back: "Cookie-urile sunt fișiere mici salvate pe calculator pentru a memora preferințele, istoricul sau informațiile utilizatorului."
      }
    ]
  }],
        qa:[{
    question: "Cum pot cookie-urile afecta confidențialitatea utilizatorului?",
    answer: "Pot fi folosite pentru urmărirea activității online, crearea de profiluri și livrarea de reclame personalizate."
  }]
      },
    {
        name:"Riscuri ale Emailului",
        content:`**Emailul este**

Un vector principal pentru atacuri. 

**Cele mai comune riscuri sunt:**

**Spam**

• Emailuri nesolicitate trimise în masă (milioane zilnic).
• Adesea conțin reclame pentru medicamente, împrumuturi, produse dubioase.
• Costuri reduse pentru expeditori, dar impact mare: și un singur răspuns generează profit.

Unele spamuri conțin text sub formă de imagine (image spam) pentru a evita filtrele automate.

**Atașamente malițioase**

• Utilizatorii deschid fișiere nesigure primite prin email.
• Aceste fișiere pot conține viruși care:
  - se răspândesc la contactele tale
  - preiau controlul asupra calculatorului
  - se ascund sub pretexte precum: „Vezi pozele cu tine?”, „Info important despre uraganul de ieri”

**Linkuri ascunse (embedded hyperlinks)**

• Par să ducă spre site-uri legitime (ex: „Click aici pentru contul tău”), dar în realitate te redirecționează către site-ul atacatorului.
• Site-ul fals colectează datele tale (parole, conturi).
• Linkul poate afișa un text de încredere, dar duce în altă parte (ex: textul „www.onlineaccount.com” → duce de fapt la „attackers-dungeon.net”).
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce riscuri implică atașamentele malițioase din emailuri?",
        back: "Pot conține viruși care se răspândesc, preiau controlul asupra calculatorului și se ascund sub pretexte înșelătoare."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Cum funcționează linkurile ascunse (embedded hyperlinks) în atacuri prin email?",
        back: "Linkul pare legitim, dar redirecționează către un site fals care fură datele utilizatorului."
      }
    ]
  }],
        qa:[{
    question: "Ce este spamul și de ce este eficient pentru atacatori?",
    answer: "Emailuri nesolicitate trimise în masă, eficiente datorită costurilor reduse și șanselor mari de profit chiar și cu un singur răspuns."
  },
  {
    question: "Cum evită unii atacatori filtrele antispam?",
    answer: "Trimițând textul sub formă de imagine (image spam)."
  }]
      },]
      
    },
    {
      title:"Apărarea împotriva atacurilor pe Internet",
      subsections:[
      {
        name:"Introducere",
        content:`**Protejarea eficientă**

Împotriva atacurilor începe cu securizarea calculatorului:
• Actualizări (patch-uri)
• Firewall personal
• Antivirus
• Controlul conturilor de utilizator (UAC)
• Backup de date
• Plan de recuperare după atac

După ce calculatorul e **securizat**, urmează trei direcții principale de apărare:
• **Securizarea** browserului web
• **Protecția** emailului
• Urmarea **bunelor** **practici** de securitate online
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care sunt măsurile de bază pentru securizarea calculatorului?",
        back: "Actualizări regulate, firewall personal, antivirus, controlul conturilor (UAC), backup de date și plan de recuperare."
      }
    ]
  }],
        qa:[{
    question: "Care sunt cele trei direcții principale de apărare după securizarea calculatorului?",
    answer: "Securizarea browserului web, protecția emailului și urmarea bunelor practici de securitate online."
  }]
      },
      {
        name:"Securizarea browserului web",
        content:`**Browserul este**
         
Prima linie de apărare. Este important să:
• configurezi setările de securitate
• instalezi instrumente suplimentare de protecție

**Setări de configurare în browser**

Majoritatea browserelor moderne permit personalizarea securității:
• **Internet** **Explorer** (IE) permitea definirea de „zone” cu nivele diferite de securitate pentru diverse site-uri. A fost înlocuit de Microsoft Edge.
• **Google** **Chrome** oferă setări extinse pentru confidențialitate și securitate.


**Setări de conținut în Google Chrome**

• **Cookies:** pot fi acceptate, refuzate sau șterse automat la închiderea browserului. Poți seta excepții pentru anumite site-uri.
• **JavaScript:** poate fi activat sau blocat (cu excepții).
• **Plug-ins:** pot fi blocate complet, selectiv sau pot cere permisiune înainte de a rula.
• **Pop-ups:** pot fi blocate, permise sau controlate individual.
• **Unboxed** **plug-ins:** utilizatorul poate permite sau bloca rularea directă a anumitor plug-in-uri (ex: video streaming).

**Setări avansate în Chrome**

• Parole și formulare: browserul poate cere permisiunea pentru a salva parole.
• Descărcări: se poate alege locația implicită.
• Ștergerea datelor de navigare: fișierele HTML pot fi șterse de pe disc.
• Serviciu de corectare a URL-urilor: previne greșelile de tastare care duc către site-uri false (ex: typo squatting).
• Sincronizare avansată: sincronizează setările și parolele pe toate dispozitivele conectate la contul Google.

**Extensii de securitate pentru browser**

Toate browserele majore permit instalarea de:
• Extensii de reputație a site-ului – oferă indicii despre cât de sigur este un site (verde/roșu/galben).
• Validare de plug-in-uri – avertizează dacă un plug-in este vulnerabil sau învechit.
• URL expander – arată adresa completă a unui link scurtat (ex: goo.gl/...).
• Trackere de site-uri – monitorizează ce site-uri te urmăresc și permit ștergerea rapidă a cookie-urilor.
• Ad blocker – blochează reclame text și video.
• Cookie stopper – controlează sau blochează cookie-uri de la terți.

Chiar dacă extensiile oferă un plus de securitate, trebuie folosite cu atenție.
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce setări de securitate oferă Google Chrome?",
        back: "Poți controla cookies, JavaScript, plug-in-uri, pop-ups, parole, descărcări, datele de navigare și sincronizarea cu contul Google."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce tipuri de extensii pot îmbunătăți securitatea browserului?",
        back: "Extensii de reputație a site-ului, validare plug-in-uri, URL expander, trackere, ad blocker și cookie stopper."
      }
    ]
  },
  {
    title: "Flashcard 3",
    cards: [
      {
        front: "De ce este browserul considerat prima linie de apărare?",
        back: "Pentru că este poarta de acces la conținut web și trebuie configurat corect pentru a preveni atacurile."
      }
    ]
  }],
        qa:[ {
    question: "Ce opțiuni ai în Chrome pentru gestionarea cookie-urilor?",
    answer: "Le poți accepta, respinge sau șterge automat, iar pentru unele site-uri poți seta excepții."
  },
  {
    question: "Ce este un URL expander și cum ajută?",
    answer: "Este o extensie care afișează adresa completă a linkurilor scurtate, prevenind accesul la site-uri înșelătoare."
  },
  {
    question: "Ce trebuie avut în vedere când folosim extensii de securitate?",
    answer: "Extensiile pot spori protecția, dar trebuie alese cu atenție pentru a nu introduce vulnerabilități."
  }]
      },
      {
        name:"Protecția emailului",
        content:`**Emailul este**
  
Un canal frecvent folosit pentru atacuri cibernetice.
Măsurile de apărare includ:
• filtre anti-spam
• configurarea opțiunilor de securitate
• protecția atașamentelor

**Filtre anti-spam (Spam Filters)**

Spam-ul nu este doar deranjant, ci poate transporta malware. Aplicațiile anti-spam pot fi instalate:
• pe calculatorul utilizatorului
• la nivelul firmei sau al furnizorului de servicii de email

Majoritatea spam-ului este **blocat** înainte să ajungă în inbox.

**Setări utile:**

• Blocked senders: listă neagră cu expeditori blocați.
• Allowed senders: listă albă cu expeditori acceptați.
• Blocked top-level domains: emailuri din anumite țări sau domenii pot fi blocate complet.


**Setări de securitate în email**

**Email local (Outlook, Thunderbird etc.)**

• Reading pane: permite vizualizarea mesajelor fără a le deschide complet (scripturile nu se activează).
• Block external content: blochează conținut extern (imagini, sunete) care se descarcă automat – folosit adesea de spammeri pentru a verifica dacă o adresă e validă.

**Email în browser (Webmail)**

• Setări de recuperare cont: număr de telefon sau email alternativ, notificări în caz de acces neautorizat.
• Monitorizare activitate neobișnuită: verifică emailuri suspecte, locații diferite de acces, mesaje șterse brusc.
• Verificarea setărilor generale: semnături, redirecționări, liste de contacte.

**Atașamente**

Atașamentele pot conține cod malițios. Protecția se face prin:
• Preview automat: unele clienți permit previzualizarea fără a deschide complet fișierul.
• Protected View (Office): atașamentele Word, Excel, PowerPoint se deschid în mod securizat (read-only). Se recomandă să nu se apese pe “Enable Editing” fără verificarea sursei fișierului.

**Important:** oricât de banal ar părea un atașament, dacă vine din sursă necunoscută, tratează-l cu suspiciune.

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Cum ajută filtrele anti-spam la protejarea emailului?",
        back: "Blochează automat mesajele nesolicitate care pot conține malware, înainte să ajungă în inbox."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce măsuri de securitate pot fi configurate în aplicațiile de email?",
        back: "Reading pane, blocarea conținutului extern, verificarea activității suspecte și setări de recuperare cont."
      }
    ]
  },
  {
    title: "Flashcard 3",
    cards: [
      {
        front: "Cum pot fi protejate atașamentele periculoase din emailuri?",
        back: "Prin previzualizare automată, deschidere în mod securizat (Protected View) și evitarea opțiunii „Enable Editing”."
      }
    ]
  }],
        qa:[{
    question: "Ce este lista 'Blocked senders'?",
    answer: "O listă neagră cu expeditori ale căror mesaje sunt blocate automat."
  },
  {
    question: "Cum pot fi identificate activitățile neobișnuite într-un cont de email web?",
    answer: "Prin monitorizarea locațiilor de acces, emailuri suspecte sau mesaje șterse brusc."
  },
  {
    question: "Ce recomandare importantă trebuie urmată în cazul atașamentelor necunoscute?",
    answer: "Nu deschide și nu activa opțiuni precum 'Enable Editing' fără verificarea sursei fișierului."
  }]
      },
      {
        name:"Cele mai bune practici de securitate pe Internet",
        content:`**Pentru a te proteja**
    
În timp ce folosești emailul sau navighezi pe Internet, urmează aceste reguli esențiale:

**Descărcarea fișierelor**

• Descarcă doar de pe site-uri cunoscute și de încredere.
• Verifică dacă ești pe site-ul corect (nu pe un fals cu aspect similar).
• Alege opțiunea de a salva fișierul pe disc în loc să-l rulezi direct.

Astfel, programele de securitate pot scana fișierul înainte să fie deschis.

**Controlul cookie-urilor**

• Folosește setările browserului pentru a gestiona cookie-urile.
• Dacă blocarea completă afectează funcționarea site-urilor, setează browserul să șteargă toate cookie-urile când este închis.

**Navigare privată**

• Activează modul privat (incognito).
   - Istoricul, formularele, căutările și fișierele temporare NU sunt salvate după sesiune.
   - Dar acest mod NU te face anonim pe internet – doar curăță urmele locale de pe calculator.

**Istoric de navigare**

• Șterge periodic istoricul de navigare pentru a proteja informațiile despre site-urile vizitate.
Site-urile sau alte persoane pot folosi istoricul pentru a crea profiluri despre preferințele tale.

**Blocarea pop-up-urilor**

• Activează Pop-up Blocker. Ferestrele pop-up pot conține malware sau redirecționări periculoase.

**Ștergerea cache-ului**

• Browserul salvează pagini și fișiere în cache pentru a accelera încărcarea.
• Dacă nu este curățat:
   - ocupă spațiu
   - încetinește browserul
   - păstrează informații sensibile
• Ștergerea periodică a cache-ului îmbunătățește performanța și protejează confidențialitatea.
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce reguli trebuie respectate la descărcarea fișierelor de pe Internet?",
        back: "Descarcă doar de pe site-uri de încredere, verifică autenticitatea site-ului și alege salvarea fișierului pe disc pentru scanare."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "De ce este importantă ștergerea periodică a cache-ului?",
        back: "Pentru a elibera spațiu, îmbunătăți performanța browserului și proteja informațiile sensibile salvate local."
      }
    ]
  }],
        qa:[ {
    question: "Ce face modul de navigare privată (incognito)?",
    answer: "Șterge istoricul, formularele și fișierele temporare după sesiune, dar nu oferă anonimitate completă online."
  },
  {
    question: "Cum te protejează blocarea ferestrelor pop-up?",
    answer: "Previne afișarea automată a ferestrelor care pot conține malware sau redirecționări periculoase."
  }]
      }
    ]
    }
  ],
         quiz:[
      {
  "title": "Quiz 1",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Care dintre următoarele nu este adevărat despre Internet?",
      "options": [
        "Nu este controlat de o singură organizație sau entitate guvernamentală.",
        "Este o rețea locală de calculatoare și rețele.",
        "Industriile, guvernele, școlile și indivizii cooperează în autoguvernarea Internetului.",
        "Este compus din rețele la care sunt conectate dispozitive."
      ],
      "correctAns": "Este o rețea locală de calculatoare și rețele.",
      "points": 20
    },
    {
      "question": "Care este formatul folosit pentru a scrie pagini web?",
      "options": [
        "Hypertext Transport Protocol (HTTP)",
        "Hypertext Markup Language (HTML)",
        "Transmission Control Protocol/Internet Protocol (TCP/IP)",
        "Microsoft Adobe Printer (MAP)"
      ],
      "correctAns": "Hypertext Markup Language (HTML)",
      "points": 20
    },
    {
      "question": "Care dintre următoarele este un sistem de e-mail mai recent și avansat?",
      "options": [
        "Simple Mail Transfer Protocol (SMTP)",
        "Transmission Control Protocol (TCP)",
        "Post Office Protocol (POP)",
        "Internet Mail Access Protocol (IMAP)"
      ],
      "correctAns": "Internet Mail Access Protocol (IMAP)",
      "points": 20
    },
    {
      "question": "Care este cel mai popular cod de scripting folosit în paginile web?",
      "options": [
        "Java",
        "JavaScript",
        "Hypertext Markup Language (HTML)",
        "Hypertext Transport Protocol (HTTP)"
      ],
      "correctAns": "JavaScript",
      "points": 20
    },
    {
      "question": "Care dintre următoarele nu este o extensie care adaugă funcționalitate de navigare dinamică?",
      "options": [
        "Java",
        "extensie",
        "add-ons",
        "plug-ins"
      ],
      "correctAns": "Java",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 2",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Un cookie care nu a fost creat de site-ul web care încearcă să îl acceseze se numește un __________.",
      "options": [
        "cookie de primă parte",
        "cookie de a doua parte",
        "cookie de terță parte",
        "cookie de resursă"
      ],
      "correctAns": "cookie de terță parte",
      "points": 20
    },
    {
      "question": "Care dintre următoarele extensii de browser oferă legături către programe externe?",
      "options": [
        "Java applet",
        "plug-in",
        "extensie",
        "add-on"
      ],
      "correctAns": "plug-in",
      "points": 20
    },
    {
      "question": "Cum folosește un atacator o tehnică de tip malvertising?",
      "options": [
        "Atacatorii infectează direct site-ul web identificând o vulnerabilitate în server.",
        "Java applet-urile sunt atașate la mesaje spam care pretind a fi reclame.",
        "Atacatorii pot infecta rețelele de publicitate terță parte, distribuind malware prin anunțuri afișate în browser.",
        "Obiectele de resurse sunt trimise ca atașamente email de la o sursă care pare a fi o agenție de publicitate cunoscută."
      ],
      "correctAns": "Atacatorii pot infecta rețelele de publicitate terță parte, distribuind malware prin anunțuri afișate în browser.",
      "points": 20
    },
    {
      "question": "O __________ este o listă de adrese de e-mail de la expeditori de la care NU dorești să primești mesaje.",
      "options": [
        "listă albă",
        "listă neagră",
        "listă verde",
        "listă roșie"
      ],
      "correctAns": "listă neagră",
      "points": 20
    },
    {
      "question": "Care dintre următoarele este adevărat despre un cookie?",
      "options": [
        "Poate conține un virus.",
        "Poate reprezenta un risc de securitate și confidențialitate.",
        "Acționează ca un vierme informatic.",
        "Plasează un fișier mic pe serverul web trimis din browser."
      ],
      "correctAns": "Poate reprezenta un risc de securitate și confidențialitate.",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 3",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Computerul lui Bob a fost infectat printr-un atac de tip drive-by download. Ce a făcut Bob pentru a se infecta?",
      "options": [
        "A deschis un atașament de e-mail.",
        "A vizitat un site web.",
        "A trimis din greșeală un virus către un site web.",
        "A dat clic pe Download."
      ],
      "correctAns": "A vizitat un site web.",
      "points": 20
    },
    {
      "question": "Ce tip de cookie este cel mai complex?",
      "options": [
        "obiect partajat local (LSO)",
        "cookie de tip plug-in",
        "cookie de control (CC)",
        "cookie extins (CE)"
      ],
      "correctAns": "obiect partajat local (LSO)",
      "points": 20
    },
    {
      "question": "Ce tehnică folosesc atacatorii pentru a ocoli filtrele antispam bazate pe text?",
      "options": [
        "spam cu obiecte",
        "spam cu atașamente",
        "spam Flash",
        "spam cu imagini"
      ],
      "correctAns": "spam cu imagini",
      "points": 20
    },
    {
      "question": "Care este primul pas în apărarea împotriva atacurilor bazate pe Internet?",
      "options": [
        "Utilizarea unui browser care suportă descărcări automate.",
        "Asigurarea securității computerului propriu.",
        "Să nu deschizi atașamente de e-mail.",
        "Adăugarea de extensii de securitate la browser."
      ],
      "correctAns": "Asigurarea securității computerului propriu.",
      "points": 20
    },
    {
      "question": "De ce nu ar trebui să dai clic pe un hyperlink integrat?",
      "options": [
        "Sunt lente.",
        "Rareori funcționează corect.",
        "Te pot duce către un alt site decât cel anunțat.",
        "Ocupă prea mult spațiu pe disc."
      ],
      "correctAns": "Te pot duce către un alt site decât cel anunțat.",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 4",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Panoul de citire permite utilizatorului să citească un mesaj email __________.",
      "options": [
        "după ce atașamentul a fost salvat pe hard disk",
        "o singură dată",
        "fără a-l deschide efectiv",
        "dintr-o locație la distanță"
      ],
      "correctAns": "fără a-l deschide efectiv",
      "points": 20
    },
    {
      "question": "Cea mai sigură opțiune când configurezi un browser pentru securitate este __________.",
      "options": [
        "acceptarea cookie-urilor de primă parte",
        "acceptarea cookie-urilor de primă parte, dar respingerea celor de terță parte",
        "respingerea obiectelor partajate local, dar acceptarea cookie-urilor de a doua parte",
        "respingerea cookie-urilor de primă și terță parte"
      ],
      "correctAns": "respingerea cookie-urilor de primă și terță parte",
      "points": 20
    },
    {
      "question": "Care dintre următoarele nu este o extensie de browser pentru îmbunătățirea securității?",
      "options": [
        "reputația site-ului",
        "semnal flash pentru rețeaua locală",
        "extensie de tip URL expander",
        "validarea plug-inurilor"
      ],
      "correctAns": "semnal flash pentru rețeaua locală",
      "points": 20
    },
    {
      "question": "De ce ai dori să blochezi conținutul extern să nu se descarce în clientul tău de email?",
      "options": [
        "Pentru a împiedica spammerii să afle că adresa ta de email este validă",
        "Pentru a profita de citirea de la distanță",
        "Pentru a încetini clientul de email astfel încât să poți citi mesajul",
        "Pentru a preveni umplerea bufferului procesorului grafic al computerului"
      ],
      "correctAns": "Pentru a împiedica spammerii să afle că adresa ta de email este validă",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o practică sigură pe Internet?",
      "options": [
        "Restricționează cookie-urile în browser din setările acestuia.",
        "Verifică ortografia adresei web înainte de a o trimite.",
        "Nu da clic pe hyperlinkuri integrate în emailuri.",
        "Rulează cod JavaScript pentru a preveni atacurile."
      ],
      "correctAns": "Rulează cod JavaScript pentru a preveni atacurile.",
      "points": 20
    }
  ]
}




 
]
  },
   {
    id:5,
    title:"Securitatea mobilă",
    description:"Acest curs oferă o introducere practică în securitatea mobilă.",
    banner_image:"/cap5.jpg",
    achievementBadge: "Securitate mobilă",
    summary:` rezumat curs 5 `,
    chapters:[{
      title:"Atacuri asupra dispozitivelor mobile și rețelelor wireless",
      subsections:[
      {
        name:"Introducere",
        content:`**Dispozitivele mobile și rețelele wireless**
         
Sunt peste tot în jurul nostru – de aceea li se spune **„ubiquitous”** (mereu prezente). 
Datorită smartphone-urilor, tabletelor și laptopurilor, nu mai avem nevoie de un computer fix conectat prin cablu pentru a naviga pe internet sau a accesa date.

Rețelele wireless au schimbat modul în care călătorim, muncim și comunicăm:
• În **aeroporturi**, trenuri sau hoteluri, ne putem conecta oricând la internet.
• La **muncă**, folosim internetul wireless în ședințe sau conferințe, ceea ce crește productivitatea.
• Studenții, clienții din cafenele sau fanii din stadioane se așteaptă să aibă Wi-Fi gratuit.

**Statistici:**

• Utilizatorii petrec peste **jumătate** din timpul pe internet folosind un dispozitiv mobil.
• 4 din 5 căutări web încep acum pe mobil.
• A apărut chiar și un cuvânt nou în dicționare: **nomofobie** – frica de a rămâne fără telefonul mobil.

**Dar unde e conectivitate, apar și riscuri:**

• Atacatorii vizează tot mai des dispozitivele mobile și rețelele wireless.
• Semnalul wireless poate fi interceptat, iar datele sensibile (parole, carduri etc.) pot fi furate.

**Este important să înțelegi cum funcționează atacurile, ca să știi cum să te protejezi. Există două mari direcții:**

• Atacuri asupra rețelelor wireless – Wi-Fi și Bluetooth
• Atacuri asupra dispozitivelor mobile care folosesc aceste rețele
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "De ce sunt considerate rețelele wireless și dispozitivele mobile „ubiquitous”?",
        back: "Pentru că sunt mereu prezente în viața noastră, permițând acces la internet oriunde, fără cabluri și fără un computer fix."
      }
    ]
  }],
        qa:[ {
    question: "Ce riscuri implică utilizarea rețelelor wireless și a dispozitivelor mobile?",
    answer: "Semnalul wireless poate fi interceptat, iar atacatorii pot fura date sensibile sau compromite dispozitivele mobile."
  }]
      },
      {
        name:"Ce este Wi-Fi-ul?",
        content:`**Wi-Fi-ul este**
       
O tehnologie care oferă conexiune rapidă la internet prin unde radio. 
Este cunoscut și ca WLAN (Wireless Local Area Network). Se folosește pe o rază de aproximativ 140 metri și oferă viteze de până la 7 Gbps, în funcție de standard.

**Spre deosebire de rețelele mobile (3G, 4G, LTE), Wi-Fi-ul:**

• Este instalat și gestionat de utilizatori (acasă, la birou etc.)
• Este mai rapid, dar cu acoperire mai mică

**Standardele Wi-Fi sunt stabilite de IEEE (Institutul Inginerilor Electrotehniști și Electroniști).**

**Exemple:**
• 802.11n – Viteză: până la 600 Mbps
• 802.11ac – Viteză: până la 7.2 Gbps

**Echipamente pentru o rețea Wi-Fi**

• Dispozitivul tău (laptop, tabletă, telefon) are nevoie de:
   - Placă de rețea wireless (internă)
   - Software care detectează automat rețelele disponibile

• Routerul wireless (sau WLAN gateway):
    - Este poarta de intrare în rețea
    - Trimite și primește semnal către/de la dispozitive
    - Se conectează la internet printr-un modem

• Rețea de acasă:
    - Laptopul sau tableta se conectează la router prin semnal radio
    - Toate dispozitivele (cu fir sau fără fir) împart aceeași conexiune la internet

**Rețele Wi-Fi în companii sau școli**

În loc de un singur router, se folosesc:
• Access Point-uri (AP) – puncte de acces multiple care creează „celule” de acoperire
• Când utilizatorul se deplasează, semnalul este preluat de cel mai apropiat AP (se face un handoff automat)
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care este diferența dintre Wi-Fi și rețelele mobile (3G, 4G, LTE)?",
        back: "Wi-Fi-ul este instalat de utilizatori, are acoperire mai mică, dar oferă viteză mai mare decât rețelele mobile."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce rol au Access Point-urile (AP) în rețelele Wi-Fi mari?",
        back: "Extind acoperirea semnalului și permit trecerea automată a utilizatorului între zone (handoff)."
      }
    ]
  }],
        qa:[ {
    question: "Ce este un router wireless și ce funcții îndeplinește?",
    answer: "Este poarta de acces la rețea, conectează dispozitivele între ele și cu internetul, printr-un modem."
  },
  {
    question: "Care sunt două standarde Wi-Fi și vitezele lor maxime?",
    answer: "802.11n (până la 600 Mbps) și 802.11ac (până la 7.2 Gbps)."
  }]
      },
      {
        name:"Atacuri asupra rețelelor Wi-Fi",
        content:`**Utilizatorii casnici**

Se pot confrunta cu mai multe riscuri dacă rețeaua lor Wi-Fi nu este securizată:
• Citirea transmisiilor wireless
   - Atacatorii pot vedea informații precum parole, nume de utilizator sau date de card transmise prin rețea.

• Vizualizarea sau furtul datelor
   - Dacă ai partajare de fișiere activată, un atacator poate accesa folderele de pe orice dispozitiv conectat la rețea.

• Injectarea de malware
    - Hackerii pot pătrunde în rețea și instala viruși, troieni sau alte programe dăunătoare.

• Descărcarea de conținut ilegal
   - Atacatorii pot folosi rețeaua ta pentru a descărca materiale ilegale. Dacă autoritățile identifică IP-ul tău, tu poți fi tras la răspundere.


**Atac frecvent: War driving**

• Atacatorii caută rețele Wi-Fi nesecurizate conducând sau mergând pe jos, folosind un laptop sau alt dispozitiv portabil pentru a le detecta și exploata.
• Rețele Wi-Fi publice (ex: cafenele, aeroporturi, campusuri)

**Riscuri suplimentare:**

• Aceste rețele sunt rareori securizate și accesibile oricui.
• Un atacator poate crea un dispozitiv numit evil twin (geamăn rău), care imită rețeaua originală. Dispozitivul tău se poate conecta fără să îți dai seama, iar atacatorul poate intercepta datele sau trimite malware.

**Probleme comune:**

• Semnalul Wi-Fi trece de pereți și poate fi interceptat de la distanță.
• Mulți utilizatori nu știu să-și securizeze routerul.
• Unii nici nu sunt conștienți de riscuri.

**Atacuri prin Bluetooth**

Bluetooth permite conectarea rapidă între două dispozitive pe o rază de ~10 metri. Exemple:
• Căști wireless, mouse sau tastatură, camere foto, controlere de jocuri, tensiometre etc.

**Notă:**
• Versiunea actuală: Bluetooth 4.2
• Compatibil înapoi cu versiunile anterioare
• Viteza de transfer e mică: 1 Mbps

**Aplicații neobișnuite:**

• Mingea de baschet care transmite date despre mișcare
• Undița care trimite alertă când mușcă peștele

**Tipuri de atacuri Bluetooth**

1. Bluejacking
 • Trimiterea de mesaje nesolicitate către dispozitive Bluetooth din apropiere. De obicei, sunt doar texte, dar pot fi și imagini sau sunete. Este deranjant, dar nu fură date.

2. Bluesnarfing
 • Atacatorul accesează date fără permisiune de pe telefonul sau laptopul tău: contacte, mesaje, poze, fișiere etc. Este un atac grav, deoarece datele sunt furate.

`,
        flashcards:[ {
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce riscuri apar dacă rețeaua Wi-Fi de acasă nu este securizată?",
        back: "Atacatorii pot intercepta date, fura fișiere, instala malware sau descărca conținut ilegal folosind conexiunea ta."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce este un atac de tip 'evil twin' în rețelele Wi-Fi publice?",
        back: "Este o rețea falsă creată de un atacator care imită o rețea legitimă, interceptând datele utilizatorilor care se conectează."
      }
    ]
  },
  {
    title: "Flashcard 3",
    cards: [
      {
        front: "Care este diferența dintre Bluejacking și Bluesnarfing?",
        back: "Bluejacking trimite mesaje nesolicitate, în timp ce Bluesnarfing fură date personale fără permisiune."
      }
    ]
  }],
        qa:[ {
    question: "Ce este war driving?",
    answer: "Căutarea de rețele Wi-Fi nesecurizate folosind un laptop sau alt dispozitiv, de obicei dintr-o mașină sau pe jos."
  },
  {
    question: "De ce sunt rețelele Wi-Fi publice riscante?",
    answer: "Sunt rareori securizate și pot fi imitate de atacatori care creează rețele false pentru a intercepta date."
  },
  {
    question: "Ce date pot fi furate prin Bluesnarfing?",
    answer: "Contacte, mesaje, poze și fișiere de pe telefon sau laptop."
  }]
      },
      {
        name:"Atacuri asupra dispozitivelor mobile",
        content:`**Atacurile nu vizează doar rețelele wireless**
         
Ci și dispozitivele mobile în sine. Pentru fiecare tip de dispozitiv, există riscuri de securitate asociate.

**Tipuri de dispozitive mobile**

**1. Calculatoare portabile (Portable Computers)**

• Sunt asemănătoare cu desktopurile tradiționale, dar mai mici și alimentate cu baterie.
• Rulează sisteme de operare ca Windows, macOS sau Linux.
• **Exemple:** laptopuri, subnotebook-uri (ultrabook, MacBook Air).

**Risc:** Fiind similare cu desktopurile, sunt vulnerabile la aceleași tipuri de atacuri (viruși, troieni, furt de date) și pot fi ușor furate sau pierdute.

**2. Calculatoare web-based**

• **Exemple:** Chromebook-uri.
• Rulează o versiune limitată de Linux și folosesc aplicații web.
• Nu stochează fișiere local, ci în cloud.
• Nu se pot instala aplicații tradiționale.

**Risc:** Necesită conexiune constantă la internet și depind de securitatea aplicațiilor web folosite.

**3. Tablete**

• Mai mari decât telefoanele, mai mici decât laptopurile.
• Se bazează pe ecran tactil, fără tastatură fizică.
• Dimensiuni tipice: 5–10 inch (12.7–25.4 cm).
• Greutate: sub 1.5 pounds (0.68 kg).
• Sisteme de operare populare: iOS, Android, Windows Mobile.

**Risc:** De obicei mai ușor de folosit, dar cu funcționalitate limitată și protecție slabă împotriva aplicațiilor rău intenționate.

**4. Smartphone-uri**

• Asemănătoare cu telefoanele clasice, dar cu sistem de operare complet.
• Pot rula aplicații pentru muncă, social media, muzică etc.
• Sunt practic mini-computere.
• 2 din 3 telefoane vândute azi sunt smartphone-uri.

**Risc:** Prin conectivitate mare și aplicații multiple, sunt ținte frecvente pentru atacuri prin aplicații, mesaje, rețele sau vulnerabilități hardware.

**5. Tehnologie purtabilă (Wearable Technology)**

• Dispozitive care se poartă pe corp, nu se țin în mână.
• **Exemple:** brățări de fitness, smartwatch-uri, dispozitive cu comandă vocală.

a. **Fitness Tracker**
  - Măsoară pași, distanță, ritm cardiac, somn, locație, alerte SMS/email.

b. **Smartwatch**
  - Afișează notificări fără a scoate telefonul.
  - Poate controla alte dispozitive (ex: automatizări în casă).

c. **Wearable computer**
  - Dispozitive cu afișaj montat pe cap (ex: Google Glass).
  - Pot răspunde la comenzi vocale și executa acțiuni precum fotografierea sau căutarea pe internet.

**Risc:** Deși utile și discrete, aceste dispozitive pot colecta date sensibile constant și pot fi mai greu de securizat din cauza dimensiunii și conectivității.
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care sunt principalele riscuri pentru laptopuri și Chromebook-uri?",
        back: "Laptopurile pot fi infectate cu malware sau furate, iar Chromebook-urile depind de securitatea aplicațiilor web și de conexiunea constantă la internet."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce riscuri aduce tehnologia purtabilă (wearables)?",
        back: "Poate colecta constant date sensibile și este dificil de securizat din cauza dimensiunii și conectivității ridicate."
      }
    ]
  }],
        qa:[ {
    question: "De ce sunt smartphone-urile ținte frecvente pentru atacuri?",
    answer: "Pentru că sunt conectate constant la internet, rulează aplicații diverse și au multiple puncte vulnerabile (mesaje, rețele, hardware)."
  },
  {
    question: "Ce caracteristică comună le face vulnerabile pe toate dispozitivele mobile?",
    answer: "Portabilitatea și conectivitatea continuă le expun la pierdere, furt sau atacuri cibernetice prin rețea sau aplicații."
  }]
      },
      {
        name:"Riscuri asociate dispozitivelor mobile",
        content:`**Utilizarea dispozitivelor mobile**
        
Vine cu mai multe riscuri de securitate:

**1. Instalarea aplicațiilor nesigure**

• Dispozitivele mobile permit instalarea rapidă de aplicații din surse variate, inclusiv de la dezvoltatori necunoscuți.
• Unele aplicații gratuite pot conține cod malițios, deoarece nu sunt verificate pentru securitate.

**Apple iOS**

• Sistem închis, aplicațiile trebuie aprobate de Apple înainte de a fi publicate.
• Aplicațiile sunt distribuite prin App Store, parte a ecosistemului Apple.
• Protecție mai mare, dar unele aplicații trimit totuși date către rețele externe.

**Google Android**

• Sistem deschis, oricine poate crea și modifica aplicații.
• Aplicațiile pot fi descărcate din Google Play (care nu verifică la fel de strict ca Apple) sau din surse externe (numit sideloading).
• Mai multe aplicații Android sunt riscante:
   - 44% imită aplicații legitime și păcălesc utilizatorii să plătească servicii scumpe.
   - 24% fură date.
   - 17% încarcă reclame (adware).

**2. Securitate fizică limitată**

• Portabilitatea este și o vulnerabilitate.
• Dispozitivele mobile pot fi ușor pierdute sau furate în locuri publice (școli, cafenele etc.).
• Informațiile sensibile pot fi accesate dacă nu sunt protejate corespunzător.
• Pericol: persoane străine pot urmări ecranul sau parola introdusă.

**3. Conectarea la rețele publice**

• Rețelele Wi-Fi publice sunt nesigure.
• Atacatorii pot intercepta datele transmise și pot citi informații confidențiale dacă nu se folosește criptare.

**4. Urmărirea locației (Location Tracking)**

• Dispozitivele mobile folosesc GPS și servicii de localizare pentru navigare, aplicații sociale, vreme etc.
• Aplicațiile pot arăta locația unui prieten sau pot oferi cupoane în apropierea unui magazin.
• Riscuri:
   - Atacatorii pot identifica locația exactă a utilizatorului și îl pot urmări.
   - Se pot crea liste cu locurile frecventate pentru a planifica atacuri fizice sau furturi.
    
**5. Accesarea conținutului nesigur**

• Dispozitivele mobile pot scana coduri QR care pot conține:
   - **Linkuri** către site-uri periculoase
   - **Coduri** malițioase care instalează programe dăunătoare

**Exemplu:** Un atacator creează o reclamă cu un link aparent legitim (ex: bancă), dar codul QR direcționează către un site fals sau cu malware.

**Statistici relevante:**

• 3 din 5 utilizatori între 18–34 ani accesează lunar conturi bancare sau financiare de pe telefon.
• Peste jumătate dintre adulții din SUA folosesc banking mobil.
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce diferențe de securitate există între Apple iOS și Google Android?",
        back: "iOS este un sistem închis, cu aplicații aprobate de Apple; Android permite sideloading și are mai multe aplicații riscante din surse externe."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce riscuri implică funcția de urmărire a locației pe dispozitive mobile?",
        back: "Atacatorii pot identifica locația exactă, crea profiluri de mișcare și planifica atacuri fizice sau furturi."
      }
    ]
  },
  {
    title: "Flashcard 3",
    cards: [
      {
        front: "Cum pot codurile QR fi folosite în atacuri cibernetice?",
        back: "Pot conține linkuri către site-uri false sau malware care se instalează automat pe dispozitiv."
      }
    ]
  }],
        qa:[ {
    question: "De ce este periculoasă instalarea de aplicații din surse externe pe Android?",
    answer: "Pentru că pot conține cod malițios, fura date sau impune plăți ascunse."
  },
  {
    question: "Cum poate fi compromisă securitatea fizică a unui telefon?",
    answer: "Prin pierdere, furt sau urmărirea activă a ecranului/parolei în locuri publice."
  },
  {
    question: "Ce risc apare la conectarea la rețele Wi-Fi publice?",
    answer: "Atacatorii pot intercepta datele necriptate și fura informații confidențiale."
  }]
      }
    ]
    },
    {
      title:"Apărarea împotriva atacurilor mobile",
      subsections:[
        {
        name:"Introducere",
        content:`**Există două categorii principale de apărare:**

• Securizarea rețelelor wireless
• Protecția dispozitivelor mobile
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care sunt cele două categorii principale de apărare în mediul mobil?",
        back: "Securizarea rețelelor wireless și protecția dispozitivelor mobile."
      }
    ]
  }],
        qa:[ {
    question: "Ce direcții esențiale trebuie urmate pentru a te proteja în mediul mobil?",
    answer: "Securizarea rețelelor wireless și protecția dispozitivelor mobile."
  }]
      },
      {
        name:"Securizare",
        content:`**Securizarea rețelei wireless**
        
**1. Securizarea routerului Wi-Fi de acasă**

• Schimbă parola implicită de configurare cu una puternică.
• Adresa IP a routerului (ex: 192.168.1.1) permite accesul la setări printr-un browser.
• Dezactivează opțiunea de „remote management” dacă nu este necesară.

**2. Activează WPA2 Personal**

• WPA2 criptează datele și previne accesul neautorizat.
• Folosește o parolă de rețea (PSK) puternică (8–63 caractere).
• Odată setată, dispozitivele vor memora parola și nu o vor mai cere.

WPS (Wi-Fi Protected Setup) e o metodă alternativă de conectare:
• Metoda cu PIN (mai puțin sigură, recomandat să fie dezactivată)
• Metoda cu buton (poate fi folosită temporar pentru adăugarea unui dispozitiv nou)

**3. Alte setări de securitate**

• Schimbă numele rețelei (SSID) pentru a nu dezvălui informații (ex: NU „SULLIVAN_HOUSE”).
• Activează rețea pentru oaspeți (guest access), izolată de rețeaua principală.

**Utilizarea în siguranță a rețelelor Wi-Fi publice**

Rețelele din cafenele, biblioteci, aeroporturi pot fi riscante. Urmează aceste bune practici:

• Watch for an evil twin
  - Atacatorul poate crea o rețea falsă cu un nume similar (ex: „Free Airport Wireless”).
  - Te conectezi din greșeală, iar atacatorul poate injecta malware sau fura datele.
     
• Evită activitățile sensibile
  - Nu accesa conturi bancare sau nu trimite date personale pe Wi-Fi public.

• Folosește un VPN
  - Criptează datele transmise și protejează conexiunea.
  - VPN-ul creează un „tunel” securizat chiar și în rețelele nesigure.

**Configurarea în siguranță a Bluetooth-ului**

• Dezactivează Bluetooth când nu este utilizat.
• Evită activarea în locuri publice cu persoane necunoscute.
• Setează dispozitivul ca nedetectabil (undiscoverable) pentru a preveni atacuri precum bluesnarfing.
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce măsuri trebuie luate pentru a securiza routerul Wi-Fi de acasă?",
        back: "Schimbarea parolei implicite, activarea WPA2, dezactivarea remote management, crearea unei rețele pentru oaspeți și schimbarea SSID-ului."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Cum te poți proteja când folosești o rețea Wi-Fi publică?",
        back: "Evită activitățile sensibile, ferește-te de rețele false (evil twin) și folosește un VPN pentru criptarea conexiunii."
      }
    ]
  }],
        qa:[{
    question: "Ce setare Bluetooth ajută la prevenirea atacurilor precum bluesnarfing?",
    answer: "Setarea dispozitivului ca nedetectabil (undiscoverable) și dezactivarea Bluetooth-ului când nu este folosit."
  },
  {
    question: "Ce este WPA2 și de ce trebuie activat pe router?",
    answer: "WPA2 este un protocol de criptare care protejează datele transmise în rețea și previne accesul neautorizat."
  }]
      },
     {
        name:"Securitatea dispozitivului mobil",
        content:`**Securizarea unui dispozitiv mobil presupune:**

• Configurarea inițială corectă
• Urmarea bunelor practici
• Gestiunea în caz de pierdere sau furt

**Configurarea dispozitivului**

**1. Dezactivarea funcțiilor nefolosite**

• Multe funcții pot fi vectori de atac.
• Dezactivează Bluetooth dacă nu este folosit pentru a preveni bluejacking și bluesnarfing.

**2. Activarea ecranului de blocare**

• Blochează automat ecranul după 30 sec – 30 min de inactivitate.
• Metode: PIN, parolă, model grafic, amprentă sau recunoaștere facială.

Nu confunda **„lock screen”** cu **„sleep mode”** (hibernare).

**Protecții în caz de încercări greșite**

• Prelungirea timpului de blocare – dispozitivul rămâne blocat tot mai mult la fiecare cod greșit.
• Resetare la setările din fabrică – după un număr limită de încercări, toate datele pot fi șterse automat.

Cea mai sigură metodă: parolă alfanumerică lungă.
Cea mai slabă metodă: PIN scurt de 4 cifre.
  • 1234 este cel mai folosit (10.71%)
  • 26.83% dintre coduri pot fi ghicite din primele 20 cele mai frecvente.

**Bune practici de securitate**

• Nu face jailbreak/root (dezactivează protecțiile sistemului).
• Nu instala aplicații din surse nesigure.
• Șterge datele înainte de vânzare/donație.
• Fă backup regulat.
• Nu suna la numere din mesaje nesolicitate.
• Fii informat cu privire la amenințările actuale.

**Pierdere sau furt de dispozitiv**

Pentru a reduce riscurile:
• Ține telefonul ascuns în zone aglomerate.
• Folosește ambele mâini pentru a-l ține.
• Evită folosirea lângă scări rulante sau uși de metrou.
• Cordoanele colorate atrag atenția – schimbă-le.
• Dacă ești jefuit, nu opune rezistență. Notează detalii și anunță autoritățile.

**Funcții utile pentru dispozitive pierdute**

Dacă dispozitivul nu poate fi recuperat, activează ștergerea de la distanță (remote wipe) pentru a șterge complet datele și a preveni accesul neautorizat.

Tabelul de mai jos prezintă funcții utile în cazul pierderii unui dispozitiv.

`,
        flashcards:[ {
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce măsuri ajută la protejarea unui dispozitiv mobil împotriva furtului sau pierderii?",
        back: "Activarea ecranului de blocare, funcții de localizare și alarmă, blocare de la distanță, ștergere de la distanță și evitarea expunerii în public."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Care sunt bune practici de securitate pentru utilizarea zilnică a dispozitivelor mobile?",
        back: "Nu face jailbreak/root, instalează aplicații doar din surse sigure, șterge datele înainte de vânzare, fă backup regulat și rămâi informat."
      }
    ]
  }],
        qa:[ {
    question: "Ce metodă de blocare este considerată cea mai sigură?",
    answer: "Parola alfanumerică lungă."
  },
  {
    question: "Ce poți face dacă ți-ai pierdut telefonul?",
    answer: "Activează localizarea, blochează-l de la distanță, trimite un mesaj pe ecran, pornește o alarmă sau activează ștergerea completă a datelor (remote wipe)."
  }]
      }
    ]
    },
  ],
       quiz:[
  {
  "title": "Quiz 1",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Numele tehnic pentru o rețea Wi-Fi este:",
      "options": [
        "rețea wireless de arie personală (WPAN)",
        "rețea wireless de arie locală (WLAN)",
        "Bluetooth",
        "rețea wireless ultraband (WU)"
      ],
      "correctAns": "rețea wireless de arie locală (WLAN)",
      "points": 20
    },
    {
      "question": "Tabletele sunt proiectate pentru:",
      "options": [
        "capacități de procesare",
        "ușurință în utilizare",
        "viteză de conectare wireless",
        "upgrade-uri hardware"
      ],
      "correctAns": "ușurință în utilizare",
      "points": 20
    },
    {
      "question": "Care dintre următoarele este fals despre un router wireless?",
      "options": [
        "Trimite și primește semnale wireless între toate dispozitivele wireless.",
        "Este de obicei găsit într-o companie mare cu sute de utilizatori.",
        "Este de obicei conectat la modemul utilizatorului.",
        "Combină mai multe tehnologii de rețea."
      ],
      "correctAns": "Este de obicei găsit într-o companie mare cu sute de utilizatori.",
      "points": 20
    },
    {
      "question": "Când un utilizator se deplasează dintr-o zonă de acoperire într-alta într-o rețea Wi-Fi, acest lucru se numește:",
      "options": [
        "migrating",
        "traveling",
        "roaming",
        "handshaking"
      ],
      "correctAns": "roaming",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este un risc în cazul folosirii unei rețele Wi-Fi neprotejate acasă?",
      "options": [
        "Un atacator poate fura date sensibile dintr-un calculator conectat la rețea.",
        "Se poate injecta malware în calculatoarele conectate.",
        "Un atacator poate prelua controlul tastaturii utilizatorului prin rețea.",
        "Informația transmisă prin rețea poate fi captată și citită."
      ],
      "correctAns": "Un atacator poate prelua controlul tastaturii utilizatorului prin rețea.",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 2",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Care este un motiv pentru care dispozitivele Android sunt considerate mai nesigure decât cele iOS?",
      "options": [
        "Toate aplicațiile Android sunt gratuite.",
        "iOS este disponibil de mai mult timp și are mai puține vulnerabilități.",
        "Aplicațiile Android pot fi instalate din surse externe (sideloaded).",
        "Aplicațiile Apple sunt scrise într-un limbaj binar mai sigur."
      ],
      "correctAns": "Aplicațiile Android pot fi instalate din surse externe (sideloaded).",
      "points": 20
    },
    {
      "question": "__________ este un atac care trimite mesaje nesolicitate către dispozitive Bluetooth.",
      "options": [
        "Bluestealing",
        "Bluejacking",
        "Bluesending",
        "Bluesnarfing"
      ],
      "correctAns": "Bluejacking",
      "points": 20
    },
    {
      "question": "Care dintre următoarele dispozitive nu are un sistem de operare ce permite rularea aplicațiilor terțe?",
      "options": [
        "tabletă",
        "telefon cu funcții de bază (feature phone)",
        "smartphone",
        "laptop"
      ],
      "correctAns": "telefon cu funcții de bază (feature phone)",
      "points": 20
    },
    {
      "question": "Ce împiedică un dispozitiv mobil să fie folosit până când utilizatorul introduce parola corectă?",
      "options": [
        "identificator de glisare (SW-ID)",
        "tastatură",
        "touchpad",
        "ecran de blocare"
      ],
      "correctAns": "ecran de blocare",
      "points": 20
    },
    {
      "question": "Alice a introdus de mai multe ori greșit parola pe telefon și acum este nevoită să introducă o frază specială. Asta înseamnă că dispozitivul ei este configurat să:",
      "options": [
        "folosească coduri PIN ca parolă",
        "reseteze dispozitivul la setările din fabrică",
        "extindă perioada de blocare",
        "dubleze timpul de așteptare înainte de o nouă încercare"
      ],
      "correctAns": "extindă perioada de blocare",
      "points": 20
    }
  ]
},

{
  "title": "Quiz 3",
  "totalPoints": 100,
  "questions": [
    {
      "question": "__________ este procesul de ocolire a limitărilor și protecțiilor încorporate ale unui dispozitiv mobil.",
      "options": [
        "Cracking",
        "Twisting",
        "Jailbreaking",
        "Slicing"
      ],
      "correctAns": "Jailbreaking",
      "points": 20
    },
    {
      "question": "De ce nu este recomandat să instalezi aplicații dintr-un magazin neoficial?",
      "options": [
        "Aplicațiile sunt mereu inferioare în magazinele neoficiale.",
        "Descărcarea aplicației durează mai mult decât dintr-un magazin aprobat.",
        "Se privează dezvoltatorii de venituri.",
        "Aplicațiile nu sunt verificate și pot conține malware."
      ],
      "correctAns": "Aplicațiile nu sunt verificate și pot conține malware.",
      "points": 20
    },
    {
      "question": "Care este primul pas în securizarea unui router wireless Wi-Fi?",
      "options": [
        "crearea unei parole pentru protejarea setărilor interne",
        "dezactivarea tuturor conexiunilor wireless",
        "activarea pachetelor cu preambul scurt",
        "monitorizarea semnalului Wi-Fi cu un telemonitor la distanță"
      ],
      "correctAns": "crearea unei parole pentru protejarea setărilor interne",
      "points": 20
    },
    {
      "question": "Ce oferă cel mai bun nivel de securitate wireless pentru o rețea Wi-Fi de acasă?",
      "options": [
        "plasarea routerului într-o cutie",
        "folosirea unui identificator bun",
        "activarea Wi-Fi Protected Setup (WPS)",
        "activarea Wi-Fi Protected Access 2 (WPA2) Personal"
      ],
      "correctAns": "activarea Wi-Fi Protected Access 2 (WPA2) Personal",
      "points": 20
    },
    {
      "question": "Scopul principal al unui __________ este să capteze transmisiile de la utilizatorii legitimi.",
      "options": [
        "punct de acces fals (rogue access point)",
        "Wireless Equivalent Privacy (WEP)",
        "evil twin",
        "Bluetooth grabber"
      ],
      "correctAns": "evil twin",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 4",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Care dintre următoarele poate adăuga un nivel suplimentar de securitate unei rețele Wi-Fi?",
      "options": [
        "dezactivarea difuzării SSID-ului",
        "restricționarea utilizatorilor după adresa MAC",
        "limitarea numărului de utilizatori",
        "activarea accesului pentru oaspeți"
      ],
      "correctAns": "restricționarea utilizatorilor după adresa MAC",
      "points": 20
    },
    {
      "question": "Fiecare dintre următoarele este o practică de securitate recomandată când folosești o rețea Wi-Fi publică, cu excepția:",
      "options": [
        "atenție la rețele de tip 'evil twin'",
        "utilizarea rețelei mai puțin de o oră pe zi",
        "folosirea unei rețele private virtuale (VPN)",
        "evitarea introducerii de informații confidențiale"
      ],
      "correctAns": "utilizarea rețelei mai puțin de o oră pe zi",
      "points": 20
    },
    {
      "question": "Care dintre următoarele nu este o măsură pentru a reduce riscul furtului sau pierderii unui dispozitiv mobil?",
      "options": [
        "înregistrarea adresei MAC înainte de utilizare",
        "ținerea dispozitivului ascuns în zone riscante",
        "folosirea ambelor mâini pentru a ține dispozitivul",
        "evitarea utilizării dispozitivului pe scări rulante sau lângă ușile trenului"
      ],
      "correctAns": "înregistrarea adresei MAC înainte de utilizare",
      "points": 20
    },
    {
      "question": "__________ protejează un dispozitiv mobil atunci când nu a fost utilizat o anumită perioadă de timp.",
      "options": [
        "Blocare automată (Auto-lock)",
        "Reîmprospătare ecran (Screen refresh)",
        "Manager tie down (MTD)",
        "Securitate la distanță (Remote security)"
      ],
      "correctAns": "Blocare automată (Auto-lock)",
      "points": 20
    },
    {
      "question": "Care dintre următoarele nu este o bună practică în utilizarea unui dispozitiv mobil?",
      "options": [
        "Realizarea de backup regulat pentru datele din dispozitiv",
        "A nu face jailbreak dispozitivului",
        "Așteptarea 24 de ore înainte de raportarea pierderii dispozitivului",
        "Conștientizarea amenințărilor curente ce vizează dispozitivele mobile"
      ],
      "correctAns": "Așteptarea 24 de ore înainte de raportarea pierderii dispozitivului",
      "points": 20
    }
  ]
}


]
  },
   {
    id:6,
    title:"Confidențialitatea",
    description:"Acest curs oferă o introducere practică în domeniul confidențialității.",
    banner_image:"/cap6.png",
    achievementBadge: "Confidențialitate",
    summary:` rezumat curs 6 `,
    chapters:[{
      title:"Confidențialitatea în Era Digitală",
      subsections:[
      {
        name:"Ce este Confidențialitatea?",
        content:`**Confidențialitatea înseamnă**
 
Dreptul de a fi lăsat în pace și de a controla ce informații despre tine sunt accesibile publicului. În trecut, oamenii puteau alege cât de mult să dezvăluie despre viața lor.
Azi, tehnologia a făcut ca datele să fie colectate automat — de la site-urile vizitate, apeluri telefonice, e-mailuri, până la locația ta sau ce cumperi online.
        
**Cum ne afectează colectarea datelor?**

• Datele personale influențează **deciziile** companiilor: De exemplu, un vecin poate plăti mai puțin la asigurare auto pentru că algoritmii arată că nu conduce la ore de risc. Tu plătești mai mult doar pentru că accesezi internetul într-un mod „considerat riscant”.
• Comportamentele tale online pot fi **interpretate** greșit: Chiar dacă duci o viață sănătoasă, obiceiurile tale online pot duce la creșteri ale primelor de asigurare.
• Datele personale pot fi folosite pentru **manipulare:** De exemplu, Facebook poate influența comportamentul de vot al utilizatorilor doar modificând volumul de „știri dure” afișate în feed.

`,
        flashcards:[ {
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce înseamnă confidențialitatea în era digitală?",
        back: "Dreptul de a controla ce informații personale sunt colectate și accesate, într-un context în care tehnologia adună date automat despre activitățile tale."
      }
    ]
  }],
        qa:[ {
    question: "Cum pot afecta datele personale deciziile luate despre tine?",
    answer: "Pot influența prețuri la asigurări, interpretări greșite ale comportamentului și manipularea prin conținut personalizat (ex: în feed-ul de știri)."
  }]
      },
      {
        name:"Riscurile asociate datelor private",
        content:`**Inconveniențe și furt de identitate**

• Datele tale pot fi folosite în campanii de marketing deranjante.
• Hoții de identitate pot crea conturi bancare sau cumpăra pe numele tău.
 
**Asocieri cu grupuri**

• Brokerii de date te încadrează în grupuri (ex: „familii educate”, „părinți singuri”) și apoi aplică presupuneri despre tine care nu sunt neapărat corecte.

**Inferențe statistice**

• Din doar 4 tranzacții pe card se pot deduce 90% din identitatea ta.
• Like-urile de pe Facebook pot dezvălui orientarea sexuală, consumul de droguri sau convingerile politice.

**Ce spun utilizatorii despre confidențialitate?**

• 91% cred că au pierdut controlul asupra datelor personale.
• 88% spun că e greu să corectezi informații greșite de pe internet.
• 80% sunt îngrijorați de accesul firmelor la datele lor.
• 70% se tem că guvernul accesează datele lor fără consimțământ.
• 62% își caută numele online.
• 47% cred că alții îi caută online înainte să-i cunoască.
• 11% au avut experiențe neplăcute din cauza informațiilor false postate online.

Tabelul de mai jos prezintă problemele legate de utilizarea **datelor personale.**

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce riscuri implică furtul de identitate și inferențele statistice?",
        back: "Infractorii pot crea conturi bancare pe numele tău, iar din doar câteva tranzacții se pot deduce informații personale sensibile."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce probleme apar din colectarea netransparentă a datelor personale?",
        back: "Datele pot fi inexacte, consimțământul este ambiguu, iar decizii importante precum angajarea sau creditul pot fi influențate greșit."
      }
    ]
  }],
        qa:[ {
    question: "Ce procent dintre utilizatori cred că și-au pierdut controlul asupra datelor personale?",
    answer: "91%."
  },
  {
    question: "De ce sunt periculoase clasificările făcute de brokerii de date?",
    answer: "Pentru că te pot încadra greșit în grupuri și pot influența decizii pe baza unor presupuneri incorecte."
  }]
      },
    ]
    },
    {
      title:"Protejarea Confidențialității",
      subsections:[
        {
        name:"Introducere",
        content:`**Este posibil să ne protejăm complet?**

Deși este aproape imposibil să prevenim complet colectarea datelor personale, putem reduce riscurile prin metode precum:
• Criptografie
• Bune practici de securitate
• Responsabilitatea organizațiilor care colectează date
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Putem preveni complet colectarea datelor personale?",
        back: "Nu complet, dar putem reduce riscurile prin criptografie, bune practici de securitate și responsabilitatea organizațiilor."
      }
    ]
  }],
        qa:[{
    question: "Ce metode ajută la reducerea riscurilor privind confidențialitatea datelor?",
    answer: "Criptografia, aplicarea bunelor practici de securitate și implicarea responsabilă a organizațiilor care colectează date."
  }]
      },
      {
        name:"Ce este Criptografia?",
        content:`**Criptografia înseamnă** 
        
Transformarea informațiilor într-o formă sigură, care nu poate fi citită de persoane neautorizate. Se mai numește și „scriere ascunsă”.

Exemplu istoric: Iulius Cezar schimba fiecare literă a mesajelor sale cu una aflată la 3 poziții mai jos în alfabet. Aceasta este o formă simplă de criptare. Reversul procesului se numește decriptare.

**Diferența dintre criptografie și steganografie**

• Criptografia face ca mesajul să nu poată fi înțeles.
• Steganografia ascunde faptul că există un mesaj. De exemplu, un fișier imagine aparent inofensiv poate conține un mesaj secret ascuns în zone neutilizate ale fișierului.

**Tipuri de date**

• **Cleartext:** Date necriptate, pot fi citite direct.
• **Plaintext:** Informații clare care urmează să fie criptate sau au fost deja decriptate.
• **Ciphertext:** Informații criptate care nu pot fi înțelese fără cheia corectă.

**Cum funcționează criptarea?**

• Textul clar (plaintext) este introdus într-un algoritm criptografic.
• O cheie matematică este folosită pentru a crea ciphertext.
• La decriptare, cheia este folosită pentru a readuce mesajul la forma inițială.

**Exemplu practic: - non-repudiere **

Alice își duce mașina la service și semnează un formular pentru reparații. 
Mai târziu, nu poate nega că a aprobat reparația — formularul semnat servește drept dovadă (non-repudiere).
 
**Cum protejează criptografia datele?**

Criptografia oferă 5 tipuri esențiale de protecție:

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Care este diferența dintre criptografie și steganografie?",
        back: "Criptografia ascunde conținutul mesajului, steganografia ascunde existența mesajului."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce tipuri de protecție oferă criptografia?",
        back: "Confidențialitate, integritate, disponibilitate, autentificare și non-repudiere."
      }
    ]
  }],
        qa:[{
    question: "Ce este ciphertext?",
    answer: "Este informația criptată care nu poate fi înțeleasă fără cheia corectă."
  },
  {
    question: "Cum funcționează criptarea unui mesaj?",
    answer: "Plaintext-ul este transformat în ciphertext printr-un algoritm și o cheie criptografică; cheia este folosită și pentru decriptare."
  }]
      },
    {
        name:"Tipuri de Criptografie",
        content:`**Există trei mari categorii de algoritmi criptografici:**

• Algoritmi de hashing
• Algoritmi criptografici simetrici
• Algoritmi criptografici asimetrici

**Algoritmi de Hashing**

• Ce este hashing-ul?
  **Hashing-ul** creează o „amprentă digitală” unică pentru un set de date. Este un proces ireversibil (nu poate fi „decodificat” înapoi). Scopul său este verificarea conținutului, nu criptarea.

• Caracteristici ale unui hashing sigur:
  - Dimensiune fixă: Indiferent de cât de mare e textul, hash-ul are aceeași lungime.
  - Unicitate: Două texte diferite nu trebuie să aibă același hash (coliziune).
  - Originalitate: Imposibil de reprodus același hash din alt text.
  - Securitate: Nu poți deduce textul original din hash.

• **Utilizare frecventă:** parole, verificarea integrității fișierelor descărcate, validare pe site-uri, carduri bancare vechi.

**Criptografie Simetrică (cu cheie unică)**

• Se folosește aceeași cheie pentru criptare și decriptare.
• **Exemplu:** Alice criptează un fișier cu o cheie, iar Bob îl decriptează cu aceeași cheie.
• Punct slab: Distribuirea în siguranță a cheii este dificilă.
• Se mai numește și criptografie cu cheie privată.
• Securitate puternică, dar vulnerabilă dacă cheia e compromisă.

**Criptografie Asimetrică (cu chei pereche)**

• Se folosesc două chei diferite:
  - Cheie publică: Oricine o poate avea.
  - Cheie privată: Păstrată secretă de destinatar.

• Exemplu:
  - Bob vrea să trimită un mesaj sigur lui Alice → folosește cheia publică a lui Alice pentru a-l cripta.
  - Doar cheia privată a lui Alice îl poate decripta.

• Avantaje:
  - Cheile nu trebuie schimbate fizic.
  - Se pot verifica identitatea și integritatea mesajului.

• Important:
  - Funcționează în ambele sensuri: ce criptezi cu cheia privată, decriptezi cu cea publică (semnătură digitală).


**Semnătura Digitală**

• Oferă dovada electronică că mesajul a fost trimis de cine spune că l-a trimis.
• Beneficii:
  - Verifică expeditorul
  - Previne negarea trimiterii (non-repudiere)
  - Confirmă integritatea mesajului

• Pași simpli pentru o semnătură digitală:
    1. Bob creează un rezumat (digest) al mesajului.
    2. Îl criptează cu cheia sa privată (semnătura).
    3. Trimite mesajul și semnătura către Alice.
    4. Alice verifică semnătura cu cheia publică a lui Bob.

**Ce cheie să folosești și când?**

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce este hashing-ul și la ce se folosește?",
        back: "Hashing-ul creează o amprentă digitală unică pentru un set de date. Este ireversibil și se folosește pentru verificarea integrității, nu pentru criptare."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Care este diferența dintre criptografia simetrică și asimetrică?",
        back: "Criptografia simetrică folosește o singură cheie, în timp ce cea asimetrică folosește o pereche de chei: una publică și una privată."
      }
    ]
  },
  {
    title: "Flashcard 3",
    cards: [
      {
        front: "Ce este o semnătură digitală și ce rol are?",
        back: "Este o dovadă criptografică că un mesaj provine de la expeditorul corect și nu a fost modificat. Se face criptând un rezumat al mesajului cu cheia privată."
      }
    ]
  }],
        qa:[ {
    question: "Cu ce cheie criptezi un mesaj pentru a-l trimite în siguranță?",
    answer: "Cu cheia publică a destinatarului."
  },
  {
    question: "Cum verifici o semnătură digitală?",
    answer: "Folosind cheia publică a expeditorului."
  },
  {
    question: "Care este principala problemă a criptografiei simetrice?",
    answer: "Distribuirea în siguranță a cheii unice între expeditor și destinatar."
  }]
      },
    {
        name:"Criptografia",
        content:`**Cum se aplică criptografia?**

  **Prin software**

• **Fișiere individuale** – criptare manuală, fișier cu fișier.
• **Sistem de fișiere**– criptarea tuturor fișierelor dintr-un folder.
• **Criptare de disc complet** – protejează întreaga unitate (HDD/SSD).

**Prin hardware**

• Se folosește criptare încorporată în dispozitiv (ex: stick USB criptat):
  - Nu funcționează fără parolă.
  - Se criptează automat tot ce se copiază pe el.
  - Se poate dezactiva sau șterge de la distanță dacă e pierdut.

• HDD-uri care se auto-criptează:
  - Verifică automat identitatea dispozitivului.
  - Pot șterge cheile de decriptare dacă accesul e neautorizat.
  - Folosite în guvern, bănci, imprimante de birou, POS-uri.
`,
        flashcards:[ {
    title: "Flashcard 1",
    cards: [
      {
        front: "Care sunt metodele de criptare prin software?",
        back: "Criptare manuală a fișierelor individuale, criptarea folderelor (sistem de fișiere) și criptarea completă a discului (HDD/SSD)."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Cum funcționează criptarea hardware pe un stick USB criptat?",
        back: "Tot ce se copiază pe el se criptează automat, funcționează doar cu parolă și poate fi dezactivat sau șters de la distanță."
      }
    ]
  }],
        qa:[{
    question: "Ce este criptarea completă de disc?",
    answer: "O metodă care protejează întreaga unitate de stocare (HDD/SSD), nu doar fișiere individuale."
  },
  {
    question: "Unde sunt folosite în mod obișnuit HDD-urile care se auto-criptează?",
    answer: "În guvern, bănci, imprimante de birou și sisteme POS."
  }]
      },
    {
        name:"Certificate Digitale",
        content:`**Ce este un certificat digital?**

Un **certificat** **digital** este un document electronic care leagă identitatea unei persoane sau a unui server de o cheie publică, fiind semnat de o autoritate de încredere (ex: o companie certificatoare).

• Verifică dacă cheia publică aparține cu adevărat persoanei menționate.
• Permite destinatarului (ex: Alice) să aibă încredere că mesajul primit de la Bob este autentic.
• Previne atacurile prin care cineva se dă drept proprietarul unei chei publice.

**Certificatele digitale ale serverelor**

Certificatele digitale de server sunt folosite pentru:
• Verificarea identității site-ului web – browserul utilizatorului poate confirma că site-ul este autentic.
• Asigurarea conexiunii criptate – toate datele transmise între browser și server sunt protejate.

**Cum funcționează procesul de schimb de chei (handshake TLS)**

1. **ClientHello** – Browserul trimite informații criptografice către server.

2. **ServerHello** – Serverul răspunde cu propriul certificat digital.

3. **Verificare** + **ClientKeyExchange** – Browserul verifică certificatul, generează un „pre-master secret”, îl criptează cu cheia publică a serverului și îl trimite înapoi.

4. Creare **sesiune** **securizată** – Serverul decriptează secretul și ambii generează „chei de sesiune” pentru criptarea datelor din timpul conexiunii.

Cheile de sesiune sunt chei simetrice (același cod la ambele capete), folosite pentru viteză și eficiență.

**Cum știi dacă un site este securizat?**

• Adresa începe cu https:// (nu http://).
• Apare un simbol cu lacăt în bara browserului.
• La click pe lacăt, vezi informații despre certificatul digital (ex: cine l-a emis și cui).


**Certificatul SSL EV (Extended Validation)**

• Oferă cel mai înalt nivel de încredere.
• Se acordă doar după verificări riguroase asupra firmei.
• Bara de adresă devine verde în browser dacă site-ul este sigur.
• Bara devine roșie dacă site-ul este periculos sau suspect.

`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce este un certificat digital și ce rol are?",
        back: "Este un document electronic care leagă o identitate de o cheie publică și confirmă autenticitatea acesteia printr-o autoritate de încredere."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Cum știi dacă un site este securizat prin certificat digital?",
        back: "Adresa începe cu https://, apare un lacăt în bară, iar la click poți vedea cine a emis certificatul."
      }
    ]
  }],
        qa:[{
    question: "Ce tip de chei sunt folosite pentru criptarea sesiunii după handshake-ul TLS?",
    answer: "Chei simetrice (chei de sesiune) – aceleași la ambele capete."
  },
  {
    question: "Ce este un certificat SSL EV și cum se recunoaște în browser?",
    answer: "Este un certificat cu validare extinsă, afișează bara verde dacă site-ul este sigur și roșie dacă este periculos."
  }]
      },
    {
        name:"Cele Mai Bune Practici de Protejare a Confidențialității",
        content:`**Recomandări pentru utilizatori:**

• Criptează documentele sensibile care conțin date personale (CNP, număr de cont etc.) și salvează cheile într-o aplicație de tip „password manager”.
• Folosește parole puternice pe toate conturile.
• Distruge documentele financiare înainte de a le arunca.
• Nu purta CNP-ul în portofel și nu-l scrie pe documente.
• Nu da informații personale prin telefon sau email.
• Păstrează datele sensibile într-un loc sigur acasă.
• Ai grijă ce postezi pe rețele sociale și cine are acces la informații. Oferă profiluri limitate „prietenilor parțiali”.
• Păstrează doar ultimele 3 luni de extrase bancare; scanează și protejează cu parolă documentele pe care trebuie să le păstrezi.
• Instalează un software antispyware.
• Folosește un blocator de reclame popup.
• Controlează cookie-urile din browser și setează-le să se șteargă automat.
• Folosește modul privat de navigare și șterge istoricul după fiecare sesiune.
• Activează opțiunile de confidențialitate din browser.
• Activează WPA2 Personal pe rețelele Wi-Fi.
• Nu oferi date pe site-uri nesecurizate (fără lacăt și „https://”).
• Evită site-urile care cer prea multe informații inutile (ex: parole de la alte conturi).
`,
        flashcards:[{
    title: "Flashcard 1",
    cards: [
      {
        front: "Ce măsuri pot lua utilizatorii pentru protejarea datelor personale?",
        back: "Criptarea documentelor, parole puternice, distrugerea documentelor fizice, controlul informațiilor postate online și stocarea în siguranță."
      }
    ]
  },
  {
    title: "Flashcard 2",
    cards: [
      {
        front: "Ce setări de confidențialitate sunt recomandate în browser?",
        back: "Ștergerea automată a cookie-urilor, folosirea modului privat, activarea setărilor de confidențialitate și blocarea reclamelor popup."
      }
    ]
  }],
        qa:[ {
    question: "Ce trebuie să faci înainte să arunci documente financiare?",
    answer: "Să le distrugi pentru a preveni furtul de date."
  },
  {
    question: "De ce nu este recomandat să purtăm CNP-ul în portofel?",
    answer: "Pentru a evita expunerea accidentală a datelor personale în cazul pierderii sau furtului portofelului."
  }]
      },
    {
        name:"Responsabilitățile Organizațiilor",
        content:`**Organizațiile care colectează date personale au obligația de a le proteja.**
 
Tabelul de mai jos arată greșeli frecvente și ce măsuri ar fi trebuit luate:

`,
        flashcards:[{
    title: "Flashcard 3",
    cards: [
      {
        front: "Ce măsură trebuie luată dacă datele cardului sunt păstrate prea mult timp?",
        back: "Păstrează datele doar cât este necesar – șterge-le după finalizarea tranzacției."
      }
    ]
  },
  {
    title: "Flashcard 4",
    cards: [
      {
        front: "Cum se gestionează fișierele sensibile pentru a evita erorile?",
        back: "Se restricționează accesul la date – doar angajații care au nevoie le pot accesa."
      }
    ]
  }],
        qa:[ {
    question: "Ce eroare apare dacă se stochează emailuri și parole în clartext?",
    answer: "Datele nu sunt protejate adecvat; trebuie colectate doar informațiile necesare și criptate."
  },
  {
    question: "Ce măsură trebuie luată pentru a evita folosirea greșită a datelor în scopuri educaționale?",
    answer: "Folosirea de date fictive în sesiuni de training."
  }]
      }
    ]
    },
  ],
       quiz:[
      {
  "title": "Quiz 1",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Care dintre următoarele NU este adevărată despre confidențialitate?",
      "options": [
        "Confidențialitatea este dreptul de a fi lăsat în pace în măsura în care dorești.",
        "Astăzi, oricine poate atinge orice nivel de intimitate dorit.",
        "Confidențialitatea este dificilă din cauza volumului mare de date acumulate automat.",
        "Confidențialitatea este libertatea față de atenție, observație sau interferență, în funcție de decizia ta."
      ],
      "correctAns": "Astăzi, oricine poate atinge orice nivel de intimitate dorit.",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este un risc asociat utilizării datelor private?",
      "options": [
        "inconveniente personale și furt de identitate",
        "infectarea dispozitivelor cu malware",
        "asocieri cu grupuri",
        "inferințe statistice"
      ],
      "correctAns": "asocieri cu grupuri",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o problemă ridicată în legătură cu modul în care sunt colectate și utilizate datele private?",
      "options": [
        "Datele sunt colectate și păstrate în secret.",
        "Acuratețea datelor nu poate fi verificată.",
        "Prin lege, toate datele criptate trebuie să conțină un punct de acces ascuns („backdoor”).",
        "Consimțământul informat lipsește sau este greșit înțeles."
      ],
      "correctAns": "Prin lege, toate datele criptate trebuie să conțină un punct de acces ascuns („backdoor”).",
      "points": 20
    },
    {
      "question": "__________ ascunde existența datelor.",
      "options": [
        "Criptografie",
        "Criptare simetrică",
        "Decriptare asimetrică",
        "Steganografie"
      ],
      "correctAns": "Steganografie",
      "points": 20
    },
    {
      "question": "Ce este textul criptat (ciphertext)?",
      "options": [
        "Proceduri bazate pe formule matematice pentru criptare și decriptare.",
        "Valoare matematică introdusă într-un algoritm.",
        "Date criptate.",
        "Cheia publică a unui proces criptografic simetric."
      ],
      "correctAns": "Date criptate.",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 2",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Care dintre următoarele este o operațiune „unidirecțională”, ale cărei rezultate nu pot fi folosite pentru a recupera datele inițiale?",
      "options": [
        "hash",
        "criptografie simetrică",
        "Message Digest Encryption (MDE)",
        "criptografie asimetrică"
      ],
      "correctAns": "hash",
      "points": 20
    },
    {
      "question": "Cum se numesc datele care urmează să fie criptate prin introducerea lor într-un algoritm criptografic?",
      "options": [
        "ciphertext (text criptat)",
        "plaintext (text clar)",
        "cleartext",
        "opentext"
      ],
      "correctAns": "plaintext (text clar)",
      "points": 20
    },
    {
      "question": "Care dintre acestea NU este o formă de protecție de bază oferită de criptografie pentru informații?",
      "options": [
        "pierdere de risc (risk loss)",
        "autenticitate",
        "integritate",
        "confidențialitate"
      ],
      "correctAns": "pierdere de risc (risk loss)",
      "points": 20
    },
    {
      "question": "Care dintre zonele unui fișier NU este folosită de steganografie pentru a ascunde date?",
      "options": [
        "date ce descriu conținutul sau structura datelor reale",
        "structura directoarelor din sistemul de fișiere",
        "câmpurile din antetul fișierului",
        "zonele ce conțin datele efective ale fișierului"
      ],
      "correctAns": "structura directoarelor din sistemul de fișiere",
      "points": 20
    },
    {
      "question": "Dovada că un utilizator a trimis un mesaj e-mail se numește:",
      "options": [
        "repudiere",
        "integritate",
        "nonrepudiere",
        "disponibilitate"
      ],
      "correctAns": "nonrepudiere",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 3",
  "totalPoints": 100,
  "questions": [
    {
      "question": "Un/una __________ nu este decriptat(ă), ci este folosit(ă) doar pentru comparație.",
      "options": [
        "flux (stream)",
        "rezumat (digest)",
        "algoritm",
        "cheie"
      ],
      "correctAns": "rezumat (digest)",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o caracteristică a unui algoritm de hash sigur?",
      "options": [
        "Nu se poate genera un mesaj dintr-un hash predefinit.",
        "Coliziunile ar trebui să fie rare.",
        "Rezultatele funcției de hash nu trebuie să fie reversibile.",
        "Hash-ul ar trebui să aibă mereu o dimensiune variabilă."
      ],
      "correctAns": "Hash-ul ar trebui să aibă mereu o dimensiune variabilă.",
      "points": 20
    },
    {
      "question": "Câte chei se folosesc în criptografia asimetrică?",
      "options": [
        "una",
        "două",
        "trei",
        "patru"
      ],
      "correctAns": "două",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o metodă de criptare software?",
      "options": [
        "criptarea fișierelor individuale",
        "criptarea întregului disc",
        "criptarea folosind sistemul de fișiere",
        "criptarea folosind un cip hardware separat"
      ],
      "correctAns": "criptarea folosind un cip hardware separat",
      "points": 20
    },
    {
      "question": "Dacă Bob vrea să-i trimită un mesaj securizat lui Alice folosind un algoritm criptografic asimetric, ce cheie va folosi pentru criptarea mesajului?",
      "options": [
        "cheia privată a lui Alice",
        "cheia publică a lui Alice",
        "cheia publică a lui Bob",
        "cheia privată a lui Bob"
      ],
      "correctAns": "cheia publică a lui Alice",
      "points": 20
    }
  ]
},
{
  "title": "Quiz 4",
  "totalPoints": 100,
  "questions": [
    {
      "question": "O semnătură digitală poate oferi fiecare dintre următoarele beneficii, CU EXCEPȚIA:",
      "options": [
        "dovedirea integrității mesajului",
        "verificarea destinatarului",
        "verificarea expeditorului",
        "impunerea non-repudierii"
      ],
      "correctAns": "verificarea destinatarului",
      "points": 20
    },
    {
      "question": "Care este cel mai important avantaj al criptării hardware față de criptarea software?",
      "options": [
        "Criptarea software nu poate fi folosită pe calculatoare vechi.",
        "Criptarea hardware este de până la 10 ori mai rapidă decât cea software.",
        "Software-ul care criptează poate fi supus atacurilor.",
        "Criptarea hardware nu oferă avantaje reale."
      ],
      "correctAns": "Criptarea hardware este de până la 10 ori mai rapidă decât cea software.",
      "points": 20
    },
    {
      "question": "Ce apare în browserul web când ești conectat la un site securizat ce folosește un certificat digital?",
      "options": [
        "http://",
        "o cheie franceză (wrench)",
        "un lacăt (padlock)",
        "un mesaj galben de avertizare"
      ],
      "correctAns": "un lacăt (padlock)",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o bună practică privind confidențialitatea datelor personale?",
      "options": [
        "Folosirea modului de navigare privată în browser.",
        "Distrugerea documentelor financiare înainte de a le arunca.",
        "Folosirea unor parole puternice pentru toate conturile.",
        "Purtarea numărului de asigurare socială asupra ta pentru a nu fi furat de acasă."
      ],
      "correctAns": "Purtarea numărului de asigurare socială asupra ta pentru a nu fi furat de acasă.",
      "points": 20
    },
    {
      "question": "Care dintre următoarele NU este o responsabilitate a unei organizații privind datele private ale utilizatorilor?",
      "options": [
        "Colectarea doar a informațiilor personale necesare.",
        "Folosirea metodelor testate și acceptate din industrie.",
        "Păstrarea informațiilor personale pentru maximum 365 de zile.",
        "Utilizarea informațiilor personale chiar și când nu este necesar."
      ],
      "correctAns": "Utilizarea informațiilor personale chiar și când nu este necesar.",
      "points": 20
    }
  ]
}




]
  }

];
