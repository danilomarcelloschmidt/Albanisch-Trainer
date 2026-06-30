const TOPICS = [
  {
    "id": 1,
    "title": "Präsens regelmäßiger Verben I: -oj-Verben",
    "focus": "Konjugation und Alltagssätze mit häufigen Verben",
    "examples": "punoj, mësoj, kuptoj, shpjegoj"
  },
  {
    "id": 2,
    "title": "Präsens regelmäßiger Verben II: weitere häufige Muster",
    "focus": "Verben wie shkoj, dëgjoj, lexoj, shkruaj, jetoj, banoj",
    "examples": "shkoj, shkon, shkojmë"
  },
  {
    "id": 3,
    "title": "Präsens häufiger einsilbiger Verben",
    "focus": "kurze Verben mit eigenen Mustern",
    "examples": "ha, pi, di, fle, rri"
  },
  {
    "id": 4,
    "title": "Präsens: jam und kam",
    "focus": "sein/haben in Alltagssätzen",
    "examples": "jam në shtëpi, kam kohë"
  },
  {
    "id": 5,
    "title": "Präsens: dua, mund, duhet, më duhet",
    "focus": "wollen, können, müssen, brauchen",
    "examples": "dua të shkoj, më duhet ndihmë"
  },
  {
    "id": 6,
    "title": "Präsens: Verben mit Stammwechsel / schwierigen Formen I",
    "focus": "wichtige häufige Verben aktiv üben",
    "examples": "them, jap, marr, dal"
  },
  {
    "id": 7,
    "title": "Präsens: Verben mit Stammwechsel / schwierigen Formen II",
    "focus": "weitere wichtige Verben",
    "examples": "shoh, vij, gjej, bëj"
  },
  {
    "id": 8,
    "title": "Präsens-Wiederholung gemischt",
    "focus": "regelmäßige + schwierige Verben kontrastieren",
    "examples": "Unë vij, ne vijmë / unë bëj, ne bëjmë"
  },
  {
    "id": 9,
    "title": "Satzbau mit Zeitangaben",
    "focus": "Position von sot, nesër, në mëngjes, shpesh",
    "examples": "Sot punoj. Në mëngjes pi kafe."
  },
  {
    "id": 10,
    "title": "Satzbau mit Ortsangaben",
    "focus": "në, te, këtu, atje, afër, larg",
    "examples": "Shkoj në qytet. Jam te mjeku."
  },
  {
    "id": 11,
    "title": "Satzbau mit mehreren Ergänzungen",
    "focus": "Wer macht was wann/wo/mit wem?",
    "examples": "Sot shkoj në treg me gruan time."
  },
  {
    "id": 12,
    "title": "Verneinung mit nuk",
    "focus": "Negation in Präsenssätzen",
    "examples": "Nuk kuptoj gjithçka."
  },
  {
    "id": 13,
    "title": "Ja/Nein-Fragen mit a",
    "focus": "einfache Entscheidungsfragen",
    "examples": "A kupton shqip?"
  },
  {
    "id": 14,
    "title": "Fragewörter I",
    "focus": "kush, ku, kur, si",
    "examples": "Ku është dyqani?"
  },
  {
    "id": 15,
    "title": "Fragewörter II",
    "focus": "çfarë, sa, pse, cili/cila",
    "examples": "Çfarë dëshironi? Sa kushton?"
  },
  {
    "id": 16,
    "title": "Akkusativ Singular I: feminine Nomen",
    "focus": "bestimmte feminine Objektformen",
    "examples": "gruaja → gruan, familja → familjen"
  },
  {
    "id": 17,
    "title": "Akkusativ Singular II: maskuline Nomen",
    "focus": "bestimmte maskuline Objektformen",
    "examples": "dyqani → dyqanin, miku → mikun"
  },
  {
    "id": 18,
    "title": "Akkusativ Plural",
    "focus": "Pluralobjekte sicher verwenden",
    "examples": "vajzat, djemtë, fëmijët"
  },
  {
    "id": 19,
    "title": "Nominativ vs. Akkusativ",
    "focus": "Subjekt und Objekt unterscheiden",
    "examples": "Gruaja punon. Shoh gruan."
  },
  {
    "id": 20,
    "title": "Präposition me + Objektform",
    "focus": "mit wem/was?",
    "examples": "me gruan, me mikun, me familjen"
  },
  {
    "id": 21,
    "title": "Präpositionen në, te, për",
    "focus": "Alltagspräpositionen mit Nomen",
    "examples": "në dyqan, te mjeku, për punë"
  },
  {
    "id": 22,
    "title": "Präpositionen der Richtung und Lage",
    "focus": "Wegbeschreibung",
    "examples": "djathtas, majtas, drejt, përballë, prapa"
  },
  {
    "id": 23,
    "title": "Possessivpronomen Singular I: mein/dein, Nominativ",
    "focus": "Grundformen",
    "examples": "burri im, gruaja ime, burri yt, gruaja jote"
  },
  {
    "id": 24,
    "title": "Possessivpronomen Singular II: mein/dein, Akkusativ",
    "focus": "Objektformen",
    "examples": "burrin tim, gruan time, burrin tënd, gruan tënde"
  },
  {
    "id": 25,
    "title": "Possessivpronomen Singular III: mein/dein, Genitiv/Dativ/Ablativ",
    "focus": "tiefere Fallformen",
    "examples": "gruas sime, burrit tim, gruas sate"
  },
  {
    "id": 26,
    "title": "Possessivpronomen Singular IV: sein/ihr",
    "focus": "Formen von i tij/e tij, i saj/e saj",
    "examples": "babai i saj, gruaja e tij"
  },
  {
    "id": 27,
    "title": "Possessivpronomen Singular V: unser/euer/ihr",
    "focus": "ynë/jonë, juaj, tyre",
    "examples": "familja jonë, shtëpia juaj"
  },
  {
    "id": 28,
    "title": "Possessivpronomen Plural I: mein/dein",
    "focus": "Pluralformen",
    "examples": "djemtë e mi, vajzat e mia, djemtë e tu"
  },
  {
    "id": 29,
    "title": "Possessivpronomen Plural II: sein/ihr",
    "focus": "Plural mit tij/saj",
    "examples": "prindërit e saj, fëmijët e tij"
  },
  {
    "id": 30,
    "title": "Possessivpronomen Plural III: unser/euer/ihr",
    "focus": "Pluralformen von tanë/tona, tuaj/tuaja, tyre",
    "examples": "vajzat tona, djemtë tuaj, fëmijët e tyre"
  },
  {
    "id": 31,
    "title": "Possessivpronomen mit Genitiv",
    "focus": "Besitzketten",
    "examples": "familja e gruas sime"
  },
  {
    "id": 32,
    "title": "Possessivpronomen mit Dativ und Ablativ",
    "focus": "wem/von wem mit Besitz",
    "examples": "i flas gruas sime, prej familjes sime"
  },
  {
    "id": 33,
    "title": "Genitiv Singular I: maskuline Nomen",
    "focus": "Besitz/Zuordnung",
    "examples": "libri i mikut, babai i djalit"
  },
  {
    "id": 34,
    "title": "Genitiv Singular II: feminine Nomen",
    "focus": "feminine Genitivformen",
    "examples": "shtëpia e nënës, familja e gruas"
  },
  {
    "id": 35,
    "title": "Genitiv Plural",
    "focus": "Besitz im Plural",
    "examples": "shtëpia e prindërve, çantat e fëmijëve"
  },
  {
    "id": 36,
    "title": "Gelenkartikel im Genitiv: i/e/të/së",
    "focus": "welcher kleine Artikel steht vor dem Genitiv?",
    "examples": "babai i…, familja e…, librat e…"
  },
  {
    "id": 37,
    "title": "Genitiv mit zusammengesetzten Begriffen",
    "focus": "typische Nominalgruppen",
    "examples": "skuadra e futbollit, çanta e shkollës"
  },
  {
    "id": 38,
    "title": "Genitiv-Wiederholung aktiv",
    "focus": "eigene Sätze mit Besitz/Zuordnung bilden",
    "examples": "shtëpia e mikut tim"
  },
  {
    "id": 39,
    "title": "Dativ Singular I",
    "focus": "Wem? einfache Nomen",
    "examples": "i jap mikut, i flas nënës"
  },
  {
    "id": 40,
    "title": "Dativ Singular II mit Kurzpronomen",
    "focus": "i + Dativobjekt",
    "examples": "I jap librin mikut."
  },
  {
    "id": 41,
    "title": "Dativ Plural I",
    "focus": "Wem? Pluralformen",
    "examples": "u flas prindërve"
  },
  {
    "id": 42,
    "title": "Dativ Plural II mit Kurzpronomen",
    "focus": "u + Plural-Dativobjekt",
    "examples": "U jap ujë fëmijëve."
  },
  {
    "id": 43,
    "title": "Ablativ Singular",
    "focus": "von/aus/von … her",
    "examples": "prej mikut, nga qyteti"
  },
  {
    "id": 44,
    "title": "Ablativ Plural",
    "focus": "Pluralformen im Ablativ",
    "examples": "prej prindërve, nga vendet"
  },
  {
    "id": 45,
    "title": "Präpositionen mit Ablativ",
    "focus": "typische Ablativ-Präpositionen",
    "examples": "prej, përveç, nga"
  },
  {
    "id": 46,
    "title": "Fälle gemischt I: Nom./Akk./Gen.",
    "focus": "häufigste drei Fälle vergleichen",
    "examples": "gruaja, gruan, gruas"
  },
  {
    "id": 47,
    "title": "Fälle gemischt II: Dat./Abl.",
    "focus": "Dativ und Ablativ vergleichen",
    "examples": "gruas, prej gruas"
  },
  {
    "id": 48,
    "title": "me vs. më",
    "focus": "mit vs. mich/mir",
    "examples": "me gruan, më ndihmon"
  },
  {
    "id": 49,
    "title": "Akkusativ-Kurzpronomen Singular",
    "focus": "më, të, e",
    "examples": "Ai më njeh. E shoh atë."
  },
  {
    "id": 50,
    "title": "Akkusativ-Kurzpronomen Plural",
    "focus": "na, ju, i",
    "examples": "Ata na shohin. I njoh ata."
  },
  {
    "id": 51,
    "title": "Dativ-Kurzpronomen Singular",
    "focus": "më, të, i",
    "examples": "Më jep librin. I flas asaj."
  },
  {
    "id": 52,
    "title": "Dativ-Kurzpronomen Plural",
    "focus": "na, ju, u",
    "examples": "Na jep bukë. U flas fëmijëve."
  },
  {
    "id": 53,
    "title": "Akkusativ vs. Dativ-Kurzpronomen",
    "focus": "gleiche Formen, andere Funktion",
    "examples": "më sheh vs. më jep"
  },
  {
    "id": 54,
    "title": "Doppelmarkierung Akkusativ I",
    "focus": "bestimmtes Objekt + Kurzpronomen erkennen",
    "examples": "E njoh atë."
  },
  {
    "id": 55,
    "title": "Doppelmarkierung Akkusativ II",
    "focus": "mit bestimmten Nomen",
    "examples": "E takoj vajzën."
  },
  {
    "id": 56,
    "title": "Doppelmarkierung Dativ I",
    "focus": "Dativobjekt + Kurzpronomen",
    "examples": "I jap librin mikut."
  },
  {
    "id": 57,
    "title": "Doppelmarkierung Dativ II",
    "focus": "Plural",
    "examples": "U tregoj rrugën miqve."
  },
  {
    "id": 58,
    "title": "Verschmolzene Kurzpronomen I",
    "focus": "Singular: ma, ta, ia",
    "examples": "Ma jep librin."
  },
  {
    "id": 59,
    "title": "Verschmolzene Kurzpronomen II",
    "focus": "Plural/weitere Formen",
    "examples": "jua, ua, mi, ti"
  },
  {
    "id": 60,
    "title": "Reflexive Verben I: Grundformen",
    "focus": "Konjugation im Präsens",
    "examples": "lahem, lahesh, lahet"
  },
  {
    "id": 61,
    "title": "Reflexive Verben II: Morgenroutine",
    "focus": "Alltagssätze",
    "examples": "zgjohem, lahem, vishem, krihem"
  },
  {
    "id": 62,
    "title": "Reflexive Verben III: normale vs. reflexive Verben",
    "focus": "Bedeutungsunterschied",
    "examples": "laj vs. lahem, vesh vs. vishem"
  },
  {
    "id": 63,
    "title": "Reflexive Verben IV: Verben auf -hem/-em",
    "focus": "Muster unterscheiden",
    "examples": "ngrihem, përgatitem, kthehem"
  },
  {
    "id": 64,
    "title": "Reflexiv/passiv erkennen",
    "focus": "passive Bedeutung nur verstehen",
    "examples": "përdoret, shihet, lahet"
  },
  {
    "id": 65,
    "title": "Gesundheit I: Körperteile + më dhemb",
    "focus": "Schmerzen ausdrücken",
    "examples": "Më dhemb koka."
  },
  {
    "id": 66,
    "title": "Gesundheit II: kam nevojë për / më duhet",
    "focus": "brauchen / nötig sein",
    "examples": "Kam nevojë për ilaçe. Më duhet ndihmë."
  },
  {
    "id": 67,
    "title": "Gesundheit III: Arzt/Apotheke-Dialoge",
    "focus": "typische Fragen und Antworten",
    "examples": "Çfarë të dhemb? Të shkuara!"
  },
  {
    "id": 68,
    "title": "Imperativ Singular I",
    "focus": "Grundformen",
    "examples": "Shih! Prit! Eja!"
  },
  {
    "id": 69,
    "title": "Imperativ Singular II mit Objekt/Kurzpronomen",
    "focus": "Aufforderungen mit Ergänzung",
    "examples": "Ma jep! Tregomë!"
  },
  {
    "id": 70,
    "title": "Imperativ Plural/Höflichkeitsform",
    "focus": "höfliche Aufforderungen",
    "examples": "Shihni! Prisni! Urdhëroni!"
  },
  {
    "id": 71,
    "title": "Negativer Imperativ mit mos",
    "focus": "Verbote",
    "examples": "Mos prit! Mos lëviz!"
  },
  {
    "id": 72,
    "title": "Imperativ im Alltag",
    "focus": "Laden, Arzt, Hotel, Familie",
    "examples": "Firmosni këtu! Prit pak!"
  },
  {
    "id": 73,
    "title": "Konnektoren I: Basis",
    "focus": "einfache Verbindung",
    "examples": "dhe, por, ose"
  },
  {
    "id": 74,
    "title": "Konnektoren II: Grund/Folge",
    "focus": "Begründung und Folge",
    "examples": "sepse, prandaj, ndaj"
  },
  {
    "id": 75,
    "title": "Konnektoren III: Gegensatz",
    "focus": "nachdem/während/obwohl vorbereiten",
    "examples": "ndërsa, megjithatë"
  },
  {
    "id": 76,
    "title": "Nebensätze mit që I",
    "focus": "dass-Sätze nach Denken/Sagen/Wissen",
    "examples": "Mendoj që… / Di që…"
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
    "title": "Sitzung 1: Präsens regelmäßiger Verben I: -oj-Verben",
    "review": "Basiswörter",
    "newTopicId": 1,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>Basiswörter</b>. Neues Thema: <b>Präsens regelmäßiger Verben I: -oj-Verben</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p><b>-oj-Verben</b>: sichere Endungen für Alltagssätze.</p><div class=\"tablewrap\"><table><thead><tr><th>Person</th><th>punoj</th><th>mësoj</th><th>Beispiel</th></tr></thead><tbody><tr><td>unë</td><td>punoj</td><td>mësoj</td><td>Unë punoj sot.</td></tr><tr><td>ti</td><td>punon</td><td>mëson</td><td>Ti mëson shqip.</td></tr><tr><td>ai/ajo</td><td>punon</td><td>mëson</td><td>Ajo punon në zyrë.</td></tr><tr><td>ne</td><td>punojmë</td><td>mësojmë</td><td>Ne mësojmë bashkë.</td></tr><tr><td>ju</td><td>punoni</td><td>mësoni</td><td>Ju punoni nesër.</td></tr><tr><td>ata/ato</td><td>punojnë</td><td>mësojnë</td><td>Ata mësojnë fjalë.</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Sot ne ___ (mbaroj) punën herët.",
            "a": "mbarojmë"
          },
          {
            "q": "Ajo ___ (dëgjoj) një këngë.",
            "a": "dëgjon"
          },
          {
            "q": "Ata ___ (mësoj) fjalë të reja.",
            "a": "mësojnë"
          },
          {
            "q": "Ti ___ (kuptoj) pyetjen?",
            "a": "kupton"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Wir lernen heute Albanisch.",
          "Sie verstehen die Frage."
        ],
        "solutions": [
          "Ne mësojmë shqip sot.",
          "Ata/Ato kuptojnë pyetjen."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 2,
    "title": "Sitzung 2: Präsens regelmäßiger Verben II: weitere häufige Muster",
    "review": "-oj-Verben",
    "newTopicId": 2,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>-oj-Verben</b>. Neues Thema: <b>Präsens regelmäßiger Verben II: weitere häufige Muster</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p><b>shkoj</b> wird hier als häufiges weiteres Präsensmuster geübt, nicht als unregelmäßig.</p><div class=\"tablewrap\"><table><thead><tr><th>Verb</th><th>unë</th><th>ti/ai/ajo</th><th>ne</th><th>ju</th><th>ata/ato</th></tr></thead><tbody><tr><td>shkoj</td><td>shkoj</td><td>shkon</td><td>shkojmë</td><td>shkoni</td><td>shkojnë</td></tr><tr><td>lexoj</td><td>lexoj</td><td>lexon</td><td>lexojmë</td><td>lexoni</td><td>lexojnë</td></tr><tr><td>dëgjoj</td><td>dëgjoj</td><td>dëgjon</td><td>dëgjojmë</td><td>dëgjoni</td><td>dëgjojnë</td></tr><tr><td>shkruaj</td><td>shkruaj</td><td>shkruan</td><td>shkruajmë</td><td>shkruani</td><td>shkruajnë</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Ajo ___ (shkruaj) një fjalë.",
            "a": "shkruan"
          },
          {
            "q": "Ju ___ (shkoj) në hotel sot?",
            "a": "shkoni"
          },
          {
            "q": "Unë ___ (lexoj) në mbrëmje.",
            "a": "lexoj"
          },
          {
            "q": "Ata ___ (dëgjoj) radio.",
            "a": "dëgjojnë"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Wir gehen in die Stadt.",
          "Sie liest ein Buch."
        ],
        "solutions": [
          "Ne shkojmë në qytet.",
          "Ajo lexon një libër."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 3,
    "title": "Sitzung 3: Präsens häufiger einsilbiger Verben",
    "review": "weitere Muster",
    "newTopicId": 3,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>weitere Muster</b>. Neues Thema: <b>Präsens häufiger einsilbiger Verben</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p>Kurze Verben haben eigene Muster.</p><div class=\"tablewrap\"><table><thead><tr><th>Verb</th><th>unë</th><th>ti/ai/ajo</th><th>ne</th><th>ju</th><th>ata/ato</th></tr></thead><tbody><tr><td>ha</td><td>ha</td><td>ha</td><td>hamë</td><td>hani</td><td>hanë</td></tr><tr><td>pi</td><td>pi</td><td>pi</td><td>pimë</td><td>pini</td><td>pinë</td></tr><tr><td>di</td><td>di</td><td>di</td><td>dimë</td><td>dini</td><td>dinë</td></tr><tr><td>fle</td><td>fle</td><td>fle</td><td>flemë</td><td>flini</td><td>flenë</td></tr><tr><td>rri</td><td>rri</td><td>rri</td><td>rrimë</td><td>rrini</td><td>rrinë</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Në mëngjes unë ___ kafe. (pi)",
            "a": "pi"
          },
          {
            "q": "Fëmijët ___ herët. (fle)",
            "a": "flenë"
          },
          {
            "q": "Ti ___ ku është dyqani? (di)",
            "a": "di"
          },
          {
            "q": "Ne ___ në shtëpi sot. (rri)",
            "a": "rrimë"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Wir trinken Wasser.",
          "Sie essen Brot."
        ],
        "solutions": [
          "Ne pimë ujë.",
          "Ata/Ato hanë bukë."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 4,
    "title": "Sitzung 4: Präsens: jam und kam",
    "review": "einsilbige Verben",
    "newTopicId": 4,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>einsilbige Verben</b>. Neues Thema: <b>Präsens: jam und kam</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p><b>jam</b> und <b>kam</b> brauchst du ständig.</p><div class=\"tablewrap\"><table><thead><tr><th>Person</th><th>jam</th><th>kam</th></tr></thead><tbody><tr><td>unë</td><td>jam</td><td>kam</td></tr><tr><td>ti</td><td>je</td><td>ke</td></tr><tr><td>ai/ajo</td><td>është</td><td>ka</td></tr><tr><td>ne</td><td>jemi</td><td>kemi</td></tr><tr><td>ju</td><td>jeni</td><td>keni</td></tr><tr><td>ata/ato</td><td>janë</td><td>kanë</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Ajo ___ në farmaci. (jam)",
            "a": "është"
          },
          {
            "q": "Ne ___ kohë nesër. (kam)",
            "a": "kemi"
          },
          {
            "q": "Ju ___ në hotel? (jam)",
            "a": "jeni"
          },
          {
            "q": "Ata ___ para. (kam)",
            "a": "kanë"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Ich bin zu Hause.",
          "Hast du Zeit?"
        ],
        "solutions": [
          "Unë jam në shtëpi.",
          "A ke kohë?"
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 5,
    "title": "Sitzung 5: Präsens: dua, mund, duhet, më duhet",
    "review": "jam und kam",
    "newTopicId": 5,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>jam und kam</b>. Neues Thema: <b>Präsens: dua, mund, duhet, më duhet</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p>Modalität: wollen, können, müssen, brauchen.</p><div class=\"tablewrap\"><table><thead><tr><th>Ausdruck</th><th>Muster</th><th>Beispiel</th></tr></thead><tbody><tr><td>dua</td><td>dua të + Verb</td><td>Dua të shkoj.</td></tr><tr><td>mund</td><td>mund të + Verb</td><td>Mund të vij.</td></tr><tr><td>duhet</td><td>duhet të + Verb</td><td>Duhet të punoj.</td></tr><tr><td>më duhet/duhen</td><td>+ Nomen</td><td>Më duhet ndihmë. Më duhen ilaçe.</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Unë ___ të shkoj në qytet. (dua)",
            "a": "dua"
          },
          {
            "q": "Ne ___ të punojmë nesër.",
            "a": "duhet"
          },
          {
            "q": "A ___ të më ndihmosh?",
            "a": "mund"
          },
          {
            "q": "Më ___ ilaçe.",
            "a": "duhen"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Ich möchte Kaffee trinken.",
          "Ich brauche Medikamente."
        ],
        "solutions": [
          "Dua të pi kafe.",
          "Më duhen ilaçe."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 6,
    "title": "Sitzung 6: Präsens: Verben mit Stammwechsel / schwierigen Formen I",
    "review": "Modalverben",
    "newTopicId": 6,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>Modalverben</b>. Neues Thema: <b>Präsens: Verben mit Stammwechsel / schwierigen Formen I</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p>Schwierige Formen I.</p><div class=\"tablewrap\"><table><thead><tr><th>Verb</th><th>unë</th><th>ti/ai/ajo</th><th>ne</th><th>ju</th><th>ata/ato</th></tr></thead><tbody><tr><td>them</td><td>them</td><td>thua/thotë</td><td>themi</td><td>thoni</td><td>thonë</td></tr><tr><td>jap</td><td>jap</td><td>jep</td><td>japim</td><td>jepni</td><td>japin</td></tr><tr><td>marr</td><td>marr</td><td>merr</td><td>marrim</td><td>merrni</td><td>marrin</td></tr><tr><td>dal</td><td>dal</td><td>del</td><td>dalim</td><td>dilni</td><td>dalin</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Unë ___ të vërtetën. (them)",
            "a": "them"
          },
          {
            "q": "Ti ___ librin. (marr)",
            "a": "merr"
          },
          {
            "q": "Ajo ___ bukë fëmijës. (jap)",
            "a": "jep"
          },
          {
            "q": "Ne ___ nga shtëpia. (dal)",
            "a": "dalim"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Ich sage die Antwort.",
          "Du nimmst das Buch."
        ],
        "solutions": [
          "Unë them përgjigjen.",
          "Ti merr librin."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 7,
    "title": "Sitzung 7: Präsens: Verben mit Stammwechsel / schwierigen Formen II",
    "review": "schwierige Formen I",
    "newTopicId": 7,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>schwierige Formen I</b>. Neues Thema: <b>Präsens: Verben mit Stammwechsel / schwierigen Formen II</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p>Schwierige Formen II.</p><div class=\"tablewrap\"><table><thead><tr><th>Verb</th><th>unë</th><th>ti/ai/ajo</th><th>ne</th><th>ju</th><th>ata/ato</th></tr></thead><tbody><tr><td>shoh</td><td>shoh</td><td>sheh</td><td>shohim</td><td>shihni</td><td>shohin</td></tr><tr><td>vij</td><td>vij</td><td>vjen</td><td>vijmë</td><td>vini</td><td>vijnë</td></tr><tr><td>gjej</td><td>gjej</td><td>gjen</td><td>gjejmë</td><td>gjeni</td><td>gjejnë</td></tr><tr><td>bëj</td><td>bëj</td><td>bën</td><td>bëjmë</td><td>bëni</td><td>bëjnë</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Ajo ___ një mace. (shoh)",
            "a": "sheh"
          },
          {
            "q": "Ne ___ nesër. (vij)",
            "a": "vijmë"
          },
          {
            "q": "Ti ___ çelësin? (gjej)",
            "a": "gjen"
          },
          {
            "q": "Ata ___ sport. (bëj)",
            "a": "bëjnë"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Wir kommen morgen.",
          "Sie machen Sport."
        ],
        "solutions": [
          "Ne vijmë nesër.",
          "Ata/Ato bëjnë sport."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  },
  {
    "id": 8,
    "title": "Sitzung 8: Präsens-Wiederholung gemischt",
    "review": "alle Präsensgruppen",
    "newTopicId": 8,
    "tags": [
      "A2",
      "Präsens"
    ],
    "exercises": [
      {
        "id": "overview",
        "type": "info",
        "title": "1. Überblick",
        "html": "<p>Wiederholung: <b>alle Präsensgruppen</b>. Neues Thema: <b>Präsens-Wiederholung gemischt</b>.</p>"
      },
      {
        "id": "grammar",
        "type": "info",
        "title": "2. Grammatik ausführlicher",
        "html": "<p>Gemischte Wiederholung.</p><div class=\"tablewrap\"><table><thead><tr><th>Gruppe</th><th>Beispiele</th><th>Achte auf</th></tr></thead><tbody><tr><td>regelmäßig</td><td>punoj, mësoj, lexoj</td><td>punojmë, mësoni, lexojnë</td></tr><tr><td>einsilbig</td><td>ha, pi, di</td><td>hamë, pini, dinë</td></tr><tr><td>schwierig</td><td>vij, bëj, shoh</td><td>vjen, bëjmë, shihni</td></tr></tbody></table></div>"
      },
      {
        "id": "warmup",
        "type": "text",
        "title": "3. Aufwärmen",
        "items": [
          "Çfarë bën sot?",
          "Ku je tani?",
          "A ke kohë?"
        ],
        "solutions": [
          "Sot punoj / mësoj.",
          "Jam në shtëpi / në punë.",
          "Po, kam kohë. / Jo, nuk kam kohë."
        ]
      },
      {
        "id": "cloze",
        "type": "cloze",
        "title": "4. Lücken gemischt",
        "items": [
          {
            "q": "Ne ___ në qytet. (vij)",
            "a": "vijmë"
          },
          {
            "q": "Ata ___ shqip. (mësoj)",
            "a": "mësojnë"
          },
          {
            "q": "Ju ___ bukë. (ha)",
            "a": "hani"
          },
          {
            "q": "Ajo ___ një libër. (marr)",
            "a": "merr"
          }
        ]
      },
      {
        "id": "match",
        "type": "match",
        "title": "5. Direkt verbinden statt abschreiben",
        "left": [
          "Në mëngjes",
          "Në qytet",
          "Te mjeku",
          "Në shtëpi",
          "Nesër"
        ],
        "right": [
          "pi kafe.",
          "shkoj në treg.",
          "më duhet ndihmë.",
          "lexoj një libër.",
          "vij herët."
        ],
        "solutions": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "mcq",
        "type": "mcq",
        "title": "6. Multiple Choice",
        "items": [
          {
            "q": "Ne ___ sot.",
            "options": [
              "punoj",
              "punojmë",
              "punojnë"
            ],
            "a": "punojmë"
          },
          {
            "q": "Ajo ___ në shtëpi.",
            "options": [
              "jam",
              "është",
              "jemi"
            ],
            "a": "është"
          },
          {
            "q": "Ju ___ ujë.",
            "options": [
              "keni",
              "ka",
              "kam"
            ],
            "a": "keni"
          }
        ]
      },
      {
        "id": "translate",
        "type": "text",
        "title": "7. Deutsch → Albanisch",
        "items": [
          "Wir arbeiten heute.",
          "Sie trinken coffee."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ata/Ato pinë kafe."
        ]
      },
      {
        "id": "error",
        "type": "text",
        "title": "8. Fehler finden",
        "items": [
          "Ne punon sot.",
          "Ti kam kohë.",
          "Ju është në hotel.",
          "Ata pi kafe."
        ],
        "solutions": [
          "Ne punojmë sot.",
          "Ti ke kohë.",
          "Ju jeni në hotel.",
          "Ata pinë kafe."
        ]
      },
      {
        "id": "abschluss",
        "type": "info",
        "title": "9. Abschluss",
        "html": "<p><b>Selbstcheck:</b> Thema als gelernt/wiederholen/schwierig markieren und eine Notiz ergänzen.</p>"
      }
    ]
  }
];
