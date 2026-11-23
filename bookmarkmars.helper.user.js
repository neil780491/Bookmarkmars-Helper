// ==UserScript==
// @name BookmarkMars Helper – Create, Share, View, and Search Browser Bookmarks
// @name:ar مساعد BookmarkMars – إنشاء إشارات المتصفح ومشاركتها وعرضها والبحث عنها
// @name:be Памочнік BookmarkMars – Стварайце закладкі, дзяліцеся імі, праглядайце і шукайце іх
// @name:bg Помощник за BookmarkMars – Създавайте, споделяйте, преглеждайте и търсете отметки
// @name:ckb یارمەتیدەری BookmarkMars – دروستکردن، هاوبەشکردن، بینین و گەڕان لە نیشانەکانی وێبگەڕ
// @name:cs Pomocník BookmarkMars – Vytvářejte, sdílejte, prohlížejte a hledejte záložky
// @name:da BookmarkMars-hjælper – Opret, del, se og søg i browserbogmærker
// @name:de BookmarkMars-Helfer – Browser-Lesezeichen erstellen, teilen, ansehen und suchen
// @name:el Βοηθός BookmarkMars – Δημιουργήστε, μοιραστείτε, δείτε και αναζητήστε σελιδοδείκτες
// @name:en BookmarkMars Helper – Create, Share, View, and Search Browser Bookmarks
// @name:eo Helpilo de BookmarkMars – Kreu, kunhavigu, rigardu kaj serĉu retumilajn legosignojn
// @name:es Asistente de BookmarkMars – Crear, compartir, ver y buscar marcadores
// @name:es-419 Asistente de BookmarkMars – Crear, compartir, ver y buscar marcadores
// @name:fi BookmarkMars-avustaja – Luo, jaa, katso ja hae selaimen kirjanmerkkejä
// @name:fil Katulong ng BookmarkMars – Gumawa, ibahagi, tingnan, at hanapin ang mga bookmark ng browser
// @name:fr Assistant BookmarkMars – Créer, partager, consulter et rechercher des favoris
// @name:fr-CA Assistant BookmarkMars – Créer, partager, consulter et rechercher des signets
// @name:he מסייע BookmarkMars – יצירה, שיתוף, צפייה וחיפוש סימניות דפדפן
// @name:hr Pomoćnik za BookmarkMars – Stvarajte, dijelite, pregledavajte i pretražujte oznake
// @name:hu BookmarkMars segéd – Böngészőkönyvjelzők létrehozása, megosztása, megtekintése és keresése
// @name:id Pembantu BookmarkMars – Buat, bagikan, lihat, dan cari markah peramban
// @name:it Assistente BookmarkMars – Crea, condividi, visualizza e cerca i segnalibri
// @name:ja BookmarkMars ヘルパー – ブラウザのブックマークを作成、共有、表示、検索
// @name:ka BookmarkMars-ის დამხმარე – შექმენით, გააზიარეთ, ნახეთ და მოძებნეთ ბრაუზერის სანიშნეები
// @name:ko BookmarkMars 도우미 – 브라우저 북마크 만들기, 공유, 보기, 검색
// @name:mr BookmarkMars सहाय्यक – ब्राउझर बुकमार्क तयार करा, शेअर करा, पहा आणि शोधा
// @name:nb BookmarkMars-hjelper – Opprett, del, vis og søk i nettleserbokmerker
// @name:ne BookmarkMars सहायक – ब्राउजर बुकमार्क बनाउनुहोस्, साझा गर्नुहोस्, हेर्नुहोस् र खोज्नुहोस्
// @name:nl BookmarkMars-helper – Bladwijzers maken, delen, bekijken en zoeken
// @name:pl Pomocnik BookmarkMars – Twórz, udostępniaj, przeglądaj i wyszukuj zakładki
// @name:pt Assistente BookmarkMars – Criar, partilhar, ver e pesquisar marcadores
// @name:pt-BR Assistente BookmarkMars – Criar, compartilhar, ver e pesquisar favoritos
// @name:ro Asistent BookmarkMars – Creați, partajați, vizualizați și căutați marcaje
// @name:ru Помощник BookmarkMars – Создавайте закладки, делитесь ими, просматривайте и ищите их
// @name:sk Pomocník BookmarkMars – Vytvárajte, zdieľajte, prehliadajte a hľadajte záložky
// @name:sr Помоћник за BookmarkMars – Правите, делите, прегледајте и претражујте обележиваче
// @name:sv BookmarkMars-hjälpare – Skapa, dela, visa och sök bland webbläsarbokmärken
// @name:th ผู้ช่วย BookmarkMars – สร้าง แชร์ ดู และค้นหาที่คั่นหน้าเบราว์เซอร์
// @name:tr BookmarkMars Yardımcısı – Tarayıcı yer imleri oluşturun, paylaşın, görüntüleyin ve arayın
// @name:ug BookmarkMars ياردەمچىسى – تور كۆرگۈچ خەتكۈچلىرىنى قۇرۇش، ئورتاقلىشىش، كۆرۈش ۋە ئىزدەش
// @name:uk Помічник BookmarkMars – Створюйте закладки, діліться ними, переглядайте та шукайте їх
// @name:vi Trợ lý BookmarkMars – Tạo, chia sẻ, xem và tìm dấu trang trình duyệt
// @name:zh-CN BookmarkMars 助手 – 创建、分享、查看和搜索浏览器书签
// @name:zh-TW BookmarkMars 助手 – 建立、分享、查看和搜尋瀏覽器書籤
// @description Bookmarkmars is a site for sharing browser bookmarks. This helper opens the real page from a bookmark view link, checks links on the home, search, folder, and detail pages, marks working links with a green check and unavailable ones with a strikethrough, and can expand or collapse every bookmark node on a detail page.
// @description:ar Bookmarkmars موقع لمشاركة إشارات المتصفح. يفتح هذا المساعد الصفحة الحقيقية من صفحة المعاينة، ويفحص الروابط في الصفحة الرئيسية والبحث والمجلد وصفحة التفاصيل، ويضع علامة صح خضراء على ما يُفتح ويشطب ما لا يُفتح، ويمكنه توسيع كل عقد الإشارات أو طيها في صفحة التفاصيل.
// @description:be Bookmarkmars — сайт для абмену закладкамі браўзера. Памочнік адразу адкрывае сапраўдную старонку з прагляду закладкі, правярае спасылкі на галоўнай, у пошуку, у папцы і на старонцы падрабязнасцей, пазначае працоўныя зялёнай птушкай, а недаступныя закрывае рысай, і можа разгарнуць ці згарнуць усе вузлы.
// @description:bg Bookmarkmars е сайт за споделяне на отметки от браузъра. Помощникът отваря истинската страница от прегледа, проверява връзките на началната страница, в търсенето, в папките и в детайлите, отбелязва работещите със зелена отметка и зачерква недостъпните, и може да разгъне или свие всички възли на страницата с подробности.
// @description:ckb Bookmarkmars ماڵپەڕێکە بۆ هاوبەشکردنی نیشانەکانی وێبگەڕ. ئەم یارمەتیدەرە لە پەڕەی پێشبینینەوە پەڕەی ڕاستەقینە دەکاتەوە، لە سەرەکی و گەڕان و بوخچە و وردەکاریدا بەستەرەکان دەپشکنێت، ئەوانەی دەکرێنەوە بە نیشانەی سەوزی چێک و ئەوانەی ناکرێنەوە بە هێڵی سڕاوە نیشان دەکات، و لە وردەکاریدا دەتوانێت هەموو گرێکانی نیشانەکان بکاتەوە یان دایانبخات.
// @description:cs Bookmarkmars je web pro sdílení záložek prohlížeče. Pomocník otevře skutečnou stránku z náhledu záložky, zkontroluje odkazy na úvodu, ve vyhledávání, ve složce a v detailu, fungující označí zelenou fajfkou a nedostupné přeškrtne a na detailu umí rozbalit nebo sbalit všechny uzly.
// @description:da Bookmarkmars er et sted til deling af browserbogmærker. Hjælperen åbner den rigtige side fra forhåndsvisningen, tjekker links på forsiden, i søgningen, i mapper og på detaljesiden, markerer dem der virker med et grønt flueben og streger utilgængelige over, og kan folde alle bogmærkeknuder ud eller sammen på detaljesiden.
// @description:de Bookmarkmars ist eine Website zum Teilen von Browser-Lesezeichen. Dieser Helfer öffnet die echte Seite aus der Lesezeichen-Vorschau, prüft Links auf Start-, Such-, Ordner- und Detailseiten, markiert erreichbare Links mit einem grünen Haken und unerreichbare durchgestrichen und kann auf der Detailseite alle Lesezeichenknoten auf- oder zuklappen.
// @description:el Το Bookmarkmars είναι ένας ιστότοπος για κοινή χρήση σελιδοδεικτών. Ο βοηθός ανοίγει την πραγματική σελίδα από την προεπισκόπηση, ελέγχει τους συνδέσμους στην αρχική, στην αναζήτηση, στους φακέλους και στη σελίδα λεπτομερειών, σημειώνει με πράσινο τικ όσους ανοίγουν και διαγράφει τους μη διαθέσιμους, και μπορεί να αναπτύξει ή να συμπτύξει όλους τους κόμβους στη σελίδα λεπτομερειών.
// @description:en Bookmarkmars is a site for sharing browser bookmarks. This helper opens the real page from a bookmark view link, checks links on the home, search, folder, and detail pages, marks working links with a green check and unavailable ones with a strikethrough, and can expand or collapse every bookmark node on a detail page.
// @description:eo Bookmarkmars estas retejo por kunhavigi retumilajn legosignojn. Ĉi tiu helpilo malfermas la realan paĝon el la antaŭrigardo, kontrolas ligilojn en la hejmpaĝo, serĉo, dosierujoj kaj detala paĝo, markas funkciantajn per verda kontrolmarko kaj trastrekas neatingeblajn, kaj povas malfaldi aŭ faldi ĉiujn legosignajn nodojn en la detala paĝo.
// @description:es Bookmarkmars es un sitio para compartir marcadores del navegador. Este asistente abre la página real desde la vista previa, comprueba los enlaces en el inicio, la búsqueda, las carpetas y el detalle, marca con una marca verde los que se abren y tacha los que no, y puede expandir o contraer todos los nodos en la página de detalle.
// @description:es-419 Bookmarkmars es un sitio para compartir marcadores del navegador. Este asistente abre la página real desde la vista previa, comprueba los enlaces en el inicio, la búsqueda, las carpetas y el detalle, marca con una marca verde los que se abren y tacha los que no, y puede expandir o contraer todos los nodos en la página de detalle.
// @description:fi Bookmarkmars on sivusto selaimen kirjanmerkkien jakamiseen. Avustaja avaa oikean sivun esikatselusta, tarkistaa linkit etusivulla, haussa, kansioissa ja tietosivulla, merkitsee toimivat vihreällä väkäsellä ja yliviivaa toimimattomat, ja tietosivulla voi avata tai sulkea kaikki kirjanmerkkisolmut.
// @description:fil Ang Bookmarkmars ay site para sa pagbabahagi ng mga bookmark ng browser. Binubuksan ng katulong na ito ang totoong pahina mula sa preview, sinusuri ang mga link sa home, paghahanap, folder, at detalye, nilalagyan ng berdeng tsek ang nagbubukas at kinakaltasan ang hindi magbubukas, at maaaring buksan o isara ang lahat ng bookmark node sa pahina ng detalye.
// @description:fr Bookmarkmars est un site de partage de favoris de navigateur. Cet assistant ouvre la page réelle depuis l’aperçu, vérifie les liens sur l’accueil, la recherche, les dossiers et la fiche, marque d’une coche verte ceux qui s’ouvrent et barre ceux qui ne s’ouvrent pas, et peut déplier ou replier tous les nœuds sur une fiche.
// @description:fr-CA Bookmarkmars est un site de partage de signets de navigateur. Cet assistant ouvre la page réelle depuis l’aperçu, vérifie les liens sur l’accueil, la recherche, les dossiers et la fiche, marque d’une coche verte ceux qui s’ouvrent et barre ceux qui ne s’ouvrent pas, et peut déplier ou replier tous les nœuds sur une fiche.
// @description:he Bookmarkmars הוא אתר לשיתוף סימניות דפדפן. המסייע פותח את העמוד האמיתי מתצוגת הסימנייה, בודק קישורים בדף הבית, בחיפוש, בתיקייה ובעמוד הפרטים, מסמן וי ירוק לקישורים שנפתחים ומוחק קו על אלה שלא נפתחים, ויכול לפתוח או לסגור את כל הצמתים בעמוד הפרטים.
// @description:hr Bookmarkmars je stranica za dijeljenje oznaka preglednika. Pomoćnik odmah otvara pravu stranicu iz pregleda, provjerava poveznice na naslovnici, u pretrazi, u mapi i na stranici detalja, ispravne označava zelenom kvačicom, a nedostupne precrtava, i može raširiti ili sklopiti sve čvorove.
// @description:hu A Bookmarkmars egy oldal a böngésző könyvjelzőinek megosztására. A segéd a megtekintő oldalról egyenesen megnyitja a valódi oldalt, ellenőrzi a hivatkozásokat a kezdőlapon, a keresésben, a mappákban és a részleteknél, a működőket zöld pipával jelöli, az elérhetetleneket áthúzza, és a részletező oldalon kinyithatja vagy becsukhatja az összes könyvjelzőcsomópontot.
// @description:id Bookmarkmars adalah situs untuk berbagi markah peramban. Pembantu ini membuka halaman asli dari pratinjau, memeriksa tautan di beranda, pencarian, folder, dan halaman detail, menandai tautan yang terbuka dengan centang hijau dan mencoret yang tidak tersedia, serta dapat membuka atau menutup semua simpul markah di halaman detail.
// @description:it Bookmarkmars è un sito per condividere i segnalibri del browser. Questo assistente apre la pagina reale dall’anteprima, controlla i link nella home, nella ricerca, nelle cartelle e nel dettaglio, segna con una spunta verde quelli che si aprono e barra quelli non disponibili, e nella pagina di dettaglio può espandere o chiudere tutti i nodi.
// @description:ja Bookmarkmars はブラウザのブックマークを共有するサイトです。このヘルパーはプレビューページから実際のページを直接開き、ホーム・検索・フォルダ・詳細ページでリンクが開けるかを確認します。開けるリンクには緑のチェック、開けないリンクには取り消し線を付け、詳細ページではすべてのノードを開閉できます。
// @description:ka Bookmarkmars არის საიტი ბრაუზერის სანიშნეების გასაზიარებლად. დამხმარე წინასწარი ნახვიდან პირდაპირ ხსნის ნამდვილ გვერდს, ამოწმებს ბმულებს მთავარზე, ძიებაში, საქაღალდესა და დეტალურ გვერდზე, მომუშავეებს მწვანე ალამით ნიშნავს, მიუწვდომლებს კი გადახაზავს, და დეტალურ გვერდზე შეუძლია ყველა სანიშნის კვანძის გაშლა ან დაკეცვა.
// @description:ko Bookmarkmars 은 브라우저 북마크를 공유하는 사이트입니다. 이 도우미는 미리보기에서 실제 페이지로 바로 이동하고, 홈·검색·폴더·상세 페이지에서 링크가 열리는지 확인합니다. 열리는 링크에는 초록색 체크, 열리지 않는 링크에는 취소선을 표시하며, 상세 페이지에서는 모든 북마크 노드를 펼치거나 접을 수 있습니다.
// @description:mr Bookmarkmars हे ब्राउझर बुकमार्क शेअर करण्याचे संकेतस्थळ आहे. हा सहाय्यक पूर्वावलोकनातून खरे पान उघडतो, मुख्यपृष्ठ, शोध, फोल्डर आणि तपशील पृष्ठावरील दुवे तपासतो, उघडणाऱ्यांवर हिरवी खूण आणि न उघडणाऱ्यांवर रेषा मारतो, आणि तपशील पृष्ठावर सर्व बुकमार्क नोड उघडू किंवा बंद करू शकतो.
// @description:nb Bookmarkmars er et nettsted for deling av nettleserbokmerker. Hjelperen åpner den ekte siden fra forhåndsvisningen, sjekker lenker på forsiden, i søket, i mapper og på detaljsiden, markerer de som virker med en grønn hake og streker over utilgjengelige, og kan åpne eller lukke alle bokmerkeknuter på detaljsiden.
// @description:ne Bookmarkmars ब्राउजर बुकमार्क साझा गर्ने साइट हो। यो सहायक पूर्वावलोकनबाट वास्तविक पृष्ठ खोल्छ, गृह, खोज, फोल्डर र विवरण पृष्ठका लिंक जाँच्छ, खुल्नेमा हरियो चिह्न र नखुल्नेमा काटिएको रेखा लगाउँछ, र विवरण पृष्ठमा सबै बुकमार्क नोड खोल्न वा बन्द गर्न सक्छ।
// @description:nl Bookmarkmars is een site om browserbladwijzers te delen. Deze helper opent de echte pagina vanuit de voorbeeldweergave, controleert links op de startpagina, in de zoekresultaten, in mappen en op de detailpagina, zet een groen vinkje bij werkende links en streept onbereikbare door, en kan op de detailpagina alle bladwijzerknooppunten openen of sluiten.
// @description:pl Bookmarkmars to strona do udostępniania zakładek przeglądarki. Pomocnik otwiera prawdziwą stronę z podglądu zakładki, sprawdza linki na stronie głównej, w wyszukiwaniu, w folderze i w szczegółach, działające oznacza zielonym ptaszkiem, a niedostępne przekreśla, oraz może rozwinąć lub zwinąć wszystkie węzły na stronie szczegółów.
// @description:pt Bookmarkmars é um site para partilhar marcadores do navegador. Este assistente abre a página real a partir da pré-visualização, verifica as ligações na página inicial, na pesquisa, nas pastas e no detalhe, marca com um visto verde as que abrem e risca as que não abrem, e pode expandir ou fechar todos os nós na página de detalhe.
// @description:pt-BR Bookmarkmars é um site para compartilhar favoritos do navegador. Este assistente abre a página real a partir da visualização, verifica os links na página inicial, na busca, nas pastas e no detalhe, marca com um visto verde os que abrem e risca os que não abrem, e pode expandir ou recolher todos os nós na página de detalhe.
// @description:ro Bookmarkmars este un site pentru partajarea marcajelor din browser. Asistentul deschide pagina reală din previzualizare, verifică linkurile de pe pagina principală, în căutare, în dosare și pe pagina de detalii, marchează cu o bifă verde pe cele care se deschid și taie pe cele indisponibile, și poate extinde sau restrânge toate nodurile pe pagina de detalii.
// @description:ru Bookmarkmars — сайт для обмена закладками браузера. Помощник сразу открывает настоящую страницу из просмотра закладки, проверяет ссылки на главной, в поиске, в папке и на странице подробностей, отмечает рабочие зелёной галочкой, а недоступные зачёркивает, и может развернуть или свернуть все узлы закладок.
// @description:sk Bookmarkmars je stránka na zdieľanie záložiek prehliadača. Pomocník otvorí skutočnú stránku z náhľadu záložky, skontroluje odkazy na úvode, vo vyhľadávaní, v priečinku a v detaile, fungujúce označí zelenou fajkou a nedostupné prečiarkne a v detaile vie rozbaliť alebo zbaliť všetky uzly.
// @description:sr Bookmarkmars је сајт за дељење обележивача прегледача. Помоћник одмах отвара праву страницу из прегледа, проверава везе на почетној, у претрази, у фасцикли и на страници детаља, исправне означава зеленом квачицом, а недоступне прецртава, и може да расклопи или склопи све чворове.
// @description:sv Bookmarkmars är en webbplats för att dela webbläsarbokmärken. Hjälparen öppnar den riktiga sidan från förhandsvisningen, kontrollerar länkar på startsidan, i sökningen, i mappar och på detaljsidan, markerar fungerande länkar med en grön bock och stryker över otillgängliga, och kan fälla ut eller ihop alla bokmärkesnoder på detaljsidan.
// @description:th Bookmarkmars เป็นเว็บไซต์สำหรับแชร์ที่คั่นหน้าของเบราว์เซอร์ ผู้ช่วยนี้เปิดหน้าจริงจากหน้าตัวอย่าง ตรวจสอบลิงก์ในหน้าแรก การค้นหา โฟลเดอร์ และหน้ารายละเอียด ทำเครื่องหมายถูกสีเขียวให้ลิงก์ที่เปิดได้และขีดฆ่าลิงก์ที่เปิดไม่ได้ และสามารถขยายหรือยุบโหนดที่คั่นหน้าทั้งหมดในหน้ารายละเอียด
// @description:tr Bookmarkmars, tarayıcı yer imlerini paylaşmak için bir sitedir. Bu yardımcı, önizlemeden gerçek sayfayı açar; ana sayfa, arama, klasör ve ayrıntı sayfalarındaki bağlantıları denetler; açılanları yeşil onayla, açılamayanları üstü çizili olarak işaretler ve ayrıntı sayfasında tüm yer imi düğümlerini açıp kapatabilir.
// @description:ug Bookmarkmars تور كۆرگۈچ خەتكۈچلىرىنى ئورتاقلىشىدىغان بېكەت. بۇ ياردەمچى ئالدىن كۆرۈش بېتىدىن ھەقىقىي بەتنى بىۋاسىتە ئاچىدۇ؛ باش بەت، ئىزدەش، قىسقۇچ ۋە تەپسىلات بېتىدىكى ئۇلانمىلارنى تەكشۈرىدۇ، ئېچىلىدىغانلىرىغا يېشىل جەزىمە، ئېچىلمايدىغانلىرىغا ئۆچۈرۈش سىزىقى قويىدۇ؛ تەپسىلات بېتىدە بارلىق خەتكۈچ تۈگۈنىنى يېيىپ ياكى يىغىشقا بولىدۇ.
// @description:uk Bookmarkmars — сайт для обміну закладками браузера. Помічник одразу відкриває справжню сторінку з перегляду закладки, перевіряє посилання на головній, у пошуку, у папці та на сторінці подробиць, позначає робочі зеленою галочкою, а недоступні закреслює, і може розгорнути або згорнути всі вузли закладок.
// @description:vi Bookmarkmars là trang chia sẻ dấu trang trình duyệt. Trợ lý mở thẳng trang thật từ trang xem trước, kiểm tra liên kết ở trang chủ, tìm kiếm, thư mục và trang chi tiết, đánh dấu móc xanh với liên kết mở được và gạch ngang liên kết không mở được, đồng thời có thể mở hoặc đóng mọi nút dấu trang ở trang chi tiết.
// @description:zh-CN Bookmarkmars 是一个分享浏览器书签的网站。本助手会从书签预览页直接打开真实链接；在首页、搜索、文件夹和详情页检查链接能否打开，能打开的标绿色勾，打不开的加删除线；详情页还可以展开或收起全部书签节点。
// @description:zh-TW Bookmarkmars 是一個分享瀏覽器書籤的網站。本助手會從書籤預覽頁直接打開真實連結；在首頁、搜尋、資料夾和詳情頁檢查連結能否打開，能打開的標綠色勾，打不開的加刪除線；詳情頁還可以展開或收合全部書籤節點。
// @icon         https://www.bookmarkmars.com/media/img/logo/favicon.ico
// @namespace    bookmarkmars_helper
// @version      1.1.2
// @author       Mason9
// @match        https://www.bookmarkmars.com/*
// @run-at       document-start
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @connect      *
// @license      MIT
// ==/UserScript==

(function () {
	"use strict";

	const HTTP_URL = /^https?:\/\//i;
	let jumped = false;

	function jump(url) {
		if (jumped) {
			return;
		}
		const target = String(url || "").trim();
		if (!HTTP_URL.test(target)) {
			return;
		}
		jumped = true;
		location.replace(target);
	}

	function readWrapper(node) {
		if (!node || node.nodeType !== 1) {
			return;
		}
		if (node.matches && node.matches(".wrapper[data-url]")) {
			jump(node.getAttribute("data-url"));
			return;
		}
		if (!node.querySelector) {
			return;
		}
		const wrapper = node.querySelector(".wrapper[data-url]");
		if (wrapper) {
			jump(wrapper.getAttribute("data-url"));
		}
	}

	const observer = new MutationObserver((mutations) => {
		if (jumped) {
			observer.disconnect();
			return;
		}
		for (const mutation of mutations) {
			if (mutation.type === "attributes") {
				readWrapper(mutation.target);
			}
			for (const node of mutation.addedNodes) {
				readWrapper(node);
			}
			if (jumped) {
				observer.disconnect();
				return;
			}
		}
	});

	function start() {
		const root = document.documentElement;
		if (!root) {
			return;
		}
		readWrapper(root);
		if (jumped) {
			return;
		}
		observer.observe(root, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ["data-url"]
		});
	}

	function startRedirect() {
		if (document.documentElement) {
			start();
		} else {
			document.addEventListener("DOMContentLoaded", start, { once: true });
		}
	}

	const CHECK_LIMIT = 5;

	const LABELS = {
		en: { button: "Check link status", stop: "Stop", openAll: "Open all bookmark nodes", closeAll: "Close all bookmark nodes", done: "Check complete", doneFailed: "Check complete, {n} unavailable", empty: "No links to check" },
		es: { button: "Comprobar enlaces", stop: "Detener", openAll: "Abrir todos los nodos", closeAll: "Cerrar todos los nodos", done: "Comprobación completa", doneFailed: "Completado, {n} no disponibles", empty: "No hay enlaces para comprobar" },
		fr: { button: "Vérifier les liens", stop: "Arrêter", openAll: "Ouvrir tous les nœuds", closeAll: "Fermer tous les nœuds", done: "Vérification terminée", doneFailed: "Terminé, {n} indisponibles", empty: "Aucun lien à vérifier" },
		pt: { button: "Verificar links", stop: "Parar", openAll: "Abrir todos os nós", closeAll: "Fechar todos os nós", done: "Verificação concluída", doneFailed: "Concluído, {n} indisponíveis", empty: "Nenhum link para verificar" },
		ru: { button: "Проверить ссылки", stop: "Стоп", openAll: "Открыть все узлы", closeAll: "Закрыть все узлы", done: "Проверка завершена", doneFailed: "Готово, недоступно: {n}", empty: "Нет ссылок для проверки" },
		ja: { button: "リンク状態を確認", stop: "停止", openAll: "すべてのノードを開く", closeAll: "すべてのノードを閉じる", done: "確認完了", doneFailed: "確認完了、無効 {n} 件", empty: "確認できるリンクがありません" },
		de: { button: "Links prüfen", stop: "Stopp", openAll: "Alle Knoten öffnen", closeAll: "Alle Knoten schließen", done: "Prüfung abgeschlossen", doneFailed: "Fertig, {n} nicht erreichbar", empty: "Keine Links zum Prüfen" },
		ko: { button: "링크 상태 확인", stop: "중지", openAll: "모든 노드 열기", closeAll: "모든 노드 닫기", done: "확인 완료", doneFailed: "확인 완료, 열 수 없음 {n}개", empty: "확인할 링크가 없습니다" },
		it: { button: "Controlla i link", stop: "Interrompi", openAll: "Apri tutti i nodi", closeAll: "Chiudi tutti i nodi", done: "Controllo completato", doneFailed: "Completato, {n} non disponibili", empty: "Nessun link da controllare" },
		id: { button: "Periksa status tautan", stop: "Berhenti", openAll: "Buka semua simpul", closeAll: "Tutup semua simpul", done: "Pemeriksaan selesai", doneFailed: "Selesai, {n} tidak dapat dibuka", empty: "Tidak ada tautan untuk diperiksa" },
		tr: { button: "Bağlantıları denetle", stop: "Durdur", openAll: "Tüm düğümleri aç", closeAll: "Tüm düğümleri kapat", done: "Denetim tamamlandı", doneFailed: "Tamamlandı, {n} açılamıyor", empty: "Denetlenecek bağlantı yok" },
		pl: { button: "Sprawdź linki", stop: "Zatrzymaj", openAll: "Otwórz wszystkie węzły", closeAll: "Zamknij wszystkie węzły", done: "Sprawdzanie zakończone", doneFailed: "Zakończono, niedostępne: {n}", empty: "Brak linków do sprawdzenia" },
		uk: { button: "Перевірити посилання", stop: "Зупинити", openAll: "Відкрити всі вузли", closeAll: "Закрити всі вузли", done: "Перевірку завершено", doneFailed: "Завершено, недоступно: {n}", empty: "Немає посилань для перевірки" },
		nl: { button: "Links controleren", stop: "Stoppen", openAll: "Alle knooppunten openen", closeAll: "Alle knooppunten sluiten", done: "Controle voltooid", doneFailed: "Klaar, {n} niet bereikbaar", empty: "Geen links om te controleren" },
		vi: { button: "Kiểm tra liên kết", stop: "Dừng", openAll: "Mở tất cả nút", closeAll: "Đóng tất cả nút", done: "Đã kiểm tra xong", doneFailed: "Xong, {n} không mở được", empty: "Không có liên kết để kiểm tra" },
		th: { button: "ตรวจสอบลิงก์", stop: "หยุด", openAll: "เปิดโหนดทั้งหมด", closeAll: "ปิดโหนดทั้งหมด", done: "ตรวจสอบเสร็จแล้ว", doneFailed: "เสร็จแล้ว เปิดไม่ได้ {n} รายการ", empty: "ไม่มีลิงก์ให้ตรวจสอบ" },
		ar: { button: "فحص الروابط", stop: "إيقاف", openAll: "فتح كل العقد", closeAll: "إغلاق كل العقد", done: "اكتمل الفحص", doneFailed: "اكتمل، {n} غير متاحة", empty: "لا توجد روابط للفحص" },
		he: { button: "בדיקת קישורים", stop: "עצור", openAll: "פתיחת כל הצמתים", closeAll: "סגירת כל הצמתים", done: "הבדיקה הושלמה", doneFailed: "הושלם, {n} לא זמינים", empty: "אין קישורים לבדיקה" },
		hi: { button: "लिंक स्थिति जाँचें", stop: "रोकें", openAll: "सभी नोड खोलें", closeAll: "सभी नोड बंद करें", done: "जाँच पूरी हुई", doneFailed: "पूरी हुई, {n} नहीं खुले", empty: "जाँचने के लिए कोई लिंक नहीं" },
		"zh-cn": { button: "链接状态检查", stop: "停止", openAll: "打开所有书签节点", closeAll: "关闭所有书签节点", done: "检查完成", doneFailed: "检查完成，{n} 个无法打开", empty: "没有可检查的链接" },
		"zh-tw": { button: "連結狀態檢查", stop: "停止", openAll: "打開所有書籤節點", closeAll: "關閉所有書籤節點", done: "檢查完成", doneFailed: "檢查完成，{n} 個無法開啟", empty: "沒有可檢查的連結" }
	};

	function siteLang() {
		const cookie = document.cookie.match(/(?:^|;\s*)bk_lang_cs=([^;]*)/);
		const selected = document.querySelector("select[name='languageSelect']");
		const meta = document.querySelector("meta[http-equiv='content-language' i]");
		const raw = decodeURIComponent(cookie ? cookie[1] : selected && selected.value || meta && meta.content || document.documentElement.lang || "en").trim().toLowerCase().replace(/_/g, "-");
		if (raw === "cl" || raw === "mx") {
			return "es";
		}
		if (LABELS[raw]) {
			return raw;
		}
		if (raw.startsWith("zh")) {
			return raw.includes("tw") || raw.includes("hk") || raw.includes("hant") ? "zh-tw" : "zh-cn";
		}
		const base = raw.split("-")[0];
		return LABELS[base] ? base : "en";
	}

	function checkLabel() {
		return LABELS[siteLang()];
	}

	function resultLabel(labels, links, stopped) {
		if (stopped) {
			return labels.button;
		}
		if (!links.length) {
			return labels.empty;
		}
		const failed = links.filter((link) => link.classList.contains("bm-link-dead")).length;
		if (failed) {
			return labels.doneFailed.replace("{n}", String(failed));
		}
		return labels.done;
	}

	function detailResultLabel(labels, stopped) {
		if (stopped) {
			return labels.button;
		}
		if (!detailMarks.size) {
			return labels.empty;
		}
		let failed = 0;
		detailMarks.forEach((status) => {
			if (status === "fail") {
				failed += 1;
			}
		});
		if (failed) {
			return labels.doneFailed.replace("{n}", String(failed));
		}
		return labels.done;
	}

	function httpUrl(value) {
		const raw = String(value || "").trim();
		if (!raw) {
			return "";
		}
		if (HTTP_URL.test(raw)) {
			return raw;
		}
		try {
			const decoded = decodeURIComponent(raw);
			return HTTP_URL.test(decoded) ? decoded : "";
		} catch (e) {
			return "";
		}
	}

	function viewTargetUrl(link) {
		const ext = httpUrl(link.getAttribute("data-ext"));
		if (ext) {
			return ext;
		}
		const href = httpUrl(link.getAttribute("href") || link.href);
		if (href && !/\/view\//i.test(href)) {
			return href;
		}
		return "";
	}

	function injectCheckStyle() {
		if (document.getElementById("bm-check-style")) {
			return;
		}
		const style = document.createElement("style");
		style.id = "bm-check-style";
		style.textContent = `
			.bm-check-btn.in-header {
				margin-left: auto;
			}
			.bm-check-bar,
			.bm-detail-actions {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: 8px;
				margin: 8px 0;
			}
			.header > .bm-check-bar,
			.content-header > .bm-detail-actions {
				flex-basis: 100%;
				width: 100%;
			}
			.content-header.bm-sticky-header {
				position: sticky;
				top: var(--bm-sticky-top, 0px);
				z-index: 1020;
				background: #fff;
				box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
			}
			.content-header > .bm-detail-actions {
				margin: 4px 0 0;
				padding-bottom: 8px;
			}
			.bm-check-btn {
				padding: 4px 12px;
				border: 1px solid #e3e5ea;
				border-radius: 14px;
				background: #f7f8fa;
				color: #5c5f6a;
				font-family: "helvetica neue", arial, sans-serif;
				font-size: 12px;
				font-weight: 400;
				line-height: 22px;
				cursor: pointer;
			}
			.bm-check-btn:hover:not(:disabled) {
				background: #fff;
				border-color: #d5d8df;
				color: #333;
			}
			.bm-check-btn:disabled {
				cursor: default;
				opacity: 0.7;
			}
			a.bm-link-dead,
			a.bm-link-dead > h1,
			a.bm-link-dead > h1:hover,
			a.bm-link-dead > span:not(.bookmark-link-icon) {
				text-decoration: line-through !important;
			}
			a.bm-link-passed > .bookmark-link-icon,
			a.bm-link-passed > .jstree-themeicon {
				position: relative;
			}
			.bm-link-ok {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 2;
				width: 8px;
				height: 4px;
				margin: 0;
				border: solid #1b7f3b;
				border-width: 0 0 2px 2px;
				background: transparent;
				transform: translate(-50%, -70%) rotate(-45deg);
				pointer-events: none;
			}
			a.bm-link-checking > .bookmark-link-icon::after,
			a.bm-link-checking > .jstree-themeicon::after {
				content: "";
				position: absolute;
				inset: 0;
				box-sizing: border-box;
				border: 2px solid rgba(226, 81, 43, 0.25);
				border-top-color: #e2512b;
				border-radius: 50%;
				animation: bm-check-spin 0.7s linear infinite;
				pointer-events: none;
			}
			@keyframes bm-check-spin {
				to { transform: rotate(360deg); }
			}
		`;
		(document.head || document.documentElement).appendChild(style);
	}

	const checkedLinks = new WeakSet();
	const pendingLinks = new WeakSet();
	const checkedUrls = new Set();
	const detailMarks = new Map();
	const hostStatus = new Map();
	const hostTasks = new Map();
	const HOST_STORE = "bm-host-check";

	function loadHostStatus() {
		try {
			const saved = JSON.parse(localStorage.getItem(HOST_STORE) || "{}");
			Object.keys(saved).forEach((host) => {
				if (saved[host] === "pass" || saved[host] === "fail") {
					hostStatus.set(host, saved[host]);
				}
			});
		} catch (e) {
			/* ignore unreadable storage */
		}
	}

	function persistHostStatus() {
		try {
			const saved = {};
			hostStatus.forEach((status, host) => {
				saved[host] = status;
			});
			localStorage.setItem(HOST_STORE, JSON.stringify(saved));
		} catch (e) {
			/* ignore quota or private mode */
		}
	}

	function urlHost(url) {
		try {
			return new URL(url).host.toLowerCase();
		} catch (e) {
			return "";
		}
	}

	function rememberHost(url, failed) {
		const host = urlHost(url);
		if (!host) {
			return;
		}
		hostStatus.set(host, failed ? "fail" : "pass");
		persistHostStatus();
	}

	function probeByHost(url, run) {
		const host = urlHost(url);
		const known = host && hostStatus.get(host);
		if (known) {
			return Promise.resolve({ skipped: false, failed: known === "fail", cached: true });
		}
		if (host && hostTasks.has(host)) {
			return hostTasks.get(host);
		}
		const task = probe(url, run).then((result) => {
			if (result.skipped || run.stopped) {
				return { skipped: true };
			}
			const failed = isHardFailure(result);
			rememberHost(url, failed);
			return { skipped: false, failed };
		}).finally(() => {
			if (host) {
				hostTasks.delete(host);
			}
		});
		if (host) {
			hostTasks.set(host, task);
		}
		return task;
	}

	loadHostStatus();

	function isHardFailure(result) {
		return result.timedOut || result.status === 404 || result.status >= 500;
	}

	function probe(url, run) {
		return new Promise((resolve) => {
			if (run.stopped) {
				resolve({ skipped: true });
				return;
			}
			const finish = (result) => {
				resolve(run.stopped ? { skipped: true } : result);
			};
			const req = GM.xmlHttpRequest({
				method: "GET",
				url,
				timeout: 15000,
				onload(response) {
					finish({
						status: Number(response.status) || 0,
						timedOut: false
					});
				},
				onerror() {
					finish({ status: 0, timedOut: false });
				},
				ontimeout() {
					finish({ status: 0, timedOut: true });
				}
			});
			if (req) {
				run.requests.add(req);
			}
		});
	}

	async function checkOne(link, run) {
		if (!link || checkedLinks.has(link) || pendingLinks.has(link) || run.stopped) {
			return;
		}
		const url = viewTargetUrl(link);
		pendingLinks.add(link);
		if (!url) {
			pendingLinks.delete(link);
			checkedLinks.add(link);
			return;
		}
		let failed = false;
		let skipped = false;
		const known = urlHost(url) && hostStatus.has(urlHost(url));
		if (!known) {
			link.classList.add("bm-link-checking");
		}
		try {
			const result = await probeByHost(url, run);
			skipped = !!result.skipped || run.stopped;
			failed = !skipped && result.failed;
		} finally {
			link.classList.remove("bm-link-checking");
		}
		pendingLinks.delete(link);
		if (skipped) {
			return;
		}
		checkedLinks.add(link);
		paintLink(link, failed);
	}

	function markHost(link) {
		return link.querySelector(":scope > .bookmark-link-icon")
			|| link.querySelector(":scope > .jstree-themeicon")
			|| link.querySelector(".bookmark-link-icon")
			|| link;
	}

	function paintLink(link, failed) {
		if (!link) {
			return;
		}
		const host = markHost(link);
		const existing = link.querySelector(".bm-link-ok");
		if (!failed) {
			link.classList.add("bm-link-passed");
			link.classList.remove("bm-link-dead");
			if (!host.querySelector(":scope > .bm-link-ok")) {
				if (existing) {
					existing.remove();
				}
				const mark = document.createElement("span");
				mark.className = "bm-link-ok";
				mark.setAttribute("aria-hidden", "true");
				host.appendChild(mark);
			}
			return;
		}
		link.classList.add("bm-link-dead");
		link.classList.remove("bm-link-passed");
		if (existing) {
			existing.remove();
		}
	}

	function applyStoredMarks(root) {
		if (!root || root.nodeType !== 1 || !detailMarks.size) {
			return;
		}
		const links = [];
		if (root.matches && root.matches("a[data-identification]")) {
			links.push(root);
		}
		if (root.querySelectorAll) {
			root.querySelectorAll("a[data-identification]").forEach((link) => links.push(link));
		}
		links.forEach((link) => {
			const status = detailMarks.get(link.getAttribute("data-identification"));
			if (!status) {
				return;
			}
			paintLink(link, status === "fail");
			checkedLinks.add(link);
		});
	}

	async function checkPiece(piece, button, run) {
		const labels = checkLabel();
		const links = [...piece.querySelectorAll("a.bookmark-link")];
		let done = 0;
		button.textContent = labels.stop + " 0/" + links.length;

		let cursor = 0;
		async function worker() {
			while (cursor < links.length && !run.stopped) {
				const link = links[cursor++];
				await checkOne(link, run);
				if (run.stopped) {
					return;
				}
				done += 1;
				button.textContent = labels.stop + " " + done + "/" + links.length;
			}
		}

		const workers = [];
		const size = Math.min(CHECK_LIMIT, links.length);
		for (let i = 0; i < size; i++) {
			workers.push(worker());
		}
		await Promise.all(workers);
		button.textContent = resultLabel(labels, links, run.stopped);
		run.finished = true;
	}

	function collectDetailJobs() {
		const jobs = new Map();
		const byIdent = new Map();
		document.querySelectorAll("a[data-identification]").forEach((link) => {
			const ident = link.getAttribute("data-identification");
			if (!ident) {
				return;
			}
			if (!byIdent.has(ident)) {
				byIdent.set(ident, []);
			}
			byIdent.get(ident).push(link);
		});

		function add(url, ident, link) {
			const target = httpUrl(url);
			if (!target || checkedUrls.has(target)) {
				return;
			}
			let job = jobs.get(target);
			if (!job) {
				job = { url: target, idents: new Set(), links: new Set() };
				jobs.set(target, job);
			}
			if (ident) {
				job.idents.add(ident);
			}
			if (link) {
				job.links.add(link);
			}
		}

		const api = jstreeApi();
		if (api && api.get_json && api.get_node) {
			try {
				(api.get_json("#", { flat: true }) || []).forEach((item) => {
					const node = api.get_node(item.id);
					const attr = node && node.a_attr;
					if (!attr || !attr["data-ext"]) {
						return;
					}
					const ident = attr["data-identification"] || "";
					add(attr["data-ext"], ident, attr.id ? document.getElementById(attr.id) : null);
					(byIdent.get(ident) || []).forEach((link) => add(attr["data-ext"], ident, link));
				});
			} catch (e) {
				/* tree not ready */
			}
		}
		document.querySelectorAll("a.bookmark-link, #json a[data-ext], #json a.jstree-anchor").forEach((link) => {
			add(viewTargetUrl(link), link.getAttribute("data-identification"), link);
		});
		return [...jobs.values()];
	}

	async function checkDetail(button, run) {
		const labels = checkLabel();
		const jobs = collectDetailJobs();
		let done = 0;
		button.textContent = labels.stop + " 0/" + jobs.length;

		let cursor = 0;
		async function worker() {
			while (cursor < jobs.length && !run.stopped) {
				const job = jobs[cursor++];
				const visible = [...job.links].filter((link) => !checkedLinks.has(link));
				const known = urlHost(job.url) && hostStatus.has(urlHost(job.url));
				if (!known) {
					visible.forEach((link) => link.classList.add("bm-link-checking"));
				}
				let failed = false;
				let skipped = false;
				try {
					const result = await probeByHost(job.url, run);
					skipped = !!result.skipped || run.stopped;
					failed = !skipped && result.failed;
				} finally {
					visible.forEach((link) => link.classList.remove("bm-link-checking"));
				}
				if (skipped) {
					return;
				}
				checkedUrls.add(job.url);
				job.idents.forEach((ident) => detailMarks.set(ident, failed ? "fail" : "pass"));
				const marked = new Set(visible);
				job.idents.forEach((ident) => {
					document.querySelectorAll("a[data-identification]").forEach((link) => {
						if (link.getAttribute("data-identification") === ident) {
							marked.add(link);
						}
					});
				});
				marked.forEach((link) => {
					paintLink(link, failed);
					checkedLinks.add(link);
				});
				done += 1;
				button.textContent = labels.stop + " " + done + "/" + jobs.length;
			}
		}

		const workers = [];
		const size = Math.min(CHECK_LIMIT, jobs.length);
		for (let i = 0; i < size; i++) {
			workers.push(worker());
		}
		await Promise.all(workers);
		button.textContent = detailResultLabel(labels, run.stopped);
		run.finished = true;
	}

	function pageKind() {
		const path = location.pathname;
		if (/^\/detail\//.test(path)) {
			return "detail";
		}
		if (/^\/folder\//.test(path)) {
			return "folder";
		}
		if (path === "/" || /^\/page\/?$/.test(path) || /^\/s\/search\/?$/.test(path)) {
			return "list";
		}
		return "";
	}

	function makeButton(text, extraClass) {
		const button = document.createElement("button");
		button.type = "button";
		button.className = extraClass ? "bm-check-btn " + extraClass : "bm-check-btn";
		button.textContent = text;
		return button;
	}

	function wireCheck(button, getLinks) {
		const labels = checkLabel();
		let run = null;
		button.addEventListener("click", () => {
			if (run && !run.finished && !run.stopped) {
				run.stopped = true;
				run.requests.forEach((req) => req.abort?.());
				button.textContent = labels.button;
				return;
			}
			run = { stopped: false, finished: false, requests: new Set() };
			checkPiece({ querySelectorAll: () => getLinks() }, button, run);
		});
	}

	function jstreeApi() {
		const page = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
		const $ = page.jQuery || page.$;
		if (!$ || !$.fn || !$.fn.jstree) {
			return null;
		}
		try {
			return $("#json").jstree(true);
		} catch (e) {
			return null;
		}
	}

	function bindPiece(piece) {
		if (piece.querySelector(":scope > .bm-check-bar, :scope > .document-piece-header > .bm-check-btn")) {
			return;
		}
		const button = makeButton(checkLabel().button);
		wireCheck(button, () => piece.querySelectorAll("a.bookmark-link"));
		const header = piece.querySelector(":scope > .document-piece-header");
		if (header) {
			button.classList.add("in-header");
			header.appendChild(button);
			return;
		}
		const bar = document.createElement("div");
		bar.className = "bm-check-bar";
		bar.appendChild(button);
		piece.insertBefore(bar, piece.firstChild);
	}

	function bindDetail() {
		const header = document.querySelector(".content-header");
		if (!header || header.querySelector(":scope > .bm-detail-actions")) {
			return;
		}
		const labels = checkLabel();
		const bar = document.createElement("div");
		bar.className = "bm-detail-actions";

		const fold = makeButton(labels.openAll);
		fold.addEventListener("click", () => {
			const api = jstreeApi();
			if (!api) {
				return;
			}
			if (fold.dataset.mode !== "close") {
				api.open_all();
				fold.dataset.mode = "close";
				fold.textContent = labels.closeAll;
				return;
			}
			api.close_all();
			fold.dataset.mode = "open";
			fold.textContent = labels.openAll;
		});
		const check = makeButton(labels.button);
		let run = null;
		check.addEventListener("click", () => {
			if (run && !run.finished && !run.stopped) {
				run.stopped = true;
				run.requests.forEach((req) => req.abort?.());
				check.textContent = labels.button;
				return;
			}
			run = { stopped: false, finished: false, requests: new Set() };
			checkDetail(check, run);
		});

		bar.append(fold, check);
		header.appendChild(bar);
		pinDetailHeader();
		if (!pinDetailHeader.bound) {
			pinDetailHeader.bound = true;
			window.addEventListener("resize", pinDetailHeader);
		}
	}

	function pinDetailHeader() {
		const header = document.querySelector(".content-header");
		if (!header) {
			return;
		}
		header.classList.add("bm-sticky-header");
		let top = 0;
		document.querySelectorAll(".navbar-fixed-top").forEach((nav) => {
			const style = getComputedStyle(nav);
			if (style.display === "none" || style.visibility === "hidden") {
				return;
			}
			const height = nav.getBoundingClientRect().height;
			if (height > top) {
				top = height;
			}
		});
		header.style.setProperty("--bm-sticky-top", Math.round(top) + "px");
	}

	function bindFolder() {
		const meta = document.querySelector(".header .header-meta");
		if (!meta || meta.parentElement?.querySelector(":scope > .bm-check-bar")) {
			return;
		}
		const bar = document.createElement("div");
		bar.className = "bm-check-bar";
		const button = makeButton(checkLabel().button);
		wireCheck(button, () => document.querySelectorAll("a.bookmark-link"));
		bar.appendChild(button);
		meta.insertAdjacentElement("afterend", bar);
	}

	function scan(root) {
		const kind = pageKind();
		if (!kind || !root || root.nodeType !== 1) {
			return;
		}
		if (kind === "detail") {
			bindDetail();
			applyStoredMarks(root);
			return;
		}
		if (kind === "folder") {
			bindFolder();
			return;
		}
		if (root.matches && root.matches(".document-piece")) {
			bindPiece(root);
		}
		if (root.querySelectorAll) {
			root.querySelectorAll(".document-piece").forEach(bindPiece);
		}
	}

	function startCheck() {
		if (!pageKind()) {
			return;
		}
		injectCheckStyle();
		const boot = () => {
			const root = document.documentElement;
			if (!root) {
				return;
			}
			scan(root);
			const observer = new MutationObserver((mutations) => {
				for (const mutation of mutations) {
					for (const node of mutation.addedNodes) {
						if (node.nodeType !== 1 || node.classList?.contains("bm-check-btn") || node.classList?.contains("bm-check-bar") || node.classList?.contains("bm-detail-actions")) {
							continue;
						}
						scan(node);
					}
				}
			});
			observer.observe(root, { childList: true, subtree: true });
		};
		if (document.body) {
			boot();
		} else {
			document.addEventListener("DOMContentLoaded", boot, { once: true });
		}
	}

	if (/^\/view\//.test(location.pathname)) {
		startRedirect();
	} else {
		startCheck();
	}
})();
