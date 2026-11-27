import { Chess } from 'chess.js';
import { OPENINGS, TRAPS } from '../data/library.js';
import { isolateChessTokens, localizeOpening, localizeTrap } from '../i18n/ui.js';

const ECO_SUPPLEMENT = [
  { eco: 'B00', name: "King's Pawn Opening", arName: 'افتتاح بيدق الملك', moves: ['e4'] },
  { eco: 'C20', name: "King's Pawn Game", arName: 'دور بيدق الملك', moves: ['e4', 'e5'] },
  { eco: 'C40', name: "King's Knight Opening", arName: 'افتتاح حصان الملك', moves: ['e4', 'e5', 'Nf3'] },
  { eco: 'C44', name: "King's Pawn: Knight's Variation", arName: 'افتتاح بيدق الملك الكلاسيكي', moves: ['e4', 'e5', 'Nf3', 'Nc6'] },
  { eco: 'C50', name: 'Italian Game', arName: 'الافتتاح الإيطالي', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'] },
  { eco: 'C51', name: 'Italian Game: Evans Gambit', arName: 'الافتتاح الإيطالي: غامبيت إيفانز', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4'] },
  { eco: 'C55', name: 'Italian Game: Two Knights Defence', arName: 'الإيطالي: دفاع الحصانين', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6'] },
  { eco: 'C60', name: 'Ruy López (Spanish Opening)', arName: 'روي لوبيز (الافتتاح الإسباني)', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'] },
  { eco: 'C65', name: 'Ruy López: Berlin Defence', arName: 'روي لوبيز: دفاع برلين', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6'] },
  { eco: 'C89', name: 'Ruy López: Marshall Attack', arName: 'روي لوبيز: هجوم مارشال', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5'] },
  { eco: 'C42', name: "Petrov's Defence", arName: 'دفاع بتروف', moves: ['e4', 'e5', 'Nf3', 'Nf6'] },
  { eco: 'C45', name: 'Scotch Game', arName: 'الدور الإسكتلندي', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4'] },
  { eco: 'C47', name: 'Four Knights Game', arName: 'دور الأحصنة الأربعة', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6'] },
  { eco: 'C25', name: 'Vienna Game', arName: 'افتتاح فيينا', moves: ['e4', 'e5', 'Nc3'] },
  { eco: 'C30', name: "King's Gambit", arName: 'غامبيت الملك', moves: ['e4', 'e5', 'f4'] },
  { eco: 'B20', name: 'Sicilian Defence', arName: 'الدفاع الصقلي', moves: ['e4', 'c5'] },
  { eco: 'B22', name: 'Sicilian: Alapin Variation', arName: 'الصقلي: تفريع ألابين', moves: ['e4', 'c5', 'c3'] },
  { eco: 'B23', name: 'Sicilian: Closed', arName: 'الصقلي المغلق', moves: ['e4', 'c5', 'Nc3'] },
  { eco: 'B30', name: 'Sicilian: Rossolimo Variation', arName: 'الصقلي: تفريع روسوليمو', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'Bb5'] },
  { eco: 'B33', name: 'Sicilian: Sveshnikov Variation', arName: 'الصقلي: تفريع سفيشنيكوف', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e5'] },
  { eco: 'B42', name: 'Sicilian: Kan Variation', arName: 'الصقلي: تفريع كان', moves: ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'a6'] },
  { eco: 'B44', name: 'Sicilian: Taimanov Variation', arName: 'الصقلي: تفريع تايمانوف', moves: ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nc6'] },
  { eco: 'B70', name: 'Sicilian: Dragon Variation', arName: 'الصقلي: تفريع التنين', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6'] },
  { eco: 'B80', name: 'Sicilian: Scheveningen', arName: 'الصقلي: تفريع شيفيننغن', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6'] },
  { eco: 'B90', name: 'Sicilian: Najdorf Variation', arName: 'الصقلي: تفريع نايدورف', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6'] },
  { eco: 'C00', name: 'French Defence', arName: 'الدفاع الفرنسي', moves: ['e4', 'e6'] },
  { eco: 'C02', name: 'French: Advance Variation', arName: 'الفرنسي: تفريع التقدّم', moves: ['e4', 'e6', 'd4', 'd5', 'e5'] },
  { eco: 'C03', name: 'French: Tarrasch Variation', arName: 'الفرنسي: تفريع تاراش', moves: ['e4', 'e6', 'd4', 'd5', 'Nd2'] },
  { eco: 'C15', name: 'French: Winawer Variation', arName: 'الفرنسي: تفريع فيناوير', moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4'] },
  { eco: 'B10', name: 'Caro-Kann Defence', arName: 'دفاع كارو-كان', moves: ['e4', 'c6'] },
  { eco: 'B12', name: 'Caro-Kann: Advance Variation', arName: 'كارو-كان: تفريع التقدّم', moves: ['e4', 'c6', 'd4', 'd5', 'e5'] },
  { eco: 'B13', name: 'Caro-Kann: Exchange / Panov', arName: 'كارو-كان: التبديل / بانوف', moves: ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5'] },
  { eco: 'B15', name: 'Caro-Kann: Tartakower', arName: 'كارو-كان: ترتاكوفر', moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nf6', 'Nxf6+', 'exf6'] },
  { eco: 'B01', name: 'Scandinavian Defence', arName: 'الدفاع الإسكندنافي', moves: ['e4', 'd5'] },
  { eco: 'B02', name: "Alekhine's Defence", arName: 'دفاع أليخين', moves: ['e4', 'Nf6'] },
  { eco: 'B06', name: 'Modern Defence', arName: 'الدفاع الحديث', moves: ['e4', 'g6'] },
  { eco: 'B07', name: 'Pirc Defence', arName: 'دفاع بيرتس', moves: ['e4', 'd6', 'd4', 'Nf6', 'Nc3'] },
  { eco: 'A40', name: "Queen's Pawn Opening", arName: 'افتتاح بيدق الوزير', moves: ['d4'] },
  { eco: 'D00', name: "Queen's Pawn Game", arName: 'دور بيدق الوزير', moves: ['d4', 'd5'] },
  { eco: 'D02', name: 'London System', arName: 'نظام لندن', moves: ['d4', 'd5', 'Nf3', 'Nf6', 'Bf4'] },
  { eco: 'D06', name: "Queen's Gambit", arName: 'غامبيت الوزير', moves: ['d4', 'd5', 'c4'] },
  { eco: 'D10', name: 'Slav Defence', arName: 'الدفاع السلافي', moves: ['d4', 'd5', 'c4', 'c6'] },
  { eco: 'D20', name: "Queen's Gambit Accepted", arName: 'غامبيت الوزير المقبول', moves: ['d4', 'd5', 'c4', 'dxc4'] },
  { eco: 'D30', name: "Queen's Gambit Declined", arName: 'غامبيت الوزير المرفوض', moves: ['d4', 'd5', 'c4', 'e6'] },
  { eco: 'D43', name: 'Semi-Slav Defence', arName: 'الدفاع شبه السلافي', moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6'] },
  { eco: 'A45', name: 'Trompowsky Attack', arName: 'هجوم ترومبوفسكي', moves: ['d4', 'Nf6', 'Bg5'] },
  { eco: 'A57', name: 'Benko Gambit', arName: 'غامبيت بينكو', moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'b5'] },
  { eco: 'A60', name: 'Benoni Defence', arName: 'دفاع بينوني', moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'e6'] },
  { eco: 'D80', name: 'Grünfeld Defence', arName: 'دفاع غرونفيلد', moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5'] },
  { eco: 'E00', name: 'Catalan Opening', arName: 'الافتتاح الكاتالاني', moves: ['d4', 'Nf6', 'c4', 'e6', 'g3'] },
  { eco: 'E11', name: 'Bogo-Indian Defence', arName: 'دفاع بوغو-الهندي', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nf3', 'Bb4+'] },
  { eco: 'E12', name: "Queen's Indian Defence", arName: 'دفاع الوزير الهندي', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nf3', 'b6'] },
  { eco: 'E20', name: 'Nimzo-Indian Defence', arName: 'دفاع نيمزو-الهندي', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4'] },
  { eco: 'E60', name: "King's Indian Defence", arName: 'دفاع الملك الهندي', moves: ['d4', 'Nf6', 'c4', 'g6'] },
  { eco: 'A80', name: 'Dutch Defence', arName: 'الدفاع الهولندي', moves: ['d4', 'f5'] },
  { eco: 'A10', name: 'English Opening', arName: 'الافتتاح الإنجليزي', moves: ['c4'] },
  { eco: 'A20', name: 'English: Reversed Sicilian', arName: 'الإنجليزي: الصقلي المعكوس', moves: ['c4', 'e5'] },
  { eco: 'A13', name: 'English: Agincourt Defence', arName: 'الإنجليزي: دفاع أجينكور', moves: ['c4', 'e6'] },
  { eco: 'A04', name: 'Zukertort / Réti Opening', arName: 'افتتاح زوكرتورت / ريتي', moves: ['Nf3'] },
  { eco: 'A09', name: 'Réti Opening', arName: 'افتتاح ريتي', moves: ['Nf3', 'd5', 'c4'] },
  { eco: 'A01', name: 'Nimzo-Larsen Attack', arName: 'هجوم نيمزو-لارسن', moves: ['b3'] },
  { eco: 'A02', name: "Bird's Opening", arName: 'افتتاح بيرد', moves: ['f4'] },
  { eco: 'A00', name: 'Anderssen\'s Opening', arName: 'افتتاح أندرسن', moves: ['a3'] },
  { eco: 'A00', name: 'Polish (Orangutan) Opening', arName: 'الافتتاح البولندي (أورانغوتان)', moves: ['b4'] },
  { eco: 'A00', name: 'King’s Fianchetto Opening', arName: 'افتتاح فيانكيتو الملك', moves: ['g3'] },
  { eco: 'A03', name: 'Bird\'s Opening: Classical', arName: 'افتتاح بيرد الكلاسيكي', moves: ['f4', 'd5'] },
  { eco: 'A06', name: 'Réti: Nimzo-Larsen Attack', arName: 'ريتي: هجوم نيمزو-لارسن', moves: ['Nf3', 'd5', 'b3'] },
  { eco: 'A07', name: 'King\'s Indian Attack', arName: 'الهجوم الهندي للملك', moves: ['Nf3', 'd5', 'g3'] },
  { eco: 'A11', name: 'English: Caro-Kann Defensive System', arName: 'الإنجليزي: نظام كارو-كان', moves: ['c4', 'c6'] },
  { eco: 'A15', name: 'English: Anglo-Indian Defence', arName: 'الإنجليزي: الدفاع الأنجلو-هندي', moves: ['c4', 'Nf6'] },
  { eco: 'A21', name: 'English: Reversed Sicilian (2...d6)', arName: 'الإنجليزي: الصقلي المعكوس', moves: ['c4', 'e5', 'Nc3', 'd6'] },
  { eco: 'A22', name: 'English: Bremen System', arName: 'الإنجليزي: نظام بريمن', moves: ['c4', 'e5', 'Nc3', 'Nf6', 'g3'] },
  { eco: 'A25', name: 'English: Sicilian Reversed Closed', arName: 'الإنجليزي المغلق', moves: ['c4', 'e5', 'Nc3', 'Nc6'] },
  { eco: 'A30', name: 'English: Symmetrical Variation', arName: 'الإنجليزي: التفريع المتماثل', moves: ['c4', 'c5'] },
  { eco: 'A34', name: 'English: Symmetrical Four Knights', arName: 'الإنجليزي: الأحصنة الأربعة المتماثل', moves: ['c4', 'c5', 'Nc3', 'Nc6', 'Nf3', 'Nf6'] },
  { eco: 'A41', name: 'Queen’s Pawn: Wade / Old Indian', arName: 'بيدق الوزير: دفاع ويد / الهندي القديم', moves: ['d4', 'd6'] },
  { eco: 'A43', name: 'Old Benoni Defence', arName: 'دفاع بينوني القديم', moves: ['d4', 'c5'] },
  { eco: 'A46', name: 'Torre Attack', arName: 'هجوم توري', moves: ['d4', 'Nf6', 'Nf3', 'e6', 'Bg5'] },
  { eco: 'A48', name: 'London / Torre vs King’s Indian', arName: 'لندن / توري أمام الهندي للملك', moves: ['d4', 'Nf6', 'Nf3', 'g6', 'Bf4'] },
  { eco: 'A50', name: 'Indian: Queen’s Indian Accelerated', arName: 'الدفاع الهندي: نظام b6 المعجل', moves: ['d4', 'Nf6', 'c4', 'b6'] },
  { eco: 'A52', name: 'Budapest Gambit', arName: 'غامبيت بودابست', moves: ['d4', 'Nf6', 'c4', 'e5', 'dxe5', 'Ng4'] },
  { eco: 'A53', name: 'Old Indian Defence', arName: 'الدفاع الهندي القديم', moves: ['d4', 'Nf6', 'c4', 'd6'] },
  { eco: 'A56', name: 'Benoni: Czech Benoni', arName: 'بينوني التشيكي', moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'e5'] },
  { eco: 'A70', name: 'Modern Benoni: Classical', arName: 'بينوني الحديث الكلاسيكي', moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'e6', 'Nc3', 'exd5', 'cxd5', 'd6', 'e4'] },
  { eco: 'A81', name: 'Dutch Defence: 2.g3', arName: 'الدفاع الهولندي: 2.g3', moves: ['d4', 'f5', 'g3'] },
  { eco: 'A82', name: 'Dutch: Staunton Gambit', arName: 'الهولندي: غامبيت ستونتون', moves: ['d4', 'f5', 'e4'] },
  { eco: 'A87', name: 'Dutch: Leningrad System', arName: 'الهولندي: نظام لينينغراد', moves: ['d4', 'f5', 'g3', 'Nf6', 'Bg2', 'g6'] },
  { eco: 'A90', name: 'Dutch: Classical Stonewall', arName: 'الهولندي: الجدار الحجري', moves: ['d4', 'f5', 'g3', 'Nf6', 'Bg2', 'e6', 'c4', 'd5'] },
  { eco: 'B00', name: 'Owen\'s Defence', arName: 'دفاع أوين', moves: ['e4', 'b6'] },
  { eco: 'B00', name: 'Nimzowitsch Defence', arName: 'دفاع نيمزوفيتش', moves: ['e4', 'Nc6'] },
  { eco: 'B03', name: 'Alekhine\'s Defence: Four Pawns Attack', arName: 'أليخين: هجوم البيادق الأربعة', moves: ['e4', 'Nf6', 'e5', 'Nd5', 'd4', 'd6', 'c4', 'Nb6', 'f4'] },
  { eco: 'B09', name: 'Pirc: Austrian Attack', arName: 'بيرتس: الهجوم النمساوي', moves: ['e4', 'd6', 'd4', 'Nf6', 'Nc3', 'g6', 'f4'] },
  { eco: 'B11', name: 'Caro-Kann: Two Knights Attack', arName: 'كارو-كان: هجوم الحصانين', moves: ['e4', 'c6', 'Nc3', 'd5', 'Nf3'] },
  { eco: 'B14', name: 'Caro-Kann: Panov-Botvinnik Attack', arName: 'كارو-كان: هجوم بانوف-بوتفينيك', moves: ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5', 'c4'] },
  { eco: 'B17', name: 'Caro-Kann: Karpov Variation', arName: 'كارو-كان: تفريع كاربوف', moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nd7'] },
  { eco: 'B18', name: 'Caro-Kann: Classical Variation', arName: 'كارو-كان: التفريع الكلاسيكي', moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5'] },
  { eco: 'B21', name: 'Sicilian: Smith-Morra Gambit', arName: 'الصقلي: غامبيت سميث-مورا', moves: ['e4', 'c5', 'd4', 'cxd4', 'c3'] },
  { eco: 'B23', name: 'Sicilian: Grand Prix Attack', arName: 'الصقلي: هجوم الجائزة الكبرى', moves: ['e4', 'c5', 'Nc3', 'Nc6', 'f4'] },
  { eco: 'B27', name: 'Sicilian: Hyperaccelerated Dragon', arName: 'الصقلي: التنين فائق التعجيل', moves: ['e4', 'c5', 'Nf3', 'g6'] },
  { eco: 'B32', name: 'Sicilian: Kalashnikov Variation', arName: 'الصقلي: تفريع كالاشنيكوف', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'e5'] },
  { eco: 'B35', name: 'Sicilian: Accelerated Dragon', arName: 'الصقلي: التنين المعجل', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6'] },
  { eco: 'B36', name: 'Sicilian: Maróczy Bind', arName: 'الصقلي: قيد ماروتسي', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'c4'] },
  { eco: 'B40', name: 'Sicilian: 2...e6', arName: 'الصقلي: 2...e6', moves: ['e4', 'c5', 'Nf3', 'e6'] },
  { eco: 'B50', name: 'Sicilian: 2...d6', arName: 'الصقلي: 2...d6', moves: ['e4', 'c5', 'Nf3', 'd6'] },
  { eco: 'B52', name: 'Sicilian: Moscow Variation', arName: 'الصقلي: تفريع موسكو', moves: ['e4', 'c5', 'Nf3', 'd6', 'Bb5+'] },
  { eco: 'B60', name: 'Sicilian: Richter-Rauzer Attack', arName: 'الصقلي: هجوم ريختر-راوزر', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6', 'Bg5'] },
  { eco: 'B76', name: 'Sicilian Dragon: Yugoslav Attack', arName: 'صقلي التنين: هجوم يوغوسلافيا', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3'] },
  { eco: 'B81', name: 'Sicilian: Keres Attack', arName: 'الصقلي: هجوم كيريس', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'g4'] },
  { eco: 'B90', name: 'Sicilian Najdorf: English Attack', arName: 'نايدورف: الهجوم الإنجليزي', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3'] },
  { eco: 'B96', name: 'Sicilian Najdorf: 6.Bg5', arName: 'نايدورف: 6.Bg5', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Bg5'] },
  { eco: 'C01', name: 'French: Exchange Variation', arName: 'الفرنسي: تفريع التبادل', moves: ['e4', 'e6', 'd4', 'd5', 'exd5', 'exd5'] },
  { eco: 'C10', name: 'French: Rubinstein Variation', arName: 'الفرنسي: تفريع روبنشتاين', moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'dxe4'] },
  { eco: 'C11', name: 'French: Classical Steinitz', arName: 'الفرنسي: شتاينيتز الكلاسيكي', moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'e5'] },
  { eco: 'C12', name: 'French: MacCutcheon Variation', arName: 'الفرنسي: تفريع ماكوتشيون', moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'Bg5', 'Bb4'] },
  { eco: 'C21', name: 'Center Game', arName: 'افتتاح الوسط', moves: ['e4', 'e5', 'd4', 'exd4'] },
  { eco: 'C23', name: 'Bishop\'s Opening', arName: 'افتتاح الفيل', moves: ['e4', 'e5', 'Bc4'] },
  { eco: 'C31', name: 'King\'s Gambit: Falkbeer Countergambit', arName: 'غامبيت الملك: فالكبير المضاد', moves: ['e4', 'e5', 'f4', 'd5'] },
  { eco: 'C41', name: 'Philidor Defence', arName: 'دفاع فيليدور', moves: ['e4', 'e5', 'Nf3', 'd6'] },
  { eco: 'C44', name: 'Scotch Gambit', arName: 'الغامبيت الإسكتلندي', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Bc4'] },
  { eco: 'C48', name: 'Four Knights: Spanish Variation', arName: 'الأحصنة الأربعة الإسباني', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5'] },
  { eco: 'C53', name: 'Italian: Giuoco Pianissimo', arName: 'الإيطالي: الدور الهادئ جدًا', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3'] },
  { eco: 'C57', name: 'Two Knights: 4.Ng5', arName: 'دفاع الحصانين: 4.Ng5', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5'] },
  { eco: 'C63', name: 'Ruy López: Schliemann Defence', arName: 'روي لوبيز: دفاع شليمان', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'f5'] },
  { eco: 'C68', name: 'Ruy López: Exchange Variation', arName: 'روي لوبيز: تفريع التبادل', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Bxc6'] },
  { eco: 'C78', name: 'Ruy López: Arkhangelsk Variation', arName: 'روي لوبيز: أرخانغيلسك', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'b5', 'Bb3', 'Bb7'] },
  { eco: 'C80', name: 'Ruy López: Open Variation', arName: 'روي لوبيز: التفريع المفتوح', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Nxe4'] },
  { eco: 'C84', name: 'Ruy López: Closed Defence', arName: 'روي لوبيز: الدفاع المغلق', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7'] },
  { eco: 'C92', name: 'Ruy López: Zaitsev System', arName: 'روي لوبيز: نظام زايتسيف', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Bb7'] },
  { eco: 'C95', name: 'Ruy López: Breyer Variation', arName: 'روي لوبيز: تفريع براير', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Nb8'] },
  { eco: 'D05', name: 'Colle-Zukertort System', arName: 'نظام كولي-زوكيرتورت', moves: ['d4', 'd5', 'Nf3', 'Nf6', 'e3', 'e6', 'Bd3', 'c5', 'b3'] },
  { eco: 'D15', name: 'Slav: Chebanenko 4...a6', arName: 'السلافي: تشيبانينكو 4...a6', moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'a6'] },
  { eco: 'D27', name: 'QGA: Classical Mainline', arName: 'غامبيت الوزير المقبول الكلاسيكي', moves: ['d4', 'd5', 'c4', 'dxc4', 'Nf3', 'Nf6', 'e3', 'e6', 'Bxc4', 'c5', 'O-O', 'a6'] },
  { eco: 'D34', name: 'QGD: Tarrasch Defence', arName: 'دفاع تاراش', moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'c5'] },
  { eco: 'D35', name: 'QGD: Exchange Variation', arName: 'غامبيت الوزير المرفوض: التبادل', moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'cxd5', 'exd5'] },
  { eco: 'D38', name: 'QGD: Ragozin Defence', arName: 'دفاع راغوزين', moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Nf3', 'Bb4'] },
  { eco: 'D44', name: 'Semi-Slav: Botvinnik System', arName: 'شبه السلافي: نظام بوتفينيك', moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bg5', 'dxc4'] },
  { eco: 'D47', name: 'Semi-Slav: Meran Variation', arName: 'شبه السلافي: تفريع ميران', moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5'] },
  { eco: 'D52', name: 'QGD: Cambridge Springs', arName: 'كامبريدج سبرينغز', moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Nbd7', 'e3', 'c6', 'Nf3', 'Qa5'] },
  { eco: 'D58', name: 'QGD: Tartakower Variation', arName: 'تارتاكوفر', moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e3', 'O-O', 'Nf3', 'h6', 'Bh4', 'b6'] },
  { eco: 'D85', name: 'Grünfeld: Exchange Variation', arName: 'غرونفيلد: تفريع التبادل', moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'cxd5', 'Nxd5', 'e4', 'Nxc3', 'bxc3'] },
  { eco: 'E04', name: 'Catalan: Open Variation', arName: 'الكتالوني المفتوح', moves: ['d4', 'Nf6', 'c4', 'e6', 'g3', 'd5', 'Bg2', 'dxc4'] },
  { eco: 'E24', name: 'Nimzo-Indian: Sämisch Variation', arName: 'نيمزو-هندي: زيميش', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'a3'] },
  { eco: 'E32', name: 'Nimzo-Indian: Classical 4.Qc2', arName: 'نيمزو-هندي: الكلاسيكي 4.Qc2', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'Qc2'] },
  { eco: 'E46', name: 'Nimzo-Indian: Rubinstein 4.e3', arName: 'نيمزو-هندي: روبنشتاين 4.e3', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'e3', 'O-O'] },
  { eco: 'E73', name: 'King\'s Indian: Averbakh System', arName: 'الهندي للملك: نظام أفيرباخ', moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Be2', 'O-O', 'Bg5'] },
  { eco: 'E80', name: 'King\'s Indian: Sämisch System', arName: 'الهندي للملك: نظام زيميش', moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'f3'] },
  { eco: 'E97', name: 'King\'s Indian: Mar del Plata', arName: 'الهندي للملك: مار ديل بلاتا', moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'O-O', 'Nc6'] },
];

let cachedGraph = null;

/**
 * Strips halfmove/fullmove counters so transpositions share a single book key.
 */
export function normalizePositionKey(fen) {
  if (!fen) return '';
  return String(fen).trim().split(/\s+/).slice(0, 3).join(' ');
}

function ensureNode(graph, key) {
  let node = graph.get(key);
  if (!node) {
    node = {
      eco: '',
      name: '',
      arName: '',
      studyId: null,
      studyKind: null,
      continuations: new Map(),
    };
    graph.set(key, node);
  }
  return node;
}

function addLineToGraph(graph, { eco, name, arName, moves, studyId = null, studyKind = null, stampEndOnly = false, weightBoost = 1 }) {
  const game = new Chess();
  for (let i = 0; i < moves.length; i += 1) {
    const rawMove = moves[i];
    const sanInput = typeof rawMove === 'string' ? rawMove : rawMove.move;
    const prevKey = normalizePositionKey(game.fen());
    const played = game.move(sanInput);
    if (!played) break;

    const nextKey = normalizePositionKey(game.fen());
    const prevNode = ensureNode(graph, prevKey);
    const nextNode = ensureNode(graph, nextKey);

    const existingCont = prevNode.continuations.get(played.san);
    if (existingCont) {
      existingCont.weight += weightBoost;
      if (!existingCont.eco && eco) existingCont.eco = eco;
      if (!existingCont.studyId && studyId) {
        existingCont.studyId = studyId;
        existingCont.studyKind = studyKind;
      }
    } else {
      prevNode.continuations.set(played.san, {
        san: played.san,
        uci: played.from + played.to + (played.promotion || ''),
        eco: eco || '',
        name,
        arName,
        studyId,
        studyKind,
        weight: weightBoost,
      });
    }

    const isEnd = i === moves.length - 1;
    if (!stampEndOnly || isEnd) {
      if (!nextNode.name || (!stampEndOnly && isEnd)) {
        nextNode.eco = eco || nextNode.eco;
        nextNode.name = name || nextNode.name;
        nextNode.arName = arName || nextNode.arName;
      }
      if (isEnd && studyId && !nextNode.studyId) {
        nextNode.studyId = studyId;
        nextNode.studyKind = studyKind;
      }
    }
  }
}

function getBookGraph() {
  if (cachedGraph) return cachedGraph;
  const graph = new Map();
  const root = ensureNode(graph, normalizePositionKey(new Chess().fen()));
  root.eco = 'A00';
  root.name = 'Starting Position';
  root.arName = 'الوضعية الابتدائية';

  // 1. Seed classic ECO skeleton lines first so intermediate plies carry accurate prefix names
  for (const entry of ECO_SUPPLEMENT) {
    addLineToGraph(graph, {
      eco: entry.eco,
      name: entry.name,
      arName: entry.arName,
      moves: entry.moves,
      stampEndOnly: true,
      weightBoost: 3,
    });
  }

  // 2. Layer all 96 curated club openings (attaching studyId on terminal line position + continuations along path)
  for (const op of OPENINGS) {
    const ar = localizeOpening(op, 'ar');
    addLineToGraph(graph, {
      eco: op.eco || 'A00',
      name: op.name,
      arName: ar?.name || op.name,
      moves: op.line || [],
      studyId: op.id,
      studyKind: 'openings',
      stampEndOnly: true,
      weightBoost: 2,
    });
  }

  // 3. Layer opening traps as named tactical sidelines
  for (const tr of TRAPS) {
    const ar = localizeTrap(tr, 'ar');
    addLineToGraph(graph, {
      eco: 'Trap',
      name: tr.name,
      arName: ar?.name || tr.name,
      moves: (tr.line || []).slice(0, 10),
      studyId: tr.id,
      studyKind: 'traps',
      stampEndOnly: true,
      weightBoost: 1,
    });
  }

  cachedGraph = graph;
  return graph;
}

export function isPositionInBook(fen) {
  const graph = getBookGraph();
  const node = graph.get(normalizePositionKey(fen));
  return Boolean(node && (node.name || node.continuations.size > 0));
}

export function lookupOpeningByFen(fen, lang = 'en') {
  const graph = getBookGraph();
  const node = graph.get(normalizePositionKey(fen));
  if (!node || !node.name || node.eco === 'A00') return null;
  const displayName = lang === 'ar' ? isolateChessTokens(node.arName || node.name, 'ar') : node.name;
  return {
    eco: node.eco,
    name: displayName,
    studyId: node.studyId,
    studyKind: node.studyKind,
  };
}

/**
 * Walks moves from `startFen` and returns the deepest matched ECO opening along the path.
 */
export function detectOpeningFromMoves(startFen, moves = [], lang = 'en') {
  const game = new Chess(startFen || undefined);
  let best = lookupOpeningByFen(game.fen(), lang);
  if (best) best = { ...best, ply: 0 };

  for (let i = 0; i < moves.length; i += 1) {
    const raw = moves[i];
    const san = typeof raw === 'string' ? raw : raw?.san || raw?.uci;
    if (!san) break;
    const played = game.move(san, { sloppy: true });
    if (!played) break;
    const hit = lookupOpeningByFen(game.fen(), lang);
    if (hit) {
      best = { ...hit, ply: i + 1 };
    }
  }
  return best;
}

/**
 * Returns book continuations from `fen`, sorted by repertoire frequency.
 */
export function getBookContinuations(fen, lang = 'en', limit = 6) {
  const graph = getBookGraph();
  const node = graph.get(normalizePositionKey(fen));
  if (!node || node.continuations.size === 0) return [];

  return [...node.continuations.values()]
    .sort((a, b) => b.weight - a.weight || a.san.localeCompare(b.san))
    .slice(0, limit)
    .map((c) => ({
      san: c.san,
      uci: c.uci,
      eco: c.eco,
      name: lang === 'ar' ? isolateChessTokens(c.arName || c.name, 'ar') : c.name,
      studyId: c.studyId,
      studyKind: c.studyKind,
      weight: c.weight,
    }));
}
