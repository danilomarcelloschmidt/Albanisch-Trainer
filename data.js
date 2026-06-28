const TOPICS = [
  {
    "id": 1,
    "title": "Präsens regelmäßiger Verben auf -oj",
    "focus": "Formen von unë, ti, ai/ajo, ne, ju, ata/ato",
    "examples": "punoj, mësoj, kuptoj, shpjegoj"
  },
  {
    "id": 2,
    "title": "Präsens wichtiger unregelmäßiger Verben",
    "focus": "jam, kam, vij, shkoj, ha, pi, di, dua",
    "examples": "Unë jam… / Ne shkojmë…"
  },
  {
    "id": 3,
    "title": "Einfacher Hauptsatz",
    "focus": "Aussage, Frage, Verneinung",
    "examples": "Unë nuk shkoj sot."
  },
  {
    "id": 4,
    "title": "Fragewörter",
    "focus": "kush, ku, kur, si, çfarë, sa, pse",
    "examples": "Ku është dyqani?"
  },
  {
    "id": 5,
    "title": "Akkusativ Singular bestimmter Nomen",
    "focus": "Objektformen im Singular",
    "examples": "familja → familjen, gruaja → gruan"
  },
  {
    "id": 6,
    "title": "Akkusativ Plural bestimmter Nomen",
    "focus": "Objektformen im Plural",
    "examples": "vajzat, djemtë, fëmijët"
  },
  {
    "id": 7,
    "title": "Nominativ vs. Akkusativ",
    "focus": "Subjektform vs. Objektform",
    "examples": "Gruaja punon. / Shoh gruan."
  },
  {
    "id": 8,
    "title": "Präpositionen mit Akkusativ",
    "focus": "besonders me, në, për, te",
    "examples": "me gruan, në qytet"
  },
  {
    "id": 9,
    "title": "Possessivpronomen Singular: mein/dein",
    "focus": "maskulin + feminin, Nom./Akk./Gen.",
    "examples": "burri im, gruaja ime, gruan time, gruas sime"
  },
  {
    "id": 10,
    "title": "Possessivpronomen Singular: sein/ihr",
    "focus": "i tij/e tij, i saj/e saj",
    "examples": "babai i saj, gruaja e tij"
  },
  {
    "id": 11,
    "title": "Possessivpronomen Singular: unser/euer/ihr",
    "focus": "ynë/jonë, juaj, tyre",
    "examples": "familja jonë, shtëpia juaj"
  },
  {
    "id": 12,
    "title": "Possessivpronomen Plural: mein/dein",
    "focus": "Pluralformen getrennt üben",
    "examples": "djemtë e mi, vajzat e mia"
  },
  {
    "id": 13,
    "title": "Possessivpronomen Plural: sein/ihr/unser/euer/ihr",
    "focus": "Pluralbesitzformen",
    "examples": "djemtë e saj, vajzat tona, prindërit e tyre"
  },
  {
    "id": 14,
    "title": "Possessivpronomen in Genitiv/Dativ/Ablativ",
    "focus": "Besitz + Fall kombinieren",
    "examples": "familja e gruas sime, prej familjes sime"
  },
  {
    "id": 15,
    "title": "Genitiv Singular maskulin",
    "focus": "Besitz/Zuordnung mit maskulinen Nomen",
    "examples": "libri i mikut, babai i djalit"
  },
  {
    "id": 16,
    "title": "Genitiv Singular feminin",
    "focus": "Besitz/Zuordnung mit femininen Nomen",
    "examples": "shtëpia e nënës, familja e gruas"
  },
  {
    "id": 17,
    "title": "Genitiv Plural",
    "focus": "Besitz/Zuordnung im Plural",
    "examples": "shtëpia e prindërve, çantat e fëmijëve"
  },
  {
    "id": 18,
    "title": "Genitiv mit Possessivformen",
    "focus": "Genitiv + mein/dein/sein/ihr",
    "examples": "babai i gruas sime"
  },
  {
    "id": 19,
    "title": "Dativ Singular",
    "focus": "Wem? mit Singularnomen",
    "examples": "i jap mikut, i ndihmoj gruas"
  },
  {
    "id": 20,
    "title": "Dativ Plural",
    "focus": "Wem? mit Pluralnomen",
    "examples": "u flas prindërve, u jap fëmijëve"
  },
  {
    "id": 21,
    "title": "Ablativ Singular",
    "focus": "Herkunft/Trennung mit Singular",
    "examples": "prej mikut, nga qyteti"
  },
  {
    "id": 22,
    "title": "Ablativ Plural und Präpositionen",
    "focus": "Herkunft/Trennung im Plural",
    "examples": "prej prindërve, nga vendet"
  },
  {
    "id": 23,
    "title": "me vs. më",
    "focus": "me = mit, më = mich/mir",
    "examples": "me gruan, më ndihmon"
  },
  {
    "id": 24,
    "title": "Akkusativ-Kurzpronomen Singular",
    "focus": "më, të, e",
    "examples": "Ai më njeh. Unë e shoh atë."
  },
  {
    "id": 25,
    "title": "Akkusativ-Kurzpronomen Plural",
    "focus": "na, ju, i",
    "examples": "Ata na shohin. Unë i njoh."
  },
  {
    "id": 26,
    "title": "Dativ-Kurzpronomen Singular",
    "focus": "më, të, i",
    "examples": "Ai më jep librin. I flas asaj."
  },
  {
    "id": 27,
    "title": "Dativ-Kurzpronomen Plural",
    "focus": "na, ju, u",
    "examples": "U flas fëmijëve."
  },
  {
    "id": 28,
    "title": "Doppelmarkierung Akkusativ",
    "focus": "bestimmtes Objekt + Kurzpronomen",
    "examples": "E njoh atë. E takoj vajzën."
  },
  {
    "id": 29,
    "title": "Doppelmarkierung Dativ",
    "focus": "Dativobjekt + Kurzpronomen",
    "examples": "I jap librin mikut."
  },
  {
    "id": 30,
    "title": "Verschmolzene Kurzpronomen Singular",
    "focus": "ma, ta, ia, na e, jua, ua",
    "examples": "Ma jep librin. Ia tregoj rrugën."
  },
  {
    "id": 31,
    "title": "Verschmolzene Kurzpronomen Plural",
    "focus": "mi, ti, ia, nai, jua, ua",
    "examples": "Mi jep librat."
  },
  {
    "id": 32,
    "title": "Reflexive Verben Präsens: Grundformen",
    "focus": "lahem, vishem, krihem, zgjohem, ngrihem",
    "examples": "Unë lahem. Ti vishesh."
  },
  {
    "id": 33,
    "title": "Reflexive Verben: Morgenroutine",
    "focus": "Tagesablauf mit reflexiven Verben",
    "examples": "zgjohem, lahem, vishem, dal"
  },
  {
    "id": 34,
    "title": "Reflexiv vs. nicht-reflexiv",
    "focus": "Bedeutungsunterschied",
    "examples": "laj = ich wasche etwas / lahem = ich wasche mich"
  },
  {
    "id": 35,
    "title": "Reflexive/passive Formen erkennen",
    "focus": "passive Bedeutung nur erkennen",
    "examples": "përdoret, shihet, lahet"
  },
  {
    "id": 36,
    "title": "Körper & Gesundheit: më dhemb",
    "focus": "Schmerzen ausdrücken",
    "examples": "Më dhemb koka."
  },
  {
    "id": 37,
    "title": "Gesundheit: kam nevojë për / më duhet",
    "focus": "brauchen / nötig sein",
    "examples": "Kam nevojë për ndihmë. Më duhen ilaçe."
  },
  {
    "id": 38,
    "title": "Imperativ Singular",
    "focus": "Aufforderungen an eine Person",
    "examples": "Shih! Prit! Eja!"
  },
  {
    "id": 39,
    "title": "Imperativ Plural / Höflichkeitsform",
    "focus": "Aufforderungen an mehrere / höflich",
    "examples": "Shihni! Prisni! Urdhëroni!"
  },
  {
    "id": 40,
    "title": "Negativer Imperativ mit mos",
    "focus": "Verbote",
    "examples": "Mos prit! Mos lëviz!"
  },
  {
    "id": 41,
    "title": "Imperativ im Alltag",
    "focus": "Arzt, Laden, Familie, Hotel",
    "examples": "Firmosni këtu! Prit pak!"
  },
  {
    "id": 42,
    "title": "Basiskonnektoren",
    "focus": "einfache Sätze verbinden",
    "examples": "dhe, por, ose, sepse, prandaj"
  },
  {
    "id": 43,
    "title": "Nebensätze mit që",
    "focus": "dass-Sätze",
    "examples": "Mendoj që… / Di që…"
  },
  {
    "id": 44,
    "title": "Relativsätze mit që",
    "focus": "der/die/das",
    "examples": "shtëpia që shoh, studentja që vjen"
  },
  {
    "id": 45,
    "title": "Temporale Nebensätze mit kur",
    "focus": "wenn/als",
    "examples": "Kur jam në shtëpi, lexoj."
  },
  {
    "id": 46,
    "title": "Gegensätze mit ndërsa",
    "focus": "während / wohingegen",
    "examples": "Unë punoj, ndërsa ajo lexon."
  },
  {
    "id": 47,
    "title": "Zielangaben mit për të",
    "focus": "um zu",
    "examples": "Shkoj në dyqan për të blerë bukë."
  },
  {
    "id": 48,
    "title": "pa + Verbform",
    "focus": "ohne zu",
    "examples": "pa folur, pa ngrënë"
  },
  {
    "id": 49,
    "title": "Gleichzeitigkeit mit duke",
    "focus": "während / indem",
    "examples": "Duke lexuar, pi kafe."
  },
  {
    "id": 50,
    "title": "Zukunft mit do të",
    "focus": "einfache Zukunft",
    "examples": "Do të shkoj. Do të blej."
  },
  {
    "id": 51,
    "title": "Zukunft: Pläne und Empfehlungen",
    "focus": "Reise, Wochenende, Besuch",
    "examples": "Do të shkojmë nesër."
  },
  {
    "id": 52,
    "title": "Perfekt: Grundidee",
    "focus": "zusammengesetzte Vergangenheit",
    "examples": "kam punuar, kam mësuar"
  },
  {
    "id": 53,
    "title": "Perfekt mit kam",
    "focus": "aktive regelmäßige Verben",
    "examples": "kam lexuar, kam blerë, kam punuar"
  },
  {
    "id": 54,
    "title": "Perfekt mit jam",
    "focus": "Bewegung/reflexive Verben vorsichtig",
    "examples": "jam kthyer, jam zgjuar"
  },
  {
    "id": 55,
    "title": "Einfache Vergangenheit/Aorist erkennen",
    "focus": "Formen in Texten erkennen",
    "examples": "shkova, pashë, bëra"
  },
  {
    "id": 56,
    "title": "Einfache Vergangenheit: häufige Verben aktiv",
    "focus": "wenige wichtige Formen",
    "examples": "isha, kisha, shkova, pashë"
  },
  {
    "id": 57,
    "title": "Imperfekt: Grundidee",
    "focus": "Zustand/Gewohnheit in der Vergangenheit",
    "examples": "isha, kisha, bëja, shkoja"
  },
  {
    "id": 58,
    "title": "Imperfekt vs. Perfekt/Aorist",
    "focus": "Gewohnheit vs. abgeschlossene Handlung",
    "examples": "shkoja vs. shkova"
  },
  {
    "id": 59,
    "title": "Adjektive maskulin/feminin Singular",
    "focus": "Grundformen",
    "examples": "i mirë / e mirë, i madh / e madhe"
  },
  {
    "id": 60,
    "title": "Adjektive Plural",
    "focus": "männlich/weiblich Plural",
    "examples": "të mirë / të mira"
  },
  {
    "id": 61,
    "title": "Adjektive mit bestimmten Nomen",
    "focus": "bestimmte Nominalgruppen",
    "examples": "shtëpia e madhe, dyqani i vogël"
  },
  {
    "id": 62,
    "title": "Adjektive in den Fällen",
    "focus": "Nominativ/Akkusativ/Genitiv einfach",
    "examples": "gruan e mirë, shtëpia e madhe"
  },
  {
    "id": 63,
    "title": "Zusammengesetzte Adjektive",
    "focus": "Wortbildung",
    "examples": "kokëfortë, zemërluan, gojëmbël"
  },
  {
    "id": 64,
    "title": "Steigerung",
    "focus": "mehr / weniger / am meisten",
    "examples": "më i mirë, më shumë, më pak"
  },
  {
    "id": 65,
    "title": "Modalverben und modalähnliche Ausdrücke",
    "focus": "wollen, können, müssen, brauchen",
    "examples": "dua, dëshiroj, mund, duhet, më duhet"
  },
  {
    "id": 66,
    "title": "Empfehlungen geben",
    "focus": "Ratschläge und Vorschläge",
    "examples": "Të rekomandoj… / Duhet të…"
  },
  {
    "id": 67,
    "title": "Bitten und Höflichkeit",
    "focus": "höflich fragen/reagieren",
    "examples": "ju lutem, a mund…, më falni"
  },
  {
    "id": 68,
    "title": "Meinung ausdrücken",
    "focus": "denken/glauben/meinen",
    "examples": "mendoj që, besoj që, më pëlqen"
  },
  {
    "id": 69,
    "title": "Gefühle und Zustände",
    "focus": "Befinden beschreiben",
    "examples": "ndihem mirë, jam i lodhur"
  },
  {
    "id": 70,
    "title": "ç vs. çfarë",
    "focus": "Frageformen",
    "examples": "Çfarë bën? Ç’kemi?"
  },
  {
    "id": 71,
    "title": "as… as und doppelte Verneinung",
    "focus": "weder… noch / kein…",
    "examples": "Nuk kam as kohë, as para."
  },
  {
    "id": 72,
    "title": "Unpersönliche Verben",
    "focus": "Wetter, Notwendigkeit, Gefallen",
    "examples": "bie shi, bën vapë, duhet"
  },
  {
    "id": 73,
    "title": "më pëlqen / më pëlqejnë",
    "focus": "gefallen im Singular/Plural",
    "examples": "Më pëlqen kafeja. Më pëlqejnë këpucët."
  },
  {
    "id": 74,
    "title": "Zahlen, Mengen, Preise",
    "focus": "Einkauf und Restaurant",
    "examples": "një kile, sa kushton, sa bëjnë bashkë"
  },
  {
    "id": 75,
    "title": "Uhrzeit und Tageszeiten",
    "focus": "Uhrzeit + Tagesablauf",
    "examples": "në orën dhjetë, në mëngjes, sonte"
  },
  {
    "id": 76,
    "title": "Tage, Monate, Jahreszeiten",
    "focus": "Kalender und Zeitangaben",
    "examples": "të hënën, në verë, në janar"
  }
];

const VOCAB = [
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "Guten Tag",
    "sq": "mirëdita"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "auf Wiedersehen",
    "sq": "mirupafshim"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "danke",
    "sq": "faleminderit"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "bitte",
    "sq": "ju lutem"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "bitte schön",
    "sq": "urdhëroni"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "ja",
    "sq": "po"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "nein",
    "sq": "jo"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "gut",
    "sq": "mirë"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "auch",
    "sq": "edhe"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "und",
    "sq": "dhe"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "aber",
    "sq": "por"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "wo?",
    "sq": "ku?"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "wie?",
    "sq": "si?"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "wer?",
    "sq": "kush?"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "was?",
    "sq": "çfarë?"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "hier",
    "sq": "këtu"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "dort",
    "sq": "atje"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "heute",
    "sq": "sot"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "morgen",
    "sq": "nesër"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "gestern",
    "sq": "dje"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "jetzt",
    "sq": "tani"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "später",
    "sq": "pastaj"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "sehr / viel",
    "sq": "shumë"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "nur",
    "sq": "vetëm"
  },
  {
    "lesson": "Lektion 1 – Begrüßung, Höflichkeit, Basiswörter",
    "de": "wirklich",
    "sq": "vërtet"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "rechts",
    "sq": "djathtas"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "links",
    "sq": "majtas"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "geradeaus",
    "sq": "drejt"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "gegenüber",
    "sq": "përballë"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "unter",
    "sq": "poshtë"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "auf/unter",
    "sq": "mbi/nën"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "vorne",
    "sq": "përpara"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "hinter",
    "sq": "prapa/pas"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "zwischen",
    "sq": "midis"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "bei/zu",
    "sq": "te"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "von/aus",
    "sq": "nga"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "nach/zu",
    "sq": "në"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "für",
    "sq": "për"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "durch",
    "sq": "përmes"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "entlang",
    "sq": "përgjatë"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "bis",
    "sq": "deri"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Ecke",
    "sq": "cep"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Bahnhof",
    "sq": "stacion"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Busbahnhof",
    "sq": "stacioni i autobusëve"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Flughafen",
    "sq": "aeroport"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Auto",
    "sq": "makinë"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Bus",
    "sq": "autobus"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "Taxi",
    "sq": "taksi"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "zu Fuß gehen",
    "sq": "ec"
  },
  {
    "lesson": "Lektion 10 – Stadt, Wege & Orientierung",
    "de": "ich reise",
    "sq": "udhëtoj"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Kopf",
    "sq": "kokë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Auge",
    "sq": "sy"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Ohr",
    "sq": "vesh"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Mund",
    "sq": "gojë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Nase",
    "sq": "hundë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Hals",
    "sq": "grykë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Nacken",
    "sq": "qafë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Arm",
    "sq": "krah"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Hand",
    "sq": "dorë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Finger",
    "sq": "gisht dore"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Bauch",
    "sq": "bark"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Rücken",
    "sq": "shpinë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Fuß / Bein",
    "sq": "këmbë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Zahn",
    "sq": "dhëmb"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Gesicht",
    "sq": "fytyrë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Lippe",
    "sq": "buzë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Schulter",
    "sq": "shpatull"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Haare",
    "sq": "flokë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Augenbraue",
    "sq": "vetull"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Backe",
    "sq": "faqe"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Schmerzen",
    "sq": "dhimbje"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "Kopfschmerzen",
    "sq": "dhimbje koke"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "es tut mir weh",
    "sq": "më dhemb"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "krank",
    "sq": "i/e sëmurë"
  },
  {
    "lesson": "Lektion 11 – Körper & Gesundheit I",
    "de": "gesund",
    "sq": "i/e shëndetshëm"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Hose",
    "sq": "pantallona"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Hemd",
    "sq": "këmishë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Bluse",
    "sq": "bluzë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Kleid",
    "sq": "fustan"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Jacke",
    "sq": "xhaketë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Mantel",
    "sq": "pallto"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Schal",
    "sq": "shall"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Handschuhe",
    "sq": "doreza"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Schuhe",
    "sq": "këpucë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Socken",
    "sq": "çorapë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Rock",
    "sq": "fund"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Krawatte",
    "sq": "kravatë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Brille",
    "sq": "syze"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "Gürtel",
    "sq": "rrip"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "weiß",
    "sq": "i/e bardhë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "schwarz",
    "sq": "i zi/e zezë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "rot",
    "sq": "i kuq/e kuqe"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "gelb",
    "sq": "i/e verdhë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "grün",
    "sq": "i/e gjelbër"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "blau",
    "sq": "blu"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "braun",
    "sq": "i/e kaftë"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "groß",
    "sq": "i madh/e madhe"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "klein",
    "sq": "i/e vogël"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "schön",
    "sq": "i bukur"
  },
  {
    "lesson": "Lektion 12 – Kleidung, Farben, einfache Eigenschaften",
    "de": "neu",
    "sq": "i ri/e re"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich gehe hinaus",
    "sq": "dal"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich mache",
    "sq": "bëj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich sehe",
    "sq": "shoh"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich höre",
    "sq": "dëgjoj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich sage",
    "sq": "them"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich nehme",
    "sq": "marr"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich gebe",
    "sq": "jap"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich bringe (hierher)",
    "sq": "sjell"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich bringe (hin)",
    "sq": "çoj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich stelle",
    "sq": "vë"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich finde",
    "sq": "gjej"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich arbeite",
    "sq": "punoj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich wohne",
    "sq": "banoj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich bleibe",
    "sq": "qëndroj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich sitze",
    "sq": "ulem"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich stehe auf",
    "sq": "ngrihem"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich gehe hinein",
    "sq": "hyj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich komme näher",
    "sq": "afrohem"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich nehme teil",
    "sq": "marr pjesë në"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich beginne",
    "sq": "filloj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich beende",
    "sq": "mbaroj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich versuche",
    "sq": "përpiqem"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich entscheide",
    "sq": "vendos"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich spiele",
    "sq": "luaj"
  },
  {
    "lesson": "Lektion 13 – Alltagsverben I",
    "de": "ich tanze",
    "sq": "kërcej"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich verstehe",
    "sq": "kuptoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich kenne",
    "sq": "njoh"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich glaube",
    "sq": "besoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich denke",
    "sq": "mendoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich frage",
    "sq": "pyes"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich antworte",
    "sq": "përgjigjem"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich erkläre",
    "sq": "shpjegoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich beschreibe",
    "sq": "përshkruaj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich erzähle",
    "sq": "tregoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich lese",
    "sq": "lexoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich schreibe",
    "sq": "shkruaj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich wiederhole",
    "sq": "përsërit"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich erinnere mich",
    "sq": "kujtoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich vergesse",
    "sq": "harroj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich schlage vor",
    "sq": "sugjeroj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich zeige",
    "sq": "tregoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich rufe",
    "sq": "thërras"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich suche",
    "sq": "kërkoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich notiere",
    "sq": "shënoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich mache weiter",
    "sq": "vazhdoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "ich probiere",
    "sq": "provoj"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "Wort",
    "sq": "fjalë"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "Satz",
    "sq": "fjali"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "Frage",
    "sq": "pyetje"
  },
  {
    "lesson": "Lektion 14 – Kommunikation & Verstehen",
    "de": "Antwort",
    "sq": "përgjigje"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "ich fühle",
    "sq": "ndiej"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "Gefühl",
    "sq": "ndjenjë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "ich freue mich",
    "sq": "gëzohem"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "ich freue mich / fühle mich wohl",
    "sq": "kënaqem"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "Freude",
    "sq": "gëzim"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "Glück",
    "sq": "lumturi"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "traurig",
    "sq": "i mërzitur"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "traurig",
    "sq": "i/e tristë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "ruhig",
    "sq": "i/e qetë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "beschäftigt",
    "sq": "i/e zënë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "müde",
    "sq": "e lodhur"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "Angst",
    "sq": "frikë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "Stress",
    "sq": "stres"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "stressig",
    "sq": "me stres"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "wichtig",
    "sq": "i/e rëndësishëm"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "leicht",
    "sq": "i/e lehtë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "schwer",
    "sq": "i/e rëndë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "einfach",
    "sq": "thjesht"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "schwierig",
    "sq": "e vështirë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "freundlich / angenehm",
    "sq": "i këndshëm"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "hässlich",
    "sq": "i/e shëmtur"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "geduldig",
    "sq": "i/e duruar"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "klug",
    "sq": "i/e mençur"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "stur",
    "sq": "kokëfortë"
  },
  {
    "lesson": "Lektion 15 – Gefühle, Charakter, Einschätzung",
    "de": "vorsichtig",
    "sq": "i/e kujdesshëm"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "das Wetter",
    "sq": "moti"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "es regnet",
    "sq": "bie shi"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "es ist heiß",
    "sq": "bën vapë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Hitze",
    "sq": "vapë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "kalt",
    "sq": "i/e ftohtë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "warm",
    "sq": "i/e ngrohtë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "heiß",
    "sq": "i/e nxehtë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Wind",
    "sq": "erë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "es windet",
    "sq": "fryn erë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Sonne",
    "sq": "diell"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Himmel",
    "sq": "qiell"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Wolke",
    "sq": "re/reja"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Meer",
    "sq": "det"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "See",
    "sq": "liqen"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Fluss",
    "sq": "lumë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Berg",
    "sq": "mal"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Berge",
    "sq": "male"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Hügel",
    "sq": "kodër"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Feld",
    "sq": "fushë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Gras",
    "sq": "bar"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Baum",
    "sq": "pemë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Wald",
    "sq": "pyll"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Erde",
    "sq": "tokë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Sommer",
    "sq": "verë"
  },
  {
    "lesson": "Lektion 16 – Wetter & Natur I",
    "de": "Winter",
    "sq": "dimër"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Frühling",
    "sq": "pranverë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Herbst",
    "sq": "vjeshtë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Jahreszeit",
    "sq": "stinë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Landschaft",
    "sq": "peizazh"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Dorf",
    "sq": "fshat"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Stadt",
    "sq": "qytet"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Land/Ort",
    "sq": "vend"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Hauptstadt",
    "sq": "kryeqytet"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Albanien",
    "sq": "Shqipëri"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Kosovo",
    "sq": "Kosovë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Deutschland",
    "sq": "Gjermani"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Österreich",
    "sq": "Austri"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Frankreich",
    "sq": "Francë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Griechenland",
    "sq": "Greqi"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Spanien",
    "sq": "Spanjë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Schweiz",
    "sq": "Zvicër"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Prishtina",
    "sq": "Prishtinë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Tirana",
    "sq": "Tiranë"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "München",
    "sq": "Mynih"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Norden",
    "sq": "veri"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Süden",
    "sq": "jug"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Osten",
    "sq": "lindje"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Westen",
    "sq": "perëndim"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "Südosten",
    "sq": "juglindje"
  },
  {
    "lesson": "Lektion 17 – Geografie, Länder, Orte",
    "de": "im Süden",
    "sq": "në jug"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Topf",
    "sq": "tenxhere"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Pfanne",
    "sq": "tigan"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Schüssel",
    "sq": "tas"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Teller",
    "sq": "pjatë/pjata"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Becher / Glas",
    "sq": "gotë/gota"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Tasse",
    "sq": "filxhan"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Löffel",
    "sq": "lugë"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Messer",
    "sq": "thikë"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Gabel",
    "sq": "pirun"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Suppenlöffel",
    "sq": "garuzhde"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Deckel",
    "sq": "kapak"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Kühlschrank",
    "sq": "frigorifer"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Mikrowelle",
    "sq": "mikrovalë"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Herd",
    "sq": "pllakë"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "E-Herd",
    "sq": "furrë elektrike"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Besen",
    "sq": "fshesë"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Staubsauger",
    "sq": "fshesë me korrent"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Bügeleisen",
    "sq": "hekur"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Seife",
    "sq": "sapun"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Shampoo",
    "sq": "shampo"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Zahnpasta",
    "sq": "pastë dhëmbësh"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Zahnbürste",
    "sq": "furçë dhëmbësh"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Handtuch",
    "sq": "peshqir"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Creme",
    "sq": "krem"
  },
  {
    "lesson": "Lektion 18 – Küche, Haushalt & Pflege",
    "de": "Parfüm",
    "sq": "parfum"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich koche",
    "sq": "gatuaj"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich backe",
    "sq": "pjek"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich koche / siede",
    "sq": "ziej"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich wasche",
    "sq": "laj"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich dusche",
    "sq": "bëj dush"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich putze sauber",
    "sq": "pastroj"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich nähe",
    "sq": "qep"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich ordne",
    "sq": "sistemoj"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich benutze",
    "sq": "përdor"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich probiere",
    "sq": "provoj"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich trenne",
    "sq": "ndaj"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich schmelze",
    "sq": "tret"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich brate",
    "sq": "skuq"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "ich rauche",
    "sq": "pi duhan"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Mehl",
    "sq": "miell"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Reisgericht",
    "sq": "pilaf"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Börek",
    "sq": "lakror"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Spinat",
    "sq": "spinaq"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Joghurtgetränk",
    "sq": "dhallë"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Nachspeise / Süßspeise",
    "sq": "ëmbëlsirë"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Vorspeise",
    "sq": "meze"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Hauptspeise",
    "sq": "vakt kryesor"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Dessert",
    "sq": "dezert"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "Speiseeis",
    "sq": "akullore"
  },
  {
    "lesson": "Lektion 19 – Kochen & Essen II",
    "de": "lecker",
    "sq": "shijshme"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich",
    "sq": "unë"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "du",
    "sq": "ti"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "Sie/ihr",
    "sq": "ju"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich bin",
    "sq": "jam"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "wir sind",
    "sq": "jemi"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich habe",
    "sq": "kam"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich heiße",
    "sq": "quhem"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich gehe",
    "sq": "shkoj"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "wir gehen",
    "sq": "shkojmë"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich komme",
    "sq": "vij"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "wir kommen",
    "sq": "vijmë"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich spreche",
    "sq": "flas"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ihr/Sie sprecht",
    "sq": "flisni"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich lerne",
    "sq": "mësoj"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich weiß / kann",
    "sq": "di"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich will",
    "sq": "dua"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich wünsche / möchte",
    "sq": "dëshiroj"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich brauche",
    "sq": "më duhet"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "es ist nötig",
    "sq": "duhet"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "ich kann",
    "sq": "mund"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "nicht",
    "sq": "nuk"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "weil",
    "sq": "sepse"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "dass",
    "sq": "që"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "auch? / Fragepartikel",
    "sq": "a"
  },
  {
    "lesson": "Lektion 2 – Pronomen, sein - haben, häufigste Funktionswörter",
    "de": "und? / Gegenfrage",
    "sq": "po"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Zug",
    "sq": "tren"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Tram",
    "sq": "tramvaj"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Lkw",
    "sq": "kamion"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Minibus",
    "sq": "furgon"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Fahrrad",
    "sq": "biçikletë"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Flugzeug",
    "sq": "avion"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Hubschrauber",
    "sq": "helikopter"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Schiff",
    "sq": "anije"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Boot",
    "sq": "varkë"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Fahrer",
    "sq": "shofer"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Pilot",
    "sq": "pilot"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Kapitän",
    "sq": "kapiten"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "ich fahre",
    "sq": "ngas"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "ich fliege",
    "sq": "fluturoj"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "wir brechen auf",
    "sq": "nisemi"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "schnell",
    "sq": "shpejt"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Sicherheit",
    "sq": "siguri"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Hotel",
    "sq": "hotel"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Doppelzimmer",
    "sq": "dhomë dopio"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Pass",
    "sq": "pashaportë/pashaporta"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Unterschrift",
    "sq": "firmë"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Aufenthalt",
    "sq": "qëndrim"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "ich habe reserviert",
    "sq": "kam rezervuar"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Urlaub",
    "sq": "pushim"
  },
  {
    "lesson": "Lektion 20 – Reisen, Hotel, Verkehr",
    "de": "Ferien",
    "sq": "pushime"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Beruf",
    "sq": "profesion"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Arzt",
    "sq": "mjek"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Lehrer",
    "sq": "mësues"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Krankenpfleger",
    "sq": "infermier"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Verkäuferin",
    "sq": "shitëse"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Arbeit",
    "sq": "punë"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Arbeitnehmer",
    "sq": "punëtor"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Arbeitgeber",
    "sq": "punëdhënës"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Direktor",
    "sq": "drejtor"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Unternehmen",
    "sq": "kompani"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Arbeitsplatz",
    "sq": "vend pune"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Büro",
    "sq": "zyrë"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Termin",
    "sq": "takim"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Überstunden",
    "sq": "mbi orar"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "ich arbeite als",
    "sq": "punoj si"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "ich zähle",
    "sq": "numëroj"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "ich erreiche",
    "sq": "arrij"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "ich gewinne",
    "sq": "fitoj"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Erfolg",
    "sq": "sukses"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Karriere",
    "sq": "karrierë"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Preis",
    "sq": "çmim"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "Verhandlung / Feilschen",
    "sq": "pazar"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "ich handle (Preis)",
    "sq": "bëj pazar"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "rechtzeitig",
    "sq": "me kohë"
  },
  {
    "lesson": "Lektion 21 – Arbeit, Beruf, Büro",
    "de": "pünktlich",
    "sq": "në kohë"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Schule",
    "sq": "shkollë"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Grundschule",
    "sq": "shkollë fillore"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Mittelschule",
    "sq": "shkollë e mesme"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Studentenheim",
    "sq": "konvikt"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Schüler",
    "sq": "nxënës/e"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Übung",
    "sq": "ushtrim"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Beispiel",
    "sq": "shembull"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Regel",
    "sq": "rregull"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Verben",
    "sq": "folje"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Präposition",
    "sq": "parafjalë"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Bindewörter",
    "sq": "lidhëza"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Nominativ",
    "sq": "rasa emërore"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Genitiv",
    "sq": "rasa gjinore"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Singular",
    "sq": "njëjës"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Plural",
    "sq": "shumës"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Vokal",
    "sq": "zanore"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Konsonant",
    "sq": "bashkëtingëllore"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Sprache",
    "sq": "gjuhë"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Albanisch",
    "sq": "shqip"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Deutsch",
    "sq": "gjermanisht"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "Französisch",
    "sq": "frengjisht"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "ich lerne",
    "sq": "mësoj"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "ich wiederhole",
    "sq": "përsërit"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "ich erkläre",
    "sq": "shpjegoj"
  },
  {
    "lesson": "Lektion 22 – Schule, Sprache, Grammatikbasis",
    "de": "ich schreibe",
    "sq": "shkruaj"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Apotheke",
    "sq": "farmaci"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Arzneimittel",
    "sq": "ilaçe"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Tabletten",
    "sq": "tableta"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Sirup",
    "sq": "shurup"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Sonnencreme",
    "sq": "krem dielli"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Faktor",
    "sq": "faktor"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Durchfall",
    "sq": "diarre"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Husten",
    "sq": "kollitja"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Muskel",
    "sq": "muskul"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "ich heile",
    "sq": "shëroj"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "ich werde gesund",
    "sq": "shërohem"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "sich übergeben",
    "sq": "vjell"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "schmerzen",
    "sq": "dhemb"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "es schmerzt mir",
    "sq": "më dhemb"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Gesundheit!",
    "sq": "Shëndet!"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Danke nach Niesen",
    "sq": "Shëndet paç!"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Gute Besserung!",
    "sq": "të shkuara!"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "schwanger",
    "sq": "shtatzënë"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "blind",
    "sq": "i verbër"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "taub",
    "sq": "shurdh"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "taubstumm",
    "sq": "shurdh-memec"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "ich schütze mich",
    "sq": "mbrohem"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "grillen / verbrennen",
    "sq": "djeg"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Sonnenbrand",
    "sq": "djegie nga dielli"
  },
  {
    "lesson": "Lektion 23 – Gesundheit II - Arzt - Apotheke",
    "de": "Gesundheit",
    "sq": "shëndet"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Sport treiben",
    "sq": "bëj sport"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Training",
    "sq": "stërvitje"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Match / Spiel",
    "sq": "ndeshje"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Fußballmannschaft",
    "sq": "skuadra e futbollit"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Reise / Fahrt",
    "sq": "udhëtim"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "spazieren",
    "sq": "shëtis"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "laufen",
    "sq": "vrapoj"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "schwimmen",
    "sq": "notoj"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "sich sonnen",
    "sq": "rrezitem"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "an den Strand gehen",
    "sq": "bëj plazh"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Konzert",
    "sq": "koncert"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Lied",
    "sq": "këngë"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "ich singe",
    "sq": "këndoj"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Tanz",
    "sq": "kërcim"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Volkstanz",
    "sq": "valle"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "ich tanze Valle",
    "sq": "kërcej valle"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Spiel",
    "sq": "lojë"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Spaß haben",
    "sq": "bëj qejf"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "lustig",
    "sq": "qesharak"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Überraschung",
    "sq": "surprizë"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Traum",
    "sq": "ëndërr"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Feuerwerk",
    "sq": "fishekzjarre"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Weihnachten",
    "sq": "Krishtlindje"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Ostern",
    "sq": "Pashkët"
  },
  {
    "lesson": "Lektion 24 – Freizeit, Sport, Ausgehen",
    "de": "Neujahr",
    "sq": "vitin e ri"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Land",
    "sq": "vend"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Ort",
    "sq": "vend"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Platz / Stelle",
    "sq": "vend"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Hauptstadt",
    "sq": "kryeqytet"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Museum",
    "sq": "muze"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Bibliothek",
    "sq": "bibliotekë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Oper",
    "sq": "operë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Moschee",
    "sq": "xhami"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Kirche",
    "sq": "kishë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Festung",
    "sq": "kështjellë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Aussicht",
    "sq": "pamje"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "bergig",
    "sq": "malor"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Asphalt",
    "sq": "asfalt"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Autobahn",
    "sq": "autostradë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Grenze",
    "sq": "kufi"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Zoll",
    "sq": "doganë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Zollbeamter",
    "sq": "doganier"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Flüchtlingslager",
    "sq": "kamp refugjatësh"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Wüste",
    "sq": "shkretëtirë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Zoo",
    "sq": "kopsht zoologjik"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Weg",
    "sq": "rrugë"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Flughafen",
    "sq": "aeroport"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Strand",
    "sq": "plazh"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Restaurant",
    "sq": "restorant"
  },
  {
    "lesson": "Lektion 25 – Land, Stadt, Geografie, Orte",
    "de": "Stadtzentrum",
    "sq": "qendër qyteti"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Mensch",
    "sq": "njeri"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Leute",
    "sq": "njerëz"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Name",
    "sq": "emër"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Nachname",
    "sq": "mbiemër"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Freund",
    "sq": "shok"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Freund / Bekannter",
    "sq": "mik"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Elternteil",
    "sq": "prind"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Nationalität",
    "sq": "kombëtar"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Albaner",
    "sq": "shqiptar"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Deutsche",
    "sq": "gjermane"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Österreicher",
    "sq": "austriak"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Franzose",
    "sq": "francez"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "Grieche",
    "sq": "grek"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "reich",
    "sq": "i pasur"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "arm",
    "sq": "i varfër"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "alt (Person)",
    "sq": "i/e moshuar"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "jung",
    "sq": "i ri/e re"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "lang",
    "sq": "i/e gjatë"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "kurz",
    "sq": "i/e shkurtër"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "dick",
    "sq": "i shëndoshë"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "dünn",
    "sq": "i/e hollë"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "schlau",
    "sq": "i/e zgjuar"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "tapfer",
    "sq": "trim"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "treu",
    "sq": "besnik"
  },
  {
    "lesson": "Lektion 26 – Menschen, Charakter, soziale Beziehungen",
    "de": "glücklich",
    "sq": "i lumtur"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Hochzeit",
    "sq": "dasmë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Ehe / Heirat",
    "sq": "martesë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Verlobte",
    "sq": "e fejuara"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Ring",
    "sq": "unazë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Geschenk",
    "sq": "dhuratë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Einladung",
    "sq": "ftesë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "eingeladen",
    "sq": "i/e ftuar"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Versprechen",
    "sq": "besë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Wahrheit",
    "sq": "e vërtetë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Kultur",
    "sq": "kulturë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Nationalfeiertag",
    "sq": "festa kombëtare"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Glaube",
    "sq": "besim"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "gläubig",
    "sq": "besimtar"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Frieden",
    "sq": "paqe"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Ruhm",
    "sq": "famë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Wichtigkeit",
    "sq": "rëndësi"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Herausforderung",
    "sq": "sfidë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Unabhängigkeit",
    "sq": "pavarësi"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Geschichte",
    "sq": "histori"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Held",
    "sq": "hero"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Premierminister",
    "sq": "kryeministër"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Volkstracht",
    "sq": "kostum kombëtar"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Leben",
    "sq": "jetë"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Tod",
    "sq": "vdekje"
  },
  {
    "lesson": "Lektion 27 – Feiertage, Kultur, Familie II",
    "de": "Kindheit",
    "sq": "fëmijëri"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Apfel",
    "sq": "mollë"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Birne",
    "sq": "dardhë"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Erdbeere",
    "sq": "luleshtrydhe"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Feige",
    "sq": "fik"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Quitte",
    "sq": "ftua"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Pflaume",
    "sq": "kumbull"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Kirsche",
    "sq": "qershi"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Weintrauben",
    "sq": "rrush"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Walnuss",
    "sq": "arrë"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Haselnuss",
    "sq": "lajthi"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Esskastanie",
    "sq": "gështenjë"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Kürbis",
    "sq": "kungull"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Honigmelone",
    "sq": "pjepër"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Grapefruit",
    "sq": "qitro"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Kohl",
    "sq": "lakër"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Aubergine",
    "sq": "patëllxhan"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Lauch",
    "sq": "presh"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Spinat",
    "sq": "spinaq"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Oliven",
    "sq": "ullinj"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Schwein",
    "sq": "derr"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Kuh",
    "sq": "lopë"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Kalb",
    "sq": "viç"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Schaf",
    "sq": "dele"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Lamm",
    "sq": "qengj"
  },
  {
    "lesson": "Lektion 28 – Obst, Gemüse, Lebensmittel",
    "de": "Huhn",
    "sq": "pulë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Tier",
    "sq": "kafshë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Haustier",
    "sq": "kafshë shtëpiake"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Pferd",
    "sq": "kalë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Hund",
    "sq": "qen"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Katze",
    "sq": "mace"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Vogel",
    "sq": "zog"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Wolf",
    "sq": "ujk"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Bär",
    "sq": "ari"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Tiger",
    "sq": "tigër"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Maus",
    "sq": "mi"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Hase",
    "sq": "lepur"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Wurm",
    "sq": "krimb"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Tierarzt",
    "sq": "veteriner"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Erde",
    "sq": "tokë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Baum",
    "sq": "pemë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Wald",
    "sq": "pyll"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Gras",
    "sq": "bar"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Wolke",
    "sq": "re"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Fluss",
    "sq": "lumë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Meer",
    "sq": "det"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "See",
    "sq": "liqen"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Landschaft",
    "sq": "peizazh"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Natur",
    "sq": "natyrë"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Berg",
    "sq": "mal"
  },
  {
    "lesson": "Lektion 29 – Tiere & Umwelt",
    "de": "Umwelt",
    "sq": "mjedis"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "eins",
    "sq": "një"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "zwei",
    "sq": "dy"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "fünf",
    "sq": "pesë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "neun",
    "sq": "nëntë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "elf",
    "sq": "njëmbëdhjetë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "fünfzehn",
    "sq": "pesëmbëdhjetë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "achtzig",
    "sq": "tetëdhjetë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "fünfundachtzig",
    "sq": "tetëdhjetë e pesë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "neunzig",
    "sq": "nëntëdhjetë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "fünfhundert",
    "sq": "pesëqind"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "585",
    "sq": "pesëqind e tetëdhjetë e pesë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "wie viele?",
    "sq": "sa?"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Preis",
    "sq": "çmim"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Lek",
    "sq": "lek"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Euro",
    "sq": "euro"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Kilo",
    "sq": "kile"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Liter",
    "sq": "litër"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "zusammen",
    "sq": "bashkë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Uhr / Stunde",
    "sq": "orë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "wie spät ist es?",
    "sq": "sa është ora?"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "es ist fünf Uhr",
    "sq": "ora është pesë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "Viertel",
    "sq": "çerek"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "halb",
    "sq": "gjysmë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "um zehn Uhr",
    "sq": "në orën dhjetë"
  },
  {
    "lesson": "Lektion 3 – Zahlen, Mengen, Preis, Uhrzeit I",
    "de": "insgesamt",
    "sq": "gjithsej"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich finde",
    "sq": "gjej"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich verliere",
    "sq": "humb"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich folge",
    "sq": "ndjek"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich erkenne / unterscheide",
    "sq": "dalloj"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich schütze",
    "sq": "mbroj"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich unterstütze",
    "sq": "mbështes"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich halte / trage",
    "sq": "mbaj"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich hebe",
    "sq": "ngre"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich wecke auf",
    "sq": "ngre nga gjumi"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich bewege",
    "sq": "lëviz"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich drehe mich um",
    "sq": "kthehem"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich gebe zurück",
    "sq": "kthej"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich baue",
    "sq": "ndërtoj"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich öffne",
    "sq": "hap"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich schließe",
    "sq": "mbyll"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich stoppe",
    "sq": "ndaloj"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich beeile mich",
    "sq": "nxitoj"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich komme zurück",
    "sq": "kthehem"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "ich gehe hinaus",
    "sq": "dal"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "oben",
    "sq": "lart"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "unten",
    "sq": "poshtë"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "um … herum",
    "sq": "përreth"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "durch",
    "sq": "nëpër"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "vor",
    "sq": "përpara"
  },
  {
    "lesson": "Lektion 30 – Bewegung, Richtung, Lagewörter",
    "de": "hinter",
    "sq": "pas"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Grund",
    "sq": "arsye"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Grund",
    "sq": "shkak"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Ziel",
    "sq": "qëllim"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Definition",
    "sq": "përkufizim"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Teil",
    "sq": "pjesë"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Art / Typ",
    "sq": "lloj"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Möglichkeit",
    "sq": "mundësi"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Wahrheit",
    "sq": "e vërtetë"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Zweifel",
    "sq": "dyshim"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Eindruck",
    "sq": "përshtypje"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Antwort",
    "sq": "përgjigje"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Beispiel",
    "sq": "shembull"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Menge",
    "sq": "sasi"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Abteilung / Teilung",
    "sq": "ndarje"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Anfang",
    "sq": "fillim"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Ende",
    "sq": "fund"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Wichtigkeit",
    "sq": "rëndësi"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Erfolg",
    "sq": "sukses"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Fehler",
    "sq": "gabim"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Schicksal / Glück",
    "sq": "fat"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Wunder",
    "sq": "mrekulli"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Leben",
    "sq": "jetë"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Tod",
    "sq": "vdekje"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Regel",
    "sq": "rregull"
  },
  {
    "lesson": "Lektion 31 – Abstrakte Wörter",
    "de": "Bedeutung",
    "sq": "domëthënie"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "und",
    "sq": "dhe"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "aber",
    "sq": "por"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "oder",
    "sq": "ose"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "auch",
    "sq": "edhe"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "auch nicht",
    "sq": "as"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "denn / weil",
    "sq": "se"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "weil",
    "sq": "sepse"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "deshalb",
    "sq": "prandaj"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "trotzdem",
    "sq": "megjithatë"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "obwohl",
    "sq": "megjithëse"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "wenn",
    "sq": "nëse"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "sobald",
    "sq": "sapo"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "nachdem",
    "sq": "pasi"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "bevor",
    "sq": "përpara se"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "solange",
    "sq": "përderisa"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "während",
    "sq": "ndërsa"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "währenddessen",
    "sq": "ndërkohë që"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "außer",
    "sq": "përveç"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "um zu",
    "sq": "që të"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "um … zu",
    "sq": "për të"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "zusätzlich / außerdem",
    "sq": "përveçse"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "daher",
    "sq": "pra"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "so",
    "sq": "kështu"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "natürlich",
    "sq": "natyrisht"
  },
  {
    "lesson": "Lektion 32 – Konnektoren & Strukturwörter",
    "de": "daher / deswegen",
    "sq": "ndaj"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Wie geht es Ihnen/euch?",
    "sq": "si jeni?"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Was geht?",
    "sq": "Ç’kemi?"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Willkommen!",
    "sq": "mirë se erdhe!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Willkommen bei uns!",
    "sq": "mirë se na erdhe!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Schön, Sie zu treffen!",
    "sq": "mirë se ju gjeta!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Gern geschehen!",
    "sq": "me kënaqësi"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Angenehm!",
    "sq": "gëzohem"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Macht nichts!",
    "sq": "s’ka gjë!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Gott sei Dank!",
    "sq": "shyqyr!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Oh mein Gott!",
    "sq": "obobo!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Oh Gott!",
    "sq": "o zot!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Mensch!",
    "sq": "de!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Klar!",
    "sq": "patjetër!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Natürlich!",
    "sq": "kuptohet!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Nicht wahr?",
    "sq": "apo jo?"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Zeig sie mir!",
    "sq": "Tregomi!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Du hast recht.",
    "sq": "ke të drejtë"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Genau, das stimmt.",
    "sq": "ashtu është"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Wie schade!",
    "sq": "sa keq!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Super! Gute Idee!",
    "sq": "ua!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Viel Glück!",
    "sq": "mbarësi"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Lebe wohl!",
    "sq": "lamtumirë!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Tschüss!",
    "sq": "tung!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Schönen Tag noch!",
    "sq": "ditën e mirë!"
  },
  {
    "lesson": "Lektion 33 – Begrüßen, Bitten, Reagieren",
    "de": "Auf Wiederhören!",
    "sq": "mirë u dëgjofshim!"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Wie viel kostet das?",
    "sq": "sa kushton?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Bitte schön.",
    "sq": "urdhëroni"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Was möchten Sie?",
    "sq": "çfarë dëshironi?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ich möchte …",
    "sq": "dua …"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ich hätte gern …",
    "sq": "dëshiroj …"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Welchen Preis gibst du mir?",
    "sq": "Sa do ma lësh?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Kann ich dich um einen Gefallen bitten?",
    "sq": "Mund të të kërkoj një nder?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Wer ist an der Reihe?",
    "sq": "Kush e ka radhën?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ich habe reserviert.",
    "sq": "kam rezervuar"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Die Rechnung, bitte.",
    "sq": "llogarinë, ju lutem"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Zum Mitnehmen.",
    "sq": "për me vete"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Noch etwas?",
    "sq": "edhe diçka?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Das wär’s.",
    "sq": "kaq"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ein Kilo bitte.",
    "sq": "një kile, ju lutem"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Wie viele?",
    "sq": "sa?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Wie viel macht das zusammen?",
    "sq": "sa bëjnë bashkë?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Zu teuer.",
    "sq": "shtrenjtë"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Etwas billiger?",
    "sq": "pak më lirë?"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ich warte.",
    "sq": "pres"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Wir warten.",
    "sq": "presim"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ich bestelle.",
    "sq": "porosis"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Ich handle mit dem Preis.",
    "sq": "bëj pazar"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Guten Appetit!",
    "sq": "ju bëftë mirë!"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "Lecker!",
    "sq": "shijshme!"
  },
  {
    "lesson": "Lektion 34 – Einkaufen, Restaurant, Preise",
    "de": "mit Schafskäse gefülltes Hacksteak",
    "sq": "biftek"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Entschuldigen Sie die Verspätung!",
    "sq": "Më falni për vonesën!"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Wo ist …?",
    "sq": "ku është …?"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Geradeaus, dann rechts.",
    "sq": "drejt, pastaj djathtas"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Geradeaus, dann links.",
    "sq": "drejt, pastaj majtas"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Bis wann?",
    "sq": "deri kur?"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "In zwei Stunden.",
    "sq": "për dy orë"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Wir brechen auf.",
    "sq": "nisemi"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Ich bin im Urlaub.",
    "sq": "jam me pushime"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Ich bin spät dran.",
    "sq": "jam me vonesë"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Er kann nicht kommen.",
    "sq": "nuk vjen dot"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Kann ich ein Zimmer bekommen?",
    "sq": "a mund të marr një dhomë?"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Doppelzimmer.",
    "sq": "dhomë dopio"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Pass bitte.",
    "sq": "pashaportën, ju lutem"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Unterschreiben Sie hier.",
    "sq": "firmosni këtu"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Das Zimmer ist ausgestattet.",
    "sq": "dhoma është e pajisur"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Der Strand ist nah.",
    "sq": "plazhi është afër"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Wie lange bleiben Sie?",
    "sq": "sa kohë rrini?"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Für eine Woche.",
    "sq": "për një javë"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Bis Sonntag.",
    "sq": "deri të dielën"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Am kommenden Sonntag.",
    "sq": "të dielën që vjen"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Nach Hause.",
    "sq": "në shtëpi"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Zur Arbeit.",
    "sq": "për në punë"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Zum Studieren.",
    "sq": "me studime"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Am See.",
    "sq": "buzë liqenit"
  },
  {
    "lesson": "Lektion 35 – Reisen, Hotel, Wegfragen",
    "de": "Hoffentlich!",
    "sq": "ishalla!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Was fehlt dir?",
    "sq": "çfarë të dhemb?"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Mir tut der Kopf weh.",
    "sq": "më dhemb koka"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich brauche Medikamente.",
    "sq": "më duhen ilaçe"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Sie benötigen …",
    "sq": "Ju nevojitet …"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Gute Besserung!",
    "sq": "të shkuara!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Gesundheit!",
    "sq": "Shëndet!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Danke!",
    "sq": "Shëndet paç!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Beweg dich nicht!",
    "sq": "Mos lëviz!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Rauch nicht!",
    "sq": "Mos pi duhan!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Warte!",
    "sq": "prit!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Warte nicht!",
    "sq": "mos prit!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich habe es eilig.",
    "sq": "nxitoj"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Was hast du so gemacht?",
    "sq": "Si ke kaluar?"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich habe die Zeit gut verbracht.",
    "sq": "e kam kaluar mirë kohën"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Du fehlst mir.",
    "sq": "më mungon"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich vermisse dich.",
    "sq": "më mungon"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich habe keinen Grund.",
    "sq": "nuk kam pse"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Es bedeutet …",
    "sq": "domëthënë …"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich meine …",
    "sq": "e kam fjalën …"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich meine es ernst.",
    "sq": "e kam seriozisht"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Was arbeitest du?",
    "sq": "Me çfarë merresh?"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Ich arbeite als …",
    "sq": "punoj si …"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Kannst du mir helfen?",
    "sq": "a mund të më ndihmosh?"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Möge es so sein!",
    "sq": "ashtu qoftë!"
  },
  {
    "lesson": "Lektion 36 – Gesundheit, Alltag, Telefon",
    "de": "Gute Nacht!",
    "sq": "natën e mirë!"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "der Morgen",
    "sq": "mëngjesi"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "morgens",
    "sq": "në mëngjes"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "vormittags",
    "sq": "paradite"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "der Mittag",
    "sq": "mesdita"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "mittags",
    "sq": "në mesditë"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "nachmittags",
    "sq": "pasdite"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "der Abend",
    "sq": "mbrëmja"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "abends",
    "sq": "në mbrëmje"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Mitternacht",
    "sq": "mesnatë"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "heute Abend",
    "sq": "sonte"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "wann?",
    "sq": "kur?"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "am Montag",
    "sq": "të hënën"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Montag",
    "sq": "e hënë"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Dienstag",
    "sq": "e martë"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Mittwoch",
    "sq": "e mërkurë"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Donnerstag",
    "sq": "e enjte"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Freitag",
    "sq": "e premte"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Samstag",
    "sq": "e shtunë"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Sonntag",
    "sq": "e diel"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Januar",
    "sq": "janar"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Februar",
    "sq": "shkurt"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "März",
    "sq": "mars"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "April",
    "sq": "prill"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Mai",
    "sq": "maj"
  },
  {
    "lesson": "Lektion 4 – Zeit, Tageszeiten, Woche, Monate I",
    "de": "Juni",
    "sq": "qershor"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "Juli",
    "sq": "korrik"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "August",
    "sq": "gusht"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "September",
    "sq": "shtator"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "Oktober",
    "sq": "tetor"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "November",
    "sq": "nëntor"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "Dezember",
    "sq": "dhjetor"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "Woche",
    "sq": "javë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "Monat",
    "sq": "muaj"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "Jahr",
    "sq": "vit"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "früh",
    "sq": "herët"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "spät",
    "sq": "vonë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "früher",
    "sq": "më parë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "bald",
    "sq": "së shpejti"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "oft",
    "sq": "shpesh"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "manchmal",
    "sq": "ndonjëherë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "selten",
    "sq": "rrallë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "immer",
    "sq": "gjithmonë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "noch",
    "sq": "akoma"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "schon vor einiger Zeit",
    "sq": "prej kohësh"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "vorgestern",
    "sq": "pardje"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "letztes Jahr",
    "sq": "vjet"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "am nächsten Tag",
    "sq": "të nesërmen"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "danach",
    "sq": "më pas"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "direkt",
    "sq": "menjëherë"
  },
  {
    "lesson": "Lektion 5 – Monate II, Häufigkeit, Zeitbezüge",
    "de": "regelmäßig",
    "sq": "vazhdimisht"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Familie",
    "sq": "familje/familja"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Vater",
    "sq": "baba/babai"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Mutter",
    "sq": "nënë/nëna"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Eltern",
    "sq": "prindër"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Kind",
    "sq": "fëmijë"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Sohn",
    "sq": "djalë/djali"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Tochter",
    "sq": "vajzë/vajza"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Bruder",
    "sq": "vëlla/vëllai"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Schwester",
    "sq": "motër/motra"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Mann",
    "sq": "burrë/burri"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Frau",
    "sq": "grua/gruaja"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Ehemann",
    "sq": "bashkëshort"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Ehefrau",
    "sq": "bashkëshorte"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Großvater",
    "sq": "gjysh"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Großmutter",
    "sq": "gjyshe"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Onkel (mütterlich)",
    "sq": "dajë"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Tante (mütterlich)",
    "sq": "teze"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Onkel (väterlich)",
    "sq": "xhaxha"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Tante (väterlich)",
    "sq": "hallë"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Cousin",
    "sq": "kushëri"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Cousine",
    "sq": "kushërirë"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Freund",
    "sq": "mik"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "Freundin",
    "sq": "shoqe"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "verheiratet",
    "sq": "i/e martuar"
  },
  {
    "lesson": "Lektion 6 – Familie & Personen I",
    "de": "ledig",
    "sq": "beqar/e"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Haus",
    "sq": "shtëpi/shtëpia"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Wohnung",
    "sq": "banesë"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Stadt",
    "sq": "qytet"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Dorf",
    "sq": "fshat"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Zimmer",
    "sq": "dhomë/dhoma"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Küche",
    "sq": "kuzhinë"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Bad",
    "sq": "banjë"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Toilette",
    "sq": "nevojtore"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Schlafzimmer",
    "sq": "dhomë gjumi"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Wohnzimmer",
    "sq": "dhomë ndenjeje"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Flur",
    "sq": "korridor"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Balkon",
    "sq": "ballkon"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Bett",
    "sq": "krevat"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Schrank",
    "sq": "dollap"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Tisch",
    "sq": "tavolinë"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Lampe",
    "sq": "llambë"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Fenster",
    "sq": "dritare"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Wand",
    "sq": "mur"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Boden",
    "sq": "dysheme"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Straße / Weg",
    "sq": "rrugë/rruga"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Platz",
    "sq": "shesh"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Zentrum",
    "sq": "qendër"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "nahe",
    "sq": "afër"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "weit",
    "sq": "larg"
  },
  {
    "lesson": "Lektion 7 – Wohnen & Zuhause I",
    "de": "Aufenthalt",
    "sq": "qëndrim"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Wasser",
    "sq": "ujë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Saft",
    "sq": "lëng"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Bier",
    "sq": "birrë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Milch",
    "sq": "qumësht"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Brot",
    "sq": "bukë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Kaffee",
    "sq": "kafe"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Joghurt",
    "sq": "kos"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Butter",
    "sq": "gjalpë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Zucker",
    "sq": "sheqer"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Salz",
    "sq": "kripë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Pfeffer",
    "sq": "piper"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Reis",
    "sq": "oriz"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Nudeln",
    "sq": "makarona"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Fleisch",
    "sq": "mish"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Fisch",
    "sq": "peshk"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Ei",
    "sq": "vezë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Frühstück",
    "sq": "mëngjes"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Mittagessen",
    "sq": "drekë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Abendessen",
    "sq": "darkë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "ich esse",
    "sq": "ha"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "wir trinken",
    "sq": "pimë"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "ich trinke",
    "sq": "pi"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Durst",
    "sq": "etje"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "Hunger",
    "sq": "uri"
  },
  {
    "lesson": "Lektion 8 – Essen & Trinken I",
    "de": "lecker",
    "sq": "shijshme"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "ich kaufe ein",
    "sq": "blej"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "ich verkaufe",
    "sq": "shes"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Markt",
    "sq": "treg"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Laden",
    "sq": "dyqan"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "ich bestelle",
    "sq": "porosis"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Rechnung",
    "sq": "llogari"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Geld",
    "sq": "para"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "teuer",
    "sq": "shtrenjtë"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "billig",
    "sq": "lirë"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Apfel",
    "sq": "mollë"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Birne",
    "sq": "dardhë"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Orange",
    "sq": "portokall"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Zitrone",
    "sq": "limon"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Banane",
    "sq": "banane"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Kartoffel",
    "sq": "patate"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Zwiebel",
    "sq": "qepë"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Knoblauch",
    "sq": "hudhër"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Tomate",
    "sq": "domate"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Obst",
    "sq": "fruta"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Gemüse",
    "sq": "perime"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Stück",
    "sq": "copë"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Packung",
    "sq": "pako"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "Restgeld",
    "sq": "kusur"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "bitte schön",
    "sq": "urdhëroni"
  },
  {
    "lesson": "Lektion 9 – Einkaufen & Geld",
    "de": "wie viele?",
    "sq": "sa?"
  }
];

const SESSIONS = [
  {
    "id": 1,
    "title": "Sitzung 1: Präsens regelmäßiger Verben auf -oj",
    "review": "Basis: Pronomen und einfache Wörter",
    "newTopicId": 1,
    "tags": [
      "Alltag",
      "Lernen",
      "Arbeit",
      "Wohnen"
    ],
    "vocab": [
      "unë",
      "ti",
      "ai",
      "ajo",
      "ne",
      "ju",
      "ata",
      "punoj",
      "mësoj",
      "kuptoj",
      "shpjegoj",
      "banoj",
      "qëndroj",
      "filloj",
      "mbaroj",
      "dëgjoj",
      "lexoj",
      "shkruaj",
      "sot",
      "nesër",
      "këtu",
      "në shtëpi",
      "në punë"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p><b>Neu:</b> Präsens regelmäßiger Verben auf <b>-oj</b>. Du übst kurze Alltagssätze mit unë/ti/ai/ajo/ne/ju/ata.</p><p><b>Ziel:</b> Du kannst sagen, was du arbeitest, lernst, verstehst, beginnst oder erklärst.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik kurz",
        "html": "<p>Viele regelmäßige Verben enden in der Grundform auf <b>-oj</b>: punoj, mësoj, kuptoj. Im Präsens ändert sich die Endung je nach Person.</p><ul><li>unë punoj – ich arbeite</li><li>ti punon – du arbeitest</li><li>ai/ajo punon – er/sie arbeitet</li><li>ne punojmë – wir arbeiten</li><li>ju punoni – ihr/Sie arbeitet/arbeiten</li><li>ata/ato punojnë – sie arbeiten</li></ul><p>Typische Fehler: <b>ne punoj</b> → richtig: <b>ne punojmë</b>; <b>ju punon</b> → richtig: <b>ju punoni</b>.</p>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen: Antworte kurz auf Albanisch",
        "items": [
          "A punon sot?",
          "Ku banon?",
          "A mëson shqip?",
          "Çfarë lexon?",
          "A kupton mirë?"
        ],
        "solutions": [
          "Po, punoj sot. / Jo, nuk punoj sot.",
          "Banoj në ...",
          "Po, mësoj shqip.",
          "Lexoj një libër / një fjali.",
          "Po, kuptoj mirë. / Jo, nuk kuptoj mirë."
        ]
      },
      {
        "id": "a",
        "type": "tf",
        "title": "4. Richtig oder falsch?",
        "context": "Ardiani mëson shqip. Ai punon në zyrë dhe banon në qytet. Sot ai lexon një fjali dhe shkruan një përgjigje.",
        "items": [
          {
            "s": "Ardiani mëson shqip.",
            "a": "po"
          },
          {
            "s": "Ai punon në shkollë.",
            "a": "jo"
          },
          {
            "s": "Ai banon në qytet.",
            "a": "po"
          },
          {
            "s": "Sot ai lexon një fjalë.",
            "a": "jo"
          },
          {
            "s": "Ai shkruan një përgjigje.",
            "a": "po"
          },
          {
            "s": "Ai nuk punon.",
            "a": "jo"
          }
        ]
      },
      {
        "id": "b",
        "type": "cloze",
        "title": "5. Lückensätze: Setze die richtige Verbform ein",
        "items": [
          {
            "q": "Unë ___ (punoj) në zyrë.",
            "a": "punoj"
          },
          {
            "q": "Ti ___ (mësoj) shqip.",
            "a": "mëson"
          },
          {
            "q": "Ajo ___ (kuptoj) fjalën.",
            "a": "kupton"
          },
          {
            "q": "Ne ___ (lexoj) në shtëpi.",
            "a": "lexojmë"
          },
          {
            "q": "Ju ___ (shpjegoj) rregullin.",
            "a": "shpjegoni"
          },
          {
            "q": "Ata ___ (punoj) sot.",
            "a": "punojnë"
          },
          {
            "q": "Unë ___ (banoj) këtu.",
            "a": "banoj"
          },
          {
            "q": "Ne ___ (filloj) tani.",
            "a": "fillojmë"
          }
        ]
      },
      {
        "id": "c",
        "type": "text",
        "title": "6. Deutsch → Albanisch",
        "items": [
          "Ich arbeite heute.",
          "Du lernst Albanisch.",
          "Wir wohnen hier.",
          "Sie erklären die Regel.",
          "Ich verstehe den Satz.",
          "Ihr schreibt eine Antwort."
        ],
        "solutions": [
          "Unë punoj sot.",
          "Ti mëson shqip.",
          "Ne banojmë këtu.",
          "Ata/Ato shpjegojnë rregullin.",
          "Unë kuptoj fjalinë.",
          "Ju shkruani një përgjigje."
        ]
      },
      {
        "id": "d",
        "type": "text",
        "title": "7. Fehler finden und korrigieren",
        "items": [
          "Unë punon sot.",
          "Ne mësoj shqip.",
          "Ju kupton fjalën.",
          "Ata punoj në zyrë.",
          "Ti shpjegoj rregullin.",
          "Ajo lexoj një libër."
        ],
        "solutions": [
          "Unë punoj sot.",
          "Ne mësojmë shqip.",
          "Ju kuptoni fjalën.",
          "Ata punojnë në zyrë.",
          "Ti shpjegon rregullin.",
          "Ajo lexon një libër."
        ]
      },
      {
        "id": "e",
        "type": "match",
        "title": "8. Kombinieren",
        "left": [
          "Unë punoj",
          "Ti mëson",
          "Ne banojmë",
          "Ju shpjegoni",
          "Ata lexojnë",
          "Ajo shkruan"
        ],
        "right": [
          "në zyrë.",
          "shqip.",
          "këtu.",
          "rregullin.",
          "një libër.",
          "një përgjigje."
        ],
        "solutions": [
          "Unë punoj në zyrë.",
          "Ti mëson shqip.",
          "Ne banojmë këtu.",
          "Ju shpjegoni rregullin.",
          "Ata lexojnë një libër.",
          "Ajo shkruan një përgjigje."
        ]
      },
      {
        "id": "f",
        "type": "text",
        "title": "9. Satzbau aktiv: Bilde kurze Sätze",
        "items": [
          "unë / punoj / sot",
          "ne / mësoj / shqip",
          "ti / kuptoj / fjali",
          "ju / shkruaj / përgjigje",
          "ata / banoj / qytet"
        ],
        "solutions": [
          "Unë punoj sot.",
          "Ne mësojmë shqip.",
          "Ti kupton fjalinë.",
          "Ju shkruani një përgjigje.",
          "Ata banojnë në qytet."
        ]
      },
      {
        "id": "g",
        "type": "text",
        "title": "10. Umformungen",
        "items": [
          "Unë punoj sot. → wir",
          "Ti mëson shqip. → Sie/ihr",
          "Ajo lexon. → sie Plural",
          "Unë kuptoj. → negativ",
          "Ju shkruani. → Frage"
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ju mësoni shqip.",
          "Ato/Ata lexojnë.",
          "Unë nuk kuptoj.",
          "A shkruani ju?"
        ]
      },
      {
        "id": "h",
        "type": "dialog",
        "title": "11. Mini-Dialog: in der Sprachschule",
        "lines": [
          "Mësuesi: Mirëdita! A mëson shqip?",
          "Ti: ___",
          "Mësuesi: Ku banon?",
          "Ti: ___",
          "Mësuesi: A kupton rregullin?",
          "Ti: ___",
          "Mësuesi: Shumë mirë. Çfarë shkruan tani?",
          "Ti: ___",
          "Mësuesi: A punon sot?",
          "Ti: ___"
        ],
        "solutions": [
          "Po, mësoj shqip.",
          "Banoj në ...",
          "Po, kuptoj rregullin.",
          "Shkruaj një përgjigje.",
          "Po, punoj sot. / Jo, nuk punoj sot."
        ]
      },
      {
        "id": "i",
        "type": "text",
        "title": "12. Albanisch → Deutsch",
        "items": [
          "Unë punoj në zyrë.",
          "Ti mëson shqip.",
          "Ne banojmë këtu.",
          "Ju shpjegoni rregullin.",
          "Ata lexojnë një libër."
        ],
        "solutions": [
          "Ich arbeite im Büro.",
          "Du lernst Albanisch.",
          "Wir wohnen hier.",
          "Ihr/Sie erklärt/erklären die Regel.",
          "Sie lesen ein Buch."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "13. Abschluss",
        "html": "<p><b>Merke:</b> -oj-Verben: unë -oj, ti/ai/ajo -on, ne -ojmë, ju -oni, ata/ato -ojnë.</p><p><b>Hausaufgaben:</b> 1) Schreibe 5 Sätze mit unë. 2) Forme sie in ne um. 3) Sprich 3 Sätze laut vor.</p>"
      }
    ]
  },
  {
    "id": 2,
    "title": "Sitzung 2: Unregelmäßige Verben im Präsens",
    "review": "Präsens regelmäßiger -oj-Verben",
    "newTopicId": 2,
    "tags": [
      "Alltag",
      "Essen",
      "Reisen"
    ],
    "vocab": [
      "jam",
      "kam",
      "vij",
      "shkoj",
      "ha",
      "pi",
      "di",
      "dua",
      "dëshiroj",
      "mund",
      "shkojmë",
      "vijmë",
      "bukë",
      "ujë",
      "kafe",
      "sot",
      "nesër",
      "në shtëpi",
      "në punë"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p><b>Wiederholung:</b> -oj-Verben. <b>Neu:</b> wichtige unregelmäßige Verben: jam, kam, vij, shkoj, ha, pi, di, dua.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik kurz",
        "html": "<ul><li>jam – ich bin, je – du bist, është – er/sie ist, jemi – wir sind, jeni – ihr/Sie seid/sind, janë – sie sind</li><li>kam – ich habe, ke, ka, kemi, keni, kanë</li><li>shkoj – ich gehe, shkon, shkon, shkojmë, shkoni, shkojnë</li><li>vij – ich komme, vjen, vjen, vijmë, vini, vijnë</li></ul>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "A je në shtëpi?",
          "A ke kafe?",
          "Ku shkon sot?",
          "A vjen nesër?",
          "Çfarë pi?"
        ],
        "solutions": [
          "Po, jam në shtëpi.",
          "Po, kam kafe.",
          "Shkoj në punë / në qytet.",
          "Po, vij nesër.",
          "Pi ujë/kafe."
        ]
      },
      {
        "id": "b",
        "type": "cloze",
        "title": "4. Lückensätze",
        "items": [
          {
            "q": "Unë ___ në shtëpi. (jam)",
            "a": "jam"
          },
          {
            "q": "Ti ___ ujë. (kam)",
            "a": "ke"
          },
          {
            "q": "Ajo ___ në punë. (shkoj)",
            "a": "shkon"
          },
          {
            "q": "Ne ___ nga Gjermania. (vij)",
            "a": "vijmë"
          },
          {
            "q": "Ju ___ bukë. (ha)",
            "a": "hani"
          },
          {
            "q": "Ata ___ kafe. (pi)",
            "a": "pinë"
          },
          {
            "q": "Unë ___ shqip. (di)",
            "a": "di"
          },
          {
            "q": "Ne ___ të mësojmë. (dua)",
            "a": "duam"
          }
        ]
      },
      {
        "id": "c",
        "type": "text",
        "title": "5. Deutsch → Albanisch",
        "items": [
          "Ich bin zu Hause.",
          "Wir gehen morgen.",
          "Du hast Wasser.",
          "Sie kommen heute.",
          "Ich trinke Kaffee.",
          "Wir wollen Albanisch lernen."
        ],
        "solutions": [
          "Unë jam në shtëpi.",
          "Ne shkojmë nesër.",
          "Ti ke ujë.",
          "Ata/Ato vijnë sot.",
          "Unë pi kafe.",
          "Ne duam të mësojmë shqip."
        ]
      },
      {
        "id": "d",
        "type": "text",
        "title": "6. Fehler korrigieren",
        "items": [
          "Unë është në shtëpi.",
          "Ti kam ujë.",
          "Ne shkon sot.",
          "Ju vijmë nesër.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Unë jam në shtëpi.",
          "Ti ke ujë.",
          "Ne shkojmë sot.",
          "Ju vini nesër.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "e",
        "type": "match",
        "title": "7. Kombinieren",
        "left": [
          "Unë jam",
          "Ti ke",
          "Ne shkojmë",
          "Ju vini",
          "Ata pinë"
        ],
        "right": [
          "në shtëpi.",
          "ujë.",
          "në qytet.",
          "nesër.",
          "kafe."
        ],
        "solutions": [
          "Unë jam në shtëpi.",
          "Ti ke ujë.",
          "Ne shkojmë në qytet.",
          "Ju vini nesër.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "f",
        "type": "dialog",
        "title": "8. Mini-Dialog: Besuch",
        "lines": [
          "A: Mirëdita! A je në shtëpi?",
          "Ti: ___",
          "A: A ke kafe?",
          "Ti: ___",
          "A: Ku shkojmë sot?",
          "Ti: ___",
          "A: A vjen nesër?",
          "Ti: ___"
        ],
        "solutions": [
          "Po, jam në shtëpi.",
          "Po, kam kafe.",
          "Shkojmë në qytet.",
          "Po, vij nesër."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Merke:</b> Diese Verben musst du häufig wiederholen. Sie sind sehr nützlich im Alltag.</p><p><b>Hausaufgabe:</b> Schreibe 4 Sätze mit jam/kam und 4 Sätze mit shkoj/vij.</p>"
      }
    ]
  },
  {
    "id": 3,
    "title": "Sitzung 3: Einfacher Hauptsatz",
    "review": "Unregelmäßige Verben im Präsens",
    "newTopicId": 3,
    "tags": [
      "Satzbau",
      "Verneinung",
      "Fragen"
    ],
    "vocab": [
      "unë",
      "ti",
      "ai",
      "ajo",
      "ne",
      "ju",
      "nuk",
      "a",
      "sot",
      "nesër",
      "punoj",
      "shkoj",
      "vij",
      "kam",
      "jam",
      "mësoj",
      "dyqan",
      "shtëpi",
      "qytet",
      "punë"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p><b>Neu:</b> einfacher Hauptsatz: Aussage, Frage und Verneinung. Beispiel: <b>Unë nuk shkoj sot.</b></p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik kurz",
        "html": "<ul><li>Aussage: Unë shkoj në punë.</li><li>Verneinung: Unë <b>nuk</b> shkoj në punë.</li><li>Ja/Nein-Frage: <b>A</b> shkon ti në punë?</li><li>Fragewort: Ku shkon ti?</li></ul>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "A shkon sot në punë?",
          "Ku je tani?",
          "A ke kohë?",
          "Çfarë mëson?",
          "A vjen nesër?"
        ],
        "solutions": [
          "Po/Jo ...",
          "Jam në ...",
          "Po, kam kohë. / Jo, nuk kam kohë.",
          "Mësoj shqip.",
          "Po, vij nesër. / Jo, nuk vij nesër."
        ]
      },
      {
        "id": "b",
        "type": "cloze",
        "title": "4. Lücken: nuk oder a oder Verbform",
        "items": [
          {
            "q": "Unë ___ shkoj sot. (nicht)",
            "a": "nuk"
          },
          {
            "q": "___ punon ti nesër? (Fragepartikel)",
            "a": "A"
          },
          {
            "q": "Ne ___ në qytet. (shkoj)",
            "a": "shkojmë"
          },
          {
            "q": "Ti ___ ke kohë. (nicht)",
            "a": "nuk"
          },
          {
            "q": "___ vjen ajo sot?",
            "a": "A"
          },
          {
            "q": "Ata ___ punojnë nesër. (nicht)",
            "a": "nuk"
          }
        ]
      },
      {
        "id": "c",
        "type": "text",
        "title": "5. Aussage → Frage / negativ",
        "items": [
          "Unë shkoj në dyqan. → Frage",
          "Ti ke kohë. → negativ",
          "Ne punojmë sot. → Frage",
          "Ajo vjen nesër. → negativ",
          "Ju mësoni shqip. → Frage"
        ],
        "solutions": [
          "A shkoj unë në dyqan?",
          "Ti nuk ke kohë.",
          "A punojmë ne sot?",
          "Ajo nuk vjen nesër.",
          "A mësoni ju shqip?"
        ]
      },
      {
        "id": "d",
        "type": "text",
        "title": "6. Deutsch → Albanisch",
        "items": [
          "Ich gehe heute nicht.",
          "Gehst du morgen zur Arbeit?",
          "Wir sind zu Hause.",
          "Sie kommen nicht.",
          "Lernst du Albanisch?"
        ],
        "solutions": [
          "Unë nuk shkoj sot.",
          "A shkon ti nesër në punë?",
          "Ne jemi në shtëpi.",
          "Ata/Ato nuk vijnë.",
          "A mëson ti shqip?"
        ]
      },
      {
        "id": "e",
        "type": "text",
        "title": "7. Fehler korrigieren",
        "items": [
          "Unë shkoj nuk sot.",
          "Ti a punon?",
          "Ne nuk jemi në shtëpi.",
          "Ajo nuk vjen nesër.",
          "A ju mësoni shqip?"
        ],
        "solutions": [
          "Unë nuk shkoj sot.",
          "A punon ti?",
          "Ne nuk jemi në shtëpi.",
          "Ajo nuk vjen nesër.",
          "A mësoni ju shqip?"
        ]
      },
      {
        "id": "f",
        "type": "dialog",
        "title": "8. Mini-Dialog: Weg zum Laden",
        "lines": [
          "A: A shkon në dyqan sot?",
          "Ti: ___",
          "A: Ku është dyqani?",
          "Ti: ___",
          "A: A ke para?",
          "Ti: ___",
          "A: A vjen edhe unë?",
          "Ti: ___"
        ],
        "solutions": [
          "Po, shkoj në dyqan sot.",
          "Dyqani është këtu/atje.",
          "Po, kam para. / Jo, nuk kam para.",
          "Po, eja. / Jo, nuk vjen."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Merke:</b> <b>nuk</b> steht normalerweise vor dem Verb. <b>A</b> macht aus einer Aussage oft eine Ja/Nein-Frage.</p><p><b>Hausaufgabe:</b> Schreibe 5 Aussagen, mache daraus 5 Fragen und 5 negative Sätze.</p>"
      }
    ]
  }
];
