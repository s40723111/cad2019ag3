var tipuesearch = {"pages": [{'title': '成員', 'text': '組長: \n 40723104 \xa0 \xa0 \xa0 \xa0\xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0\xa0 • 網站 \n 組員: \n 40423208\xa0 \xa0 \xa0 \xa0  • 倉儲 \xa0 \xa0 \xa0 \xa0\xa0 • 網站 \n 40523142\xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723106\xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723108\xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723111\xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723121\xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723123 \xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723126\xa0 \xa0 \xa0\xa0 \xa0\xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723128 \xa0 \xa0 \xa0 \xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0\xa0 \xa0 • 網站 \n 40723130 \xa0 \xa0 \xa0\xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 40723133 \xa0 \xa0 \xa0\xa0 \xa0 • 倉儲 \xa0 \xa0 \xa0 \xa0 \xa0 • 網站 \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n <<<<<<< HEAD \n', 'tags': '', 'url': '成員.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'NX12翻譯', 'text': '', 'tags': '', 'url': 'NX12翻譯.html'}, {'title': '前言', 'text': 'NX 是世界上最先進的CAD/CAM/CAE集成產品之一Simmen PLM software 所開發，可開發之產品非常廣泛，NX簡化複雜的產品並加快了產品推向市場的過程，為企業提供了一個巨大的價值。 NX結合了許多科學原理、概念設計、3D建模、文檔、工程分析、圖形模擬和並行工程。擁有強大的混和建模過能，除了建模標準零件也可以用於設計複雜的形狀如:機翼，實體和去面建模技術讓他成為強大的工具集。 這本教學指南將一步步教使用者使用NX12，目標是以前沒使用過NX的使用者，但是使用舊版本NX的用戶可以學習新的介面和功能，用戶將從NX12開始到創建模具各種功能的模型設計指導應用程序，每一章都會透過對話框和截圖來說明，這些組件隨後用於裝配建模，加工和有限元素分析。組件文件也可以在線下載和使用。我們先發布了Unigraphics 18教程，隨後針對NX 2進行了更新，隨後更新了NX 3，NX 5，NX 7，NX 9和NX10。此內容進一步更新了NX 12。\\ \n 翻譯40723123 \n', 'tags': '', 'url': '前言.html'}, {'title': '第一章', 'text': '現代製造環境的特徵在於交付範式品種不斷增加的產品，在不斷增加的情況下，小批量和高質量全球競爭。除非引入新的行業，否則它們無法在全球競爭中生存產品質量更高，成本更低，交付週期更短。有激烈國際競爭和技術工人的減少。隨著變化計算能力和更廣泛的設計和生產軟件工具可用性，工程師們現在使用計算機輔助設計CAD、計算機輔助製造CAM、計算機輔助工程CAE系統可使其設計和生產過程自動化。這些現在，技術每天都用於各種不同的工程任務。下面是一個簡短的產品期間如何使用CAD，CAM和CAE技術的說明實現過程。 \n 1.1產品實現過程 \n 產品實現過程可以大致分為兩個階段：設計和製造。設計過程從識別新客戶需求和要設計的變量開始改進，由營銷人員從顧客。一旦收集了相關的設計信息，便制定了設計規範。進行可行性研究並提供相關設計信息以及詳細的設計和分析執行。詳細設計包括設計概念化，預期產品圖紙，草圖和幾何建模。分析包括壓力分析，干擾檢查，運動學分析，質量特性計算和公差分析以及設計優化。從這些活動中獲得的結果的質量與分析的質量以及進行分析的工具。 製造過程從生產開始的車間活動開始規劃，使用設計過程圖並以實際產品結束。處理規劃包括生產計劃，材料採購和機器等活動選擇。有各種各樣的任務，例如購買新工具，NC編程和質量在生產過程的各個階段進行檢查。流程計劃包括對產品製造中使用的所有流程的規劃。通過質量控制檢查的零件經功能測試組裝，包裝，貼標籤並運送給客戶。 \n 表示產品實現過程的圖（Ibrahim Zeid撰寫的Mastering CAD / CAM，麥格勞·希爾（McGraw Hill，2005）。圖 \n \n 1.2 CAD / CAM開發的簡要歷史 \n 當前的CAD / CAM技術的起源可以追溯到文明的開始埃及的工程師認可圖形通信。正交投影實踐今天是在1800年代發明的CAD / CAM系統的真正開發始於1950年代。 CAD / CAM在上個世紀經歷了四個主要的發展階段。 1950年代被稱為交互式計算機圖形時代。麻省理工學院伺服機構實驗室在三軸銑床上演示了數控（NC）的概念。發展歷程在這個時代，由於當時計算機的缺點而放慢了速度。1950年代後期開始開發自動編程工具（APT），並探索通用汽車公司互動圖形的潛力。 1960年代是交互式計算機圖形學最關鍵的研究時期。伊万·薩瑟蘭開發了一個畫板系統，該系統演示了創建圖紙的可能性以及陰極射線管（CRT）上的物體交互。CAD一詞開始出現“設計”一詞超出了基本的製圖概念。通用汽車宣布了他們的DAC-1系統和Bell Technologies推出了GRAPHIC 1遠程顯示系統。 1970年代，計算機圖形學的前十年研究開始富有成果，並實現了交互式計算機圖形在提高生產力方面的潛力按行業，政府和學術界。 1970年代被描述為計算機的黃金時代起草和特別儀器設計應用程序的開始。國家計算機圖形協會（NCGA）成立，並且初始圖形交換規範（IGES）開始了。 在1980年代，新的理論和算法得到了發展，並且將各種設計要素整合在一起並發展了製造業。主要的研發重點是擴大CAD / CAM系統超越了三維幾何設計，提供了更多的工程設計應用程序。 當前的CAD / CAM開發側重於高效，快速的集成和自動化設計和製造的各種要素以及新算法的開發。有許多商業化的CAD / CAM軟件包可用於用戶友好的直接使用而且非常熟練。 \n 以下是當前市場中的一些商業軟件包。 \n Solid Edge, AutoCAD, Inventor and TurboCAD是一些負擔得起的CAD軟件系統。 \n NX, Pro-E, CATIA and SolidWorks是高端的建模和設計軟件更昂貴但功能更強大的系統。這些軟件系統還具有計算機輔助的製造和工程分析功能。 \n Onshape and Fusion 360是基於 CAD software提供CAD用戶的瀏覽器。 \n ANSYS, ABAQUS, NASTRAN and COMSOL 是主要用於CAE的軟件包目的。 \n 1.3 定義CAD/CAM/CAE \n 1.3.1 Computer Aided Design – CAD CAD是與使用計算機系統協助創建，修改，分析和優化設計。任何體現計算機圖形的計算機程序可以對在設計過程中促進工程功能的應用程序進行分類作為CAD軟件。 \n CAD的最基本作用是定義設計的幾何形狀-機械零件，產品組件，建築結構，電子電路，建築物佈局等。最偉大的CAD系統的好處是可以節省大量時間並減少由否則，每次需要時，都必須從頭開始重新定義設計的幾何形狀。 \n 1.3.2 Computer Aided Manufacturing – CAM \n CAM技術涉及計劃，管理和控制製造的計算機系統通過計算機界面與工廠的生產資源進行操作。 CAM最重要的領域之一是數控（NC）。這是使用的技巧用於控制機床的程序化指令，該機床可以進行原始的切削，銑削，磨削，沖壓或車削庫存成成品。 CAM的另一個重要功能是在機器人編程中。流程計劃也是計算機自動化的目標。 \n 1.3.3 Computer Aided Engineering – CAE \n CAE技術使用計算機系統來分析CAD創建的產品的功能，允許設計師模擬和研究產品的行為，以便設計完善和優化。 CAE工具可用於許多不同類型的分析。例如運動學分析程序可用於確定機構中的運動路徑和連桿速度。動態分析程序可用於確定複雜結構中的載荷和位移裝配，例如汽車。最受歡迎的分析方法之一是使用有限元素方法（FEM）。該方法可用於確定應力，變形，傳熱，磁場分佈，流體流動以及其他通常很難解決的連續磁場問題用其他方法解決。 \n 1.4。本教程的範圍 \n 本教程是為有興趣學習如何使用NX 12的學生和工程師編寫的用於設計機械零件和組件。學習使用NX 12也將很有價值學習如何使用其他CAD系統，例如PRO-E和CATIA。本教程提供了學習NX 12的系統方法。 \n 第2章介紹了從開始會話到熟悉NX的NX 12基本知識。通過練習基本功能（如打印，保存和退出）來佈局12。它還給出了簡短的描述坐標系，圖層，各種工具箱和其他重要命令在後面的章節中使用。 \n 第3章介紹了素描的概念。它描述瞭如何創建草圖並給出幾何和尺寸約束。從今天開始，本章非常重要組件的幾何形狀非常複雜，僅憑基本特徵很難建模。零件的實際設計和建模始於第4章。它描述了不同的功能例如參考特徵，掃描特徵和原始特徵，以及如何使用這些特徵創建設計。對特徵執行各種特徵操作。 \n 您將在第5章中學習如何從零件模型創建工程圖。在本章中，我們將通過添加視圖，標註零件圖紙尺寸來演示如何創建圖紙，以及修改圖形中的各種屬性，例如文本大小，箭頭大小和公差。 \n 第6章介紹了裝配建模的概念及其術語。它描述了TopDown建模和Bottom-Up建模。我們將使用自下而上的模型進行組裝組件變成產品。 \n 第7章介紹了自由格式建模。曲線和平滑曲面的建模方法將被演示。 \n 第8章概述了NX 12中提供的Design Simulations的簡要介紹。有限元分析。 \n 第9章將是在製造中實施設計模型的實時經驗加工環境。本章介紹工具的生成，驗證和模擬 創建CNC（計算機數字代碼）以從多軸生產設計零件的路徑甚至先進的CNC機器。 \n 每章中使用的示例和練習問題都經過精心設計，以使它們最終得以應用組裝在本章中。由於這項獨特的功能，您應該保存所有的模型在每一章中都有創建。 \n 翻譯40723123 \n ======= \n', 'tags': '', 'url': '第一章.html'}, {'title': '第二章', 'text': '第 2 章 - 入門 \n 首先開始 NX 12 會話。 本章將提供使用所需的基礎知識 \n 任何 CAD / CAM 軟體包。 您將學習開始，理解和使用 \n 用於建模，製圖等的 NX 12 軟體包。它包含五個小節： a ）打開 NX 12 \n 會話， b ）打印，保存和關閉零件文件， c ）熟悉 NX 12 用戶 \n 界面 d ）使用圖層和 e ）了解重要的命令和對話框。 \n 2.1 啟動 NX 12 會話並打開文件 \n 2.1.1 開始 NX 12 會話 \n 在 Windows 桌面屏幕上，單擊開始→程序列表→ Siemens NX 12 → NX 12 \n \n NX 12 主螢幕將打開。 這是 NX 12 軟體的閘道器。 \xa0 NX 12 空白 \n 屏幕看起來如下圖所示。 屏幕上將顯示一些提示，關於 \n 當前版本的特殊功能。 閘道器還具有標準工具欄，它將 \n 允許您創建一個新文件或打開一個現有文件。 在“閘道器”屏幕的左側，有 \n 是一個稱為“資源欄”的工具欄，它具有與不同模塊相關的菜單，並且能夠 \n 定義和更改軟體的角色，查看軟體使用的歷史記錄等。 這會 \n 將在本章稍後詳細解釋。 \n \n 2.1.2 打開一個新文件 \n 首先，我們學習如何在 NX 12 中打開新零件文件。要創建新文件，請執行以下三個操作選項。 \n 單擊螢幕頂端的“新建”按鈕 \n 瀏覽屏幕左上方的 File （文件）下拉菜單，然後單擊 New （新建）。 \n 或按 <Ctrl> + N \n 這將打開一個新會話，詢問要創建的新文件的類型，名稱和位置。 \n NX 12 中有多種文件類型，可從位於以下位置的“模板”對話框中選擇 \n 窗口的中心。 所選文件的屬性顯示在“預覽”下 \n 右邊。 由於我們要在建模環境中工作並創建新零件，因此僅 \n 指定工作環境的單位（英寸或毫米）以及名稱和位置 \n 文件。 默認單位是毫米。 \n 輸入文件的適當名稱和位置，然後點擊“確定”。 \n \n 2.1.3 打開零件文件 \n 有幾種打開現有文件的方法。 \n 點擊螢幕頂端的打開或打開最近的零件按鈕要么 \n 瀏覽屏幕左上方的 File （文件）下拉菜單，然後單擊 Open （打開）。 \n 或按 <Ctrl> + O 將顯示“打開零件文件”對話框。 您可以在右側查看文件預覽 \n 窗口。 您可以通過取消單擊“預覽”按鈕前面的框來禁用“預覽”點擊取消退出窗口 \n \n 2.2列印，保存和關閉文件 \n 2.2.1列 印 NX 12 圖像要從當前顯示器打印圖像，點擊文件→打印\xa0 \xa0 \n 下圖顯示了“打印”對話框。 這裡， \n 您可以選擇要使用的打印機或指定編號 \n 打印份數，紙張尺寸等。 \n 您還可以為所有三個選擇比例尺寸。 \n 您也可以選擇 \n 通過單擊來打印，即線框實體模型 \n 輸出下拉菜單，如右圖所示 \n 單擊取消退出窗口 \n 2.2.2 保存零件文件 \n 必須經常保存工作。 如果 \n 由於某些原因， NX 12 會關閉，而零件沒有 \n 儲存後，所有工作都會丟失。 要儲存零件文件，點擊文件→儲存 \n 有五個選項可儲存文件： \n 儲存：此選項將使用 \n 與創建零件文件時給定的名稱相同。 \n 僅保存工作零件：此選項將僅保存螢幕上的活動部分。 \n 另存為：此選項允許您使用其他名稱和 / 或類型將零件保存在螢幕上。 \n 默認類型是 .prt 。 但是，您可以將文件另存為 IGES （ .igs ）， STEP 203 （ .stp ）， STEP 214 （ .step ）， AutoCAD DXF （ .dxf ）， AutoCAD DWG （ .dwg ）， CATIA 模型（ .model ）和 CATIA V5 （ .catpart ）。 \n 全部保存：此選項將保存所有打開的零件文件及其現有名稱。 \n 保存書籤：此選項會將螢幕截圖和當前模型的上下文保存在螢幕上 \n 作為 .JPEG 文件和書籤。 \n \n 2.2.3 關閉零件文件 \n 您可以選擇關閉零件在螢幕上可看見點擊文件→關閉 \n 如果您關閉文件，該文件將從以下位置清除 \n 工作記憶和任何更改不保存將丟失。 因此，請記住 \n 選擇“保存並關閉”，“另存並關閉”， \n 保存所有並關閉或保存所有並退出。 在在前三個選項的情況下， \n 已選擇，否則所有零件都將關閉，但 NX 12 會話繼續運行。 \n \n 2.2.4 退出 NX 12 會話 \n 點擊文件→退出 \n \n 如果您打開了文件並在未保存的情況下進行了更改，則消息將詢問您是否 \n 真的想退出。選擇否，保存文件，然後退出 \n . NX 12 接口 \n 通過使用不同的圖標， NX 12 的用戶界面變得非常簡單。大部分的 \n 可以通過在屏幕上導航滑鼠並單擊圖標來執行命令。 \n 鍵盤輸入主要限於輸入值和命名文件。 \n 2.3.1 滑鼠功能 \n 2.3.1.1 滑鼠左鍵（ MB1 ） \n 滑鼠左鍵（在 NX 中稱為鼠標鍵 1 （ MB1 ））用於選擇圖標，菜單， \n 和圖形屏幕上的其他實體。 在任何功能上雙擊 MB1 都會自動 \n 打開“編輯對話框”。 單擊對像上的 MB1 ，使用戶可以快速訪問 \n 如下所示的幾個選項。 這些選項將在下一章中討論。 \n \n 2.3.1.2 滑鼠中鍵（ MB2 ） \n 滑鼠中鍵（ MB2 ）或滾動按鈕用於通過按下來旋轉對象， \n 按住並拖動。 模型也可以繞單個軸旋轉。 繞軸旋轉 \n 垂直於屏幕，將滑鼠指針放在圖形屏幕的右邊緣附近，然後 \n 旋轉。 同樣，對於垂直軸和垂直於屏幕的軸，單擊底部 \n 屏幕的上邊緣和上邊緣分別旋轉。 如果您同時按住 MB2 \n 位置幾秒鐘，它將固定旋轉點（出現橙色圓圈符號） \n 您可以在對象周圍拖動以查看。 \n 如果是滾動按鈕，則可以通過滾動對象來放大和縮小。 單擊 MB2 將 \n 如果打開了任何彈出窗口或對話框，還可以執行“確定”命令 \n \n 2.3.1.3 鼠標右鍵（ MB3 ） \n MB3 或滑鼠右鍵用於訪問用戶界面彈出窗口菜單。 您可以訪問後續彈出的選項取決於選擇模式和應用。 的下圖顯示在草圖中應用。單擊 MB3 時選擇功能將提供選項與該功能有關（對象 / 動作菜單）。 \n \n 單擊 MB3 並按住按鈕將在功能周圍顯示一組圖標。這些圖標具有可應用於功能的可能命令 \n \n 2.3.1.4 按鈕組合 \n 放大 / 縮小： \n 同時按住 MB1 和 MB2 並拖動 \n 按住鍵盤上的 <Ctrl> 按鈕，然後按住並拖動 MB2 \n \n 同時按住 MB2 和 MB3 並拖動 \n 要按住鍵盤上的 <Shift> 按鈕並按住 MB2 \n \n 菜單快捷方式： \n ➢按住 <Ctrl> + <Shift> 和 MB1 ， MB2 和 MB3 可以看到功能的快捷方式， \n 直接草圖組和同步建模組 \n 2.3.2 NX 12 網關 \n 下圖顯示了打開文件時 NX 12 窗口的典型佈局。 這是 NX 12 的閘道器可以選擇要處理的任何模塊，例如建模，必須注意這些工具欄可能不完全在同一位置 \n 如下圖所示。 工具欄可以放置在屏幕上的任何位置或位置。查找相同的圖標集。 \n \n 2.3.2.1 功能區欄 \n 功能區界面使用戶能夠輕鬆訪問不同的命令，而無縮小圖形窗口區域。命令組織在不同選項卡下的功能區欄中和組，以便於識別和訪問。 \n 例如，在上圖所示的功能區欄中，我們具有“開始”，“曲線”等選項。在裡面 \n 主頁選項卡中，我們具有直接草圖，特徵，同步建模和曲面組。 並且在每個 \n 組中，我們有一組功能強大的命令。 \n 2.3.2.2 快速訪問工具欄 \n 快速訪問工具欄具有最常用的按鈕（保存，復原，重做，剪切，複製，貼上和 \n 最近的命令）以加快建模過程。 您可以輕鬆地將這些按鈕自定義為如下圖所示 \n \n 2.3.2.3 命令查找器 \n 如果您不知道在哪裡可以找到命令，請使用“命令查找器”。 假設我們忘記了 \n 樣式掃描的位置。 \n 在命令查找器中輸入掃描將游標懸停在樣式掃描上 \n NX 將顯示命令路徑：菜單→插入→掃描→樣式化掃描 \n 或是在命令查找器中輸入掃描在“命令查找器”窗口中單擊樣式化掃描 \n \n 2.3.2.4 上邊界 \n 頂部邊框中最重要的按鈕是菜單按鈕。 大部分功能菜單中提供了該軟件的版本。 選擇欄顯示選擇選項。 這些選項包括用於選擇特徵的“過濾器”，“零部件 / 裝配體”和“捕捉點”。 “視圖”選項中的常用按鈕也顯示在“頂部邊框”中。 \n 2.3.2.5 資源欄 \n 資源欄使用很少的用戶界面就可以在一處顯示多個頁面的圖標空間。 \xa0 NX 12 將所有導航器窗口（裝配體，約束和零件）放置在資源欄中，以及重用庫， HD3D 工具，網頁瀏覽器，歷史記錄面板， Process Studio ，製造嚮導，角色和系統場景。 兩個最重要的寡婦是解釋如下 \n 零件導航器 \n 單擊零件瀏覽器圖標，第三個資源欄頂部的圖標 \n \n 零件導航器提供可視化表示要素中的父子關係以樹型格式在單獨的窗口中工作。它顯示了在此期間使用的所有原語，實體造型。 它允許您執行各種編輯這些功能上的操作。 例如，您可以使用零件導航器來抑製或取消抑制功能或更改其參數或位置尺寸。 刪除綠色的勾號將“取消”功能。 該軟體會給警告如果父子關係被打破取消任何特定功能。 \n 零件瀏覽器可用於所有 NX 應用程序而不僅僅是建模。 但是，您只能執行功能編輯操作當您在“建模”模塊中時。 在零件瀏覽器中編輯特徵將自動更新模型。 特徵編輯將在後面討論。 \n 歷史 \n 單擊歷史記錄圖標，資源欄頂部的第七個圖標歷史選項板提供對最近打開的文件或其他選項板條目的快速訪問。 有可能用於重新下載最近處理過的零件或重複添加一小組調色板項目的模型。歷史選項板會記住上一次使用的選項板選項以及會話的狀態當它關閉時。 \xa0 NX 存儲已加載到會話中的選板並將其還原到 \n 下屆會議。 移動零件時，系統不會清除歷史記錄選板。要重用零件，請將其從歷史記錄中拖放調色板到圖形窗口。 要重新加載零件，單擊已保存的會話書籤。 \n 2.3.2.6 提示線 \n 提示行顯示提示消息，指示接下來需要採取的行動。 在 \xa0 - \xa0 的右邊提示行，狀態行位於顯示有關當前選項的消息或最近完成的功能。進度表顯示在提示行中 \n 當系統執行耗時的操作，例如下載大型裝配體。 的儀表顯示的操作百分比完成了。 操作完成後，系統顯示下一個適當的提示。 \n \n 2.3.3 幾何選擇 \n 您可以過濾選擇方法，這有助於在緊密的簇中輕鬆選擇幾何。 在此外，您可以執行任何功能 NX 12 智能提供的操作選項取決於所選實體。 項目的選擇可以基於實體的程度，例如選擇幾何實體，特徵和零部件。 選擇方法可以選擇 \n 選擇選擇工具欄中的圖標之一。 \n 2.3.3.1 特徵選擇 \n 點任何圖標，可以選擇零件文件中的特徵。 它不會選擇基本實體，例如邊緣面等。選定的特徵也可以應用於一部分或整個根據要求組裝。 \n \n 除此之外，可以進一步縮小特徵的過濾範圍在下拉菜單中選擇所需選項之一，如數字。 例如，選擇“曲線”將僅高亮顯示屏幕。 默認值為“無選擇過濾器”。 \n \n 2.3.3.2 常規對象選擇 \n 將鼠標光標導航到實體附近，直到用突出顯示它為止洋紅色，然後單擊滑鼠左鍵以選擇任何幾何實體，功能或組件。 \n \n 如果要選擇隱藏在顯示的幾何圖形後面的實體，將滑鼠光標放在屏幕上該區域附近，以便光標球佔據了投影在屏幕上的隱藏幾何的一部分屏幕。幾秒鐘後，球形光標變為加號如圖所示。單擊鼠標左鍵（ MB1 ）以獲取選擇確認對話框，如下圖如下。這個 QuickPick 菜單由實體列表組成捕獲在光標的球內的實體按以下升序排列實體的程度。例如，邊和頂點指定為較低給出實心面的數字更高的數字。通過移動光標顯示的數字， NX 12 將用洋紅色突出顯示屏幕上的相應實體。 \n \xa0 \n 2.3.4 用戶首選項 \n 在菜單按鈕（位於主窗口左上角）中選擇首選項以查找各種可用選項用戶首選項用於定義以下內容的顯示參數：新對象，名稱，佈局和視圖。 您可以設置圖層，創建對象的顏色，字體和寬度。 您也可以設計佈局和視圖，控制對象和視圖的顯示名稱和邊框，更改選擇球的大小，指定選擇矩形方法，設置鏈接公差和方法，以及設計和激活網格。 改變你使用“首選項”菜單進行覆蓋 \n 客戶默認使用相同功能 \n \n 2.3.4.1 用戶界面 \n 選擇首選項→用戶界面以找到對話框中的選項用戶界面選項可自定義 NX 的工作方式以及與您設置的規范進行交互。 您可以控制主窗口的位置，大小和可見性狀態，圖形顯示和信息窗口。 您可以設置系統用於的小數位數（精度）信息中顯示的輸入文本字段和數據窗口。 您還可以為文件指定完整或小型對話框選擇。 您還可以設置宏選項並啟用撤消操作的確認對話框。 \n \n 佈局選項卡允許您選擇用戶界面環境 \n “觸摸”選項卡使您可以使用觸摸屏 \n 通過“選項”選項卡，您可以設置精度級別（在“信息”中窗口） \n 工具中的日誌選項卡允許您使用多種編程語言 \n 工具中的“巨集”選項卡允許您設置顯示動畫時的暫停 \n \n \n 2.3.4.2 可視化 \n ➢選擇首選項→可視化以找到對話框中的選項 \n \n 該對話框控制會影響顯示的屬性圖形窗口。一些屬性與零件或零件的特定視圖的設置這些屬性保存在零件文件中。 對於其中許多屬性，當創建新零件或視圖時，該設置初始化為客戶默認文件。 其他屬性與會話和適用於會話中的所有部分。一些設置這些屬性在每個會話中保存在註冊表。 對於某些會話屬性，設置可以為初始化為客戶默認值默認文件的一個環境變量。 \n ➢選擇“首選項”→“調色板”以查找對話框中的選項 \n ➢點擊首選項→在背景獲取另一個彈出對話框。 \n \n 你可以改變您想要的背景色背景色是指圖形窗口的背景。 \xa0 NX 支持所有顯示模式的漸變背景。 您可以選擇陰影或線框的背景顏色顯示。 背景可以是純色或漸變色。所有背景顏色的有效選項是 0 到 255 。 \n 您可以更改並觀察顏色和物體的半透明 \n ➢單擊首選項→對象 \n \n 這將彈出一個對話框窗口“對象首選項”。您也可以將此設置應用於以下對象的單個實體。 例如，您可以單擊任何特定的實體的表面並應用“顯示”設置。 \n 2.3.5 應用 \n 可以使用“文件”選項打開應用程序位於主窗口的左上角或功能區欄上方的“應用程序”選項卡。 您可以選擇要運行的應用程序類型。對於例如，您可以選擇“建模”，“製圖”組裝，如圖所示。 打開您的計算機時啟動的默認應用程序文件或開始新文件的是 Modeling 。 接下來，我們將介紹其中一些應用程序章節。 \n \n 2.4 層 \n 圖層用於將對象存儲在文件中，並像容器一樣工作以將對象收集到文件中。有條理和一致的方式。 與簡單的視覺工具（例如顯示和隱藏）不同，圖層提供一種永久的方式來組織和管理文件中對象的可見性和選擇性。 \n 2.4.1 圖層控制 \n 使用 NX 12 ，您可以使用“圖層”控制對像是可見還是可選。 一層是 NX 12 中所有對象必須具有的系統定義的屬性，例如顏色，字體和寬度。 NX 12 那裏有 256 個可用層，其中之一始終是工作層。 \xa0 256 個圖層中的任何一個都可以被分配給四種狀態分類之一 \n \n 工作 \n 可選擇的 \n 僅可見 \n 不可見 \n \n 工作層是在其上創建對象的層，並且始終可見並且可以選擇，而它仍然是工作層。啟動新零件文件時，第 1 層是默認的工作層。當工作層更改為另一種類型的層時，先前的工作層將自動變為“可選”，並且可以然後被分配為“僅可見”或“不可見”狀態 \n 可以在一層上的對像數量不受限制。 您可以自由選擇要創建的圖層 \n 對象及其所在層的狀態。 \n 要將狀態分配給一個或多個圖層， \n ➢選擇查看→圖層設置 \n \n 但是，應該注意的是，在關於文件之間層將有利於保持一致性。 \n 2.4.2 分層命令 \n 我們將按照簡單的步驟來練習“層”中的命令。 首先，我們將創建兩個對象 \n （固體）按如下方法處理。實體模型的詳細信息將在下一部分討論章節。 我們在此處繪製的實體僅在本章中用於實踐。 \n ➢選擇文件→新建 \n 命名文件並選擇要在其中保存文件的文件夾。確保在下拉菜單中選擇單位為毫米。 選擇文件類型作為模型 \n ➢選擇菜單→插入→設計特徵→圓錐 \n \n \n ➢在類型下選擇直徑和高度 \n ➢點擊確定 \n ➢ 右鍵單擊屏幕，然後選擇“右側視圖” 三座標 \n ➢右鍵單擊屏幕，然後選擇“渲染”。樣式→陰影 \n 您將能夠看到類似於圖片的實心圓錐在右邊。 \n 讓我們練習一些圖層命令。 \n ➢選擇查看→移動到圖層，系統將要求您選擇一個對象 \n ➢將光標移到圓錐上並單擊，使其突出顯示 \n ➢點擊確定 \n \n 在窗口頂部的“目標層”或“類別”空間中，鍵入 25 並單擊“確定”。 \n 圓錐現在已經到達第 25 層。 它不再是在第 1 層中看到。 \n ➢要查看圓錐體，請單擊查看→圖層設置 \n \n ➢您可以看到第 25 層有對象，而默認的工作層 1 沒有對象。 \n 錐體將再次出現在屏幕上。 保存文件，因為我們 \n 將在本教程的後面部分中使用它。 \n \n 2.5 協調系統 \n NX 中有不同的坐標系。 三軸符號用於標識坐標系。 \n 2.5.1 絕對坐標系 \n 絕對坐標係是從所有對像都被引用。 這是一個固定的坐標系， NX 12 建模空間中每個對象的位置和方向是與這個系統有關。 絕對坐標系（或絕對 CSYS ）還提供了通用的參考框架零件文件。 一個零件文件中 X = 1 ， Y = 1 和 Z = 1 的絕對位置是其他零件文件中的相同位置。 \n \n 圖形窗口左下角的 View Triad 僅是視覺對象代表絕對坐標系方向的指示器模型。 \n \n 2.5.2 工作坐標系 \n 工作坐標系（ WCS ）是您要用於構造時要使用的確定特徵的方向和角度。 \xa0 WCS 的軸表示為 XC ， YC 和 ZC 。（“ \xa0 C ”代表“當前”）。 它可能有多個坐標零件文件中的系統，但其中只有一個可以是工作坐標系。 \n 2.5.3 移動 WCS \n 在這裡，您將學習如何翻轉和旋轉 WCS 。 \n ➢選擇菜單→格式→ WCS \n \n 2.5.3.1 轉換 WCS \n 此過程將移動 WCS 原點到您指定的任何位置，但 WCS 的方向（軸的方向）將保持不變。 \n ➢選擇菜單→格式→ WCS →原點 \n \n 顯示“構造器”對話框。 你可以從頂部的下拉菜單中指定一個點對話框或在 XC ， YC ，和 ZC 字段。大部分工作將與工作有關坐標系而不是絕對坐標系統。 默認為 WCS 。 \n 2.5.3.2 旋轉 WCS \n 您還可以圍繞其軸線之一旋轉 WCS 。 \n ➢選擇菜單→格式→ WCS →旋轉 \n 該對話框顯示了六種旋轉 WCS 的方法。這些旋轉程序遵循正確的旋轉規則。 您還可以指定 WCS 被旋轉。 \n 您可以保存要使用的 WCS 的當前位置和方向作為永久坐標系。 \n ➢選擇菜單→格式→ WCS →保存 \n 2.6 工具欄 \n 工具欄包含圖標，可作為許多功能的快捷方式。右圖正常顯示了工具欄的主要項目顯示。但是，您可以找到更多不同圖標功能命令，基於所選模塊以及模塊是如何定制的。 \n \n 右鍵單擊現有工具欄上的任何位置，將提供其他工具欄的列表。 您可以通過選擇添加任何工具欄。 \n 通常，默認設置對於大多數操作應該足夠了，但是在某些操作期間，可能需要其他工具欄。 如果要添加與命令和工具欄有關的按鈕 \n ➢單擊任何工具欄上的下拉箭頭，然後選擇“自定義” \n \n 這將彈出“自定義”對話框窗口，其中包含“命令”選項卡下所有與每個工具欄有關的工具欄和命令。 要添加命令 \n ➢選擇一個類別並將命令從“命令”列表中拖動到所需的位置 \n \n 您可以通過以下方式自定義 NX 12 界面的設置單擊資源欄上的“角色”選項卡。角色選項卡具有工具欄菜單的不同設置顯示在 NX 12 界面上。 它可以讓你自定義您希望在工具欄中顯示的工具欄接口。 \n \n', 'tags': '', 'url': '第二章.html'}, {'title': '第七章', 'text': '第7章-自由曲面建模 \n \xa0\xa0\xa0 在本章中，您將學習如何在NX 12中創建自由曲面。至此，您已經擁有了學習了使用“表單特徵”或“草圖繪製”創建模型的不同方法。自由曲面建模涉及為美觀或功能目的以曲面形式創建模型， \n \n 7.1概述 \n \xa0\xa0\xa0 在NX 12中，“自由格式功能”選項位於 Menu → Insert → Surface/Mesh Surface/Sweep/Flange Surface 和 Menu → Edit → Surface 更高級操作。您可以通過多種方式從現有的方式創建自由格式功能您擁有的特徵（例如點，邊，曲線等）。 \n 7.1.1從點創建自由特徵 \n \xa0\xa0\xa0 如果您正在構造或預先存在的數據僅包含點，則您可以嘗試使用以下三個選項之一從給定點構建曲面\xa0\xa0\xa0 \n \xa0 \xa0 如果構造幾何包含兩個或多個字符串（曲線，面，邊線）以及彼此平行的一個或多個截面字符串垂直於第一組曲線（參考線），您可以嘗試使用以下選項之一建立自由曲面。 \n ➢從 Menu 點擊 Insert → Surface\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n Four Point Surface: \xa0 ：如果您有四個角點。 \n Through Points: 如果這些點形成一個矩形陣列。 \n From Poles: \xa0 如果定義的點形成一個矩形數組，該矩形數組與通過它們的線相切。 \n \n 7.1.2通過節字符串創建自由形式的特徵 \n \xa0\xa0\xa0 如果構造幾何包含連接的字符串對象（曲線和邊緣），可以使用以下之一創建自由曲面的兩個選項 \n \xa0\xa0\xa0 如果構造幾何包含兩個或多個字符串（曲線，面，邊線）以及彼此平行的一個或多個截面字符串垂直於第一組曲線（參考線），您可以嘗試使用以下選項之一建立自由曲面。 \n ➢從 Menu 點擊 Insert → Mesh Surface \n Ruled:   如果您有兩個大致平行的字符串。 \n Through Curves:   如果三個或三個以上的字符串大致相同平行。 \n 如果構造幾何包含兩個或多個字符串（曲線，面，邊線）以及彼此平行的一個或多個截面字符串垂直於第一組曲線（參考線），您可以嘗試使用以下選項之一建立自由曲面。 \n \n Through Curve Mesh: 如果至少四節使用弦在每個方向上都存在至少兩個弦（平行和垂直）。 \n Swept:   如果至少兩個截面弦大致垂直，則使用 \n ( 從 Menu 選擇 Insert →Sweep ) 7.1.3從面孔創建自由特徵 如果構造幾何包含圖紙或面，則可以使用以下兩個選項之一來構造自由曲面。 Offset Surface:  如果您要偏移面，請使用此選項。 ( 從  Menu  點擊  Insert →Offset/Scale ) \n Extension:   如果您有臉部和邊緣，邊緣曲線或臉部曲線，請使用此選項。（點擊 Insert →Flange Surface →Extension ) 7.2自由形式的功能建模 讓我們來進行一些自由結構建模的練習，其中包括結構化點，點雲，曲線和面孔。結構化點是一組點的已定義行和列。點雲具有一組形成雲的分散點。 7.2.1用點建模 ➢打開文件 freeform_thrupoints.prt ➢右鍵單擊 Toolbars 並確保 Surface Toolbar 被檢查 您將看到七行點 ➢選擇 Insert →Surface →Through Points \n or ➢單擊圖標 Through Points \n ( 在工具欄中對話框如右圖所示彈出 ) ➢對於 Patch Type 選擇 Multiple ➢對於 Closed Along 選擇 Neither ➢對於 Row Degree  and  Column Degree, ➢請點擊 OK 下一個對話框將如下圖所示。 ➢點擊 Chain from All ➢選擇頂部起點和底部終點最左行的點，如下圖所示 點的第一行將突出顯示 。 ➢重複相同的過程以選擇點的前四行。之後，將彈出一個窗口，詢問是否所有點指定，或者如果您想指定另一行。 ➢選擇 Specify Another Row 直到所有行都指定的 ➢指定所有行後，選擇 All Points Specified ➢點擊 Cancel 在 Through Points 窗口 您將看到如下所示的表面。 7.2.2 用點雲建模. ➢打開名為 freeform_cloud.prt 點雲將如下所示。 ➢選擇 Insert → Surface → Fit Surface ➢單擊 Surface Toolbar 工具欄上的此圖標 Fit Surface 將出現以下對話框。 ➢單擊點雲，選擇屏幕上的所有點。 ➢在 Fit Direction 下拉菜單中，選擇 Best Fit 。這匹配點雲坐標系統與原始系統 ➢將 U 和 V 度的默認值更改為 3 ➢點擊 OK 最終表面將如下所示。 7.2.3 使用曲線建模. ➢打開名為 freeform_thrucurves_parameter.prt 的文件 曲線如下圖所示。 ➢選擇 Insert → Mesh Surface → Through Curves ➢選擇第一個 section string ，如下所示。確保選擇左側的某個位置弧線。 方向矢量顯示在字符串的末尾。 ➢單擊鼠標中鍵 MB2 或點擊 Add New Set ➢單擊與第一個相似的下一條曲線，然後單擊鼠標中鍵 MB2 你可以看到一個表面如圖所示，在兩條曲線之間生成 ➢重複相同的步驟以選擇其餘的字符串。 記得點擊 MB2 (or Add New Set)   選擇每條曲線後。 ➢對於 Alignment 選擇 Parameter ➢對於   Patch Type 選擇  Single \xa0  ➢對於   Construction 選擇 Simple 選擇“簡單”選項後，系統會嘗試構建最簡單的表面，使貼劑的數量最少。 ➢點擊 OK 7.2.4使用曲線和麵建模 ➢打開名為 freeform_thrucurves_faces.prt 的文件 曲線和面將顯示為對 ➢選擇   Insert →Mesh Surface →Through Curves ➢選擇頂面的 邊1。 ➢選擇 edge-2， 然後單擊 MB2 ➢在對話框中的 Alignment 部分，取消選中 Preserve Shape 校驗框 \n 您將在屏幕上顯示以下形狀。 \n 確保所有箭頭都指向同一方向（如果不是，請雙擊任一箭頭即可翻轉其方向）。 ➢在 Alignment 對話框選擇 Parameter ➢在 Continuity 對話框 for First Section 選擇 G2 (Curvature)  選項，然後選擇頂面的兩個斑塊 ➢點擊 APPLY ➢現在選擇edge-3，然後單擊 MB2 ➢選擇下平面的三個邊緣 ➢將選項更改為 G2 (Curvature)  在裡面 Continuity 對話框 First Section ➢選擇剛創建的表面，然後單擊 MB2 ➢對於 Continuity 的 Last Section,  選擇 G2 (Curvature)  然後選擇底部三個補丁作為參考 最終的自由曲面應如下所示。 ➢點擊 OK 退出 7.3練習 7.3.1曲線練習 上圖顯示了使用點作為“控制點”或“直通點”創建的三個曲線。下表列出了每條曲線的對應點和建模類型 \xa0 \n （a）在Curve-1和Curve-2之間創建直紋曲面。 \n （b）沿+ Y方向拉伸Curve-3以創建參考曲面。然後創建在Curve-2和Curve-3之間的曲面，該曲面應具有G1（切線）連續性到剛擠出的參考曲面。 \n 提示：您可以將這些點從文本文件導入NX。首先，將點坐標保存到文本文件。 \n 然後，使用“ NX文件”->“導入”->“文件中的點”將其導入。 \n 7.3.2表面練習 \n \n 給定2個點集，這些點集存儲在“ Fit curve.pts”和“ Fit surface.pts”文件中 \n （可在文件夾）。 \n （ a ）將這兩組點導入 NX 。 （上圖顯示了預期的結果） （b）根據“ Fit curve.pts”文件中的點創建樣條曲線。您可以使用 Fit Curve 要創建它，請調整 Degree  和  Segments 以獲得更好的擬合。 （c）根據“ Fit surface.pts”文件中的點創建自由曲面。您可以使用Fit Surface要創建它，請調整Degree 和 Patche以獲得更好的擬合度。 \n （d）使用樣條曲線作為邊界沿Z方向修剪自由曲面。的預期結果就像計算機鼠標的上表面。 7.3.3設計計算機鼠標 對與以下所示類似的計算機鼠標進行建模（可隨意搜索更多圖片，如下所示）參考資料），或者您可以提出一個新設計，然後對其建模。作為提示，創建一些在不同基準平面上的邊界曲線，並使用它們創建自由曲面。 7.3.4設計運動水壺 \n 設計運動水壺，並使用 NX （曲線和曲面）中的自由形狀功能對其建模。 \n \n', 'tags': '', 'url': '第七章.html'}, {'title': '第八章', 'text': '第 8 章－有限元分析 \n 有限元分析（ FEA ）是有限元方法（ FEM ）的實際應用預測結構或流體對應用因素（例如力，壓力，熱量和振動。通常，該過程從創建幾何模型開始。然後將模型細分（網格化）為連接的簡單幾何形狀的小塊（元素）在特定的節點上。材料特性和邊界條件分別應用於元件。最終，諸如 NX 12 之類的軟件解決了該 FEA 問題並輸出了結果，可視化。它有助於工程師在使用之前更好地了解產品性能。它是經過製造和測試的。 \n FEA的一些應用包括結構分析，熱分析，流體流動動力學，和電磁兼容性。其中， FEA 最常用於結構和實體力學應用程序來計算機械性能（例如應力和位移）。這些通常對硬件的性能至關重要，可用於預測故障。在在本章中，我們將處理實體零件的結構應力和應變分析。 \n 8.1概述 \n 8.1.1元素形狀和節點 \n 可以根據維數和元素的類型將元素分為不同類型。元素中的節點數。以下是一些用於離散化 \n 一維元素 \n 二維元素 \n 三角形： \n 四邊形： \n 三維元素 \n 四面體（具有四個三角形面的實體）： \n 六面體（具有 6 個四邊形面的實體）： \n 節點類型 \n 外部節點 \n 1角節點 \n 2側節點 \n 內部節點 \n 通常，隨著有限元的大小變小， FEA 可以有更精確的解決方案，但是計算時間也會變長。 \n 8.1.2解決步驟 \n 開始仿真： 您可以從以下之一選擇求解器： NX Nastran ， NX Nastran 聲學， NX Nastran 振動聲學， NX Nastran 設計， Samcef ， NX 熱 / 流量， Simcenter 電子系統冷卻， Simcenter 空間系統熱學， NX Multiphysics ， Simcenter Acoustics BEM ， MSC Nastran ， Ansys ， Abaqus 和 LS-DYNA 。另外，您可以選擇要執行的分析類型。在本教程中，僅結構分析將是覆蓋了 NX Nastran 設計。 \n 選擇材料屬性： 這使您可以更改將要分配給模型。例如，如果我們使用鋼製造葉輪，則可以輸入材料特性，例如密度，泊鬆比等。也可以保存這些材料特性可以在圖書館中使用以備將來使用，也可以從材料庫中檢索。 \n 施加載荷： 此選項使您可以施加不同類型的載荷，例如力或固體上的壓力以及方向和大小。 \n 應用邊界條件： 簡單來說，邊界條件限制了度元素的自由。一些元件可以旋轉固定，而某些則可以限制來自平移運動。 \n 網格物體網格劃分： 用於將模型離散化為有限元。通常，我們選擇 \n 元素的四面體形狀近似。您仍然可以選擇 2D 和 1D 元素 \n 根據情況和要求，從下拉菜單中選擇這些選項。 \n 解決方案和結果： 這是根據選定的問題求解所有控制方程的命令 \n 解算器以及以上所有選項。這樣就可以解決問題並給出分析結果。 \n \n \n \n \n \n \n 8.1.3仿真導航器 \n Simulation Navigator提供了激活功能現有解決方案，創建新解決方案，並使用創建的解決方案通過創建和修改運動對象來構建機制。 \n 要顯示 Simulation Navigator ， \n ➢點擊 Simulation Navigator 標籤中 Resource bar 如圖所示 \n 它顯示了為模型創建的仿真的列表。每一個模擬，它顯示載荷，邊界條件，類型的列表網格，結果，生成的報告等。 \n 8.2模擬創建 \n ➢複製並粘貼文件 Impeller_impeller.prt 進入新文件夾以避免更改組裝而成 \n ➢點擊 New → Simulations 如果零件尚未在 NX 窗口中打開 \n ➢打開這個新復制的文件\xa0 \n ➢如果零件已經在 NX 中打開，則從頂部功能區欄中，單擊 Application → Design \n ➢點擊 File → All Applications → Simulation → Design Simulation \n 首次在 Design Simulation 模塊中打開任何文件時，它將自動彈出“新建” FEM 和模擬對話框可創建模擬。 \n ➢在彈出對話框中，單擊“確定”以創建新的仿真。 \n 然後在下一個彈出的“解決方案”窗口中，可以選擇“求解器”和“分析類型”。默認的求解器類型為 NX Nastran 設計，分析類型為結構。 \n ➢選擇 OK 創建一個新的 Solution 稱為解決方案 1 ，它將顯示在 Simulation Navigator 。在這裡，我們將其他項保留為默認值。 \n 現在，模擬導航器將如下圖所示。 \n 8.3材料性能 \n 下一步是將材料屬性分配給此模擬的實體模型。因為庫中沒有任何數據可檢索標準材料，我們將創建一個。讓我們假設我們將使用鋼製造葉輪。 \n ➢點擊 Assign Materials 從上方顯示的功能區欄中 \n 彈出分配材料窗口。您可以選擇從庫中選擇預定義的材料，或者創建一種新材料。 \n ➢選擇 Impeller 對於 Select Body \n ➢點擊 Create 圖標以創建新材料 \n 輸入名稱和值，如下圖所示。注意單位。 \n （請注意， 30e6 代表 30×10^6 ） \n ➢選擇 OK 退出 Isotropic Material 窗口 \n 現在，我們已將材料分配給葉輪模型。 \n 8.4網格化 \n 網格選項將模型離散化為小模型元素。 \n ➢點擊 3D Tetrahedral 圖標 ctetra \n 將會彈出一個窗口，詢問類型和元素的大小。 \n ➢首先，單擊 impeller model 在屏幕上 Select Bodies \n 然後，有兩種類型的四面體NX 12中可用的元素。一個是4節點，另一個是10節點。 \n ➢選擇 Type 成為 TETRA(10) \n ➢輸入 Element Size 如 \xa0 1.0 inch \n ➢點擊 OK \n 您可以找到帶有小四面體的模型元素。看起來如圖所示下面。 \n 注意：在對實體進行網格劃分時，需要權衡考慮。如果您選擇較小的具有更大節點的元素，您將比大元素獲得更高的分析精度。 \n 但是，使用較小的元素求解模型所需的時間將比使用較小的元素所需的時間長得多。較大的元素。因此，根據研究的準確性要求以及根據最終產品來選擇組件，為元素選擇適當的參數，然後節點。 \n 8.5負載 \n 實體模型上施加的載荷應輸入到系統中。對於葉輪，假設主力作用在渦輪葉片的凹表面上。該負載可以近似在所有五個表面上施加常壓。由於我們不關心負載，讓我們將值設為 100 lbf/in^2 英寸以誇大葉片的變形。 \n ➢點擊 Load Type 然後選擇 Pressure \n ➢單擊五個凹面刀片如下圖所示 \n ➢輸入以下值 Pressure 為 100 和保持單位為 lbf / in ^ 2 （磅 / 平方英寸） \n 8.6邊界條件 \n 如您在組裝中看到的，葉輪與軸一起圍繞圓錐體的軸線旋轉。前幾章。它不是固定的，但我們關注的是葉片相對於葉輪的核心。圓錐形芯子相對固定，葉片變形是進行相應的分析。 \n ➢點擊 Constraint Type \n ➢選擇 Fixed Constraint \n 這種約束將將所選實體限制為六個自由度來自平移和旋轉。您可以通過點擊工具欄上的“約束類型”下拉菜單。 \n ➢單擊葉輪的錐形表面，如下圖所示 \n ➢點擊OK \n 8.7結果與模擬 \n 8.7.1解決模擬 \n 有限元模型現在可以進行求解和分析了。最好先檢查一下在完成模型求解之前先完成模型。檢查模型 \n ➢點擊 Menu → Analysis → Finite Element Mode Check → Model Setup 點擊 \n Model \xa0 Setup 中的圖標 Checks and Information 在功能區欄中分組如右圖所示， \n 這將彈出一個窗口。 \n ➢選擇 OK \n 這將顯示檢查操作的結果。您將在單獨的地方看到任何錯誤和警告窗口。萬一您收到錯誤或警告，請返回完成前面的步驟並完成所需的操作東西。如果您沒有收到錯誤或警告，那麼您就是準備解決 FEA 問題。 \n ➢點擊 Solve \n 這將打開“求解”窗口。 \n ➢單擊 OK 而不進行任何更改 \n 解決這項工作可能需要一段時間。等到出現“分析作業監視器”窗口，顯示要完成的工作。當求解器正在執行時計算， Analysis Job Monitor 將顯示為進行中 \n ➢點擊 Cancel 當 Analysis Job Monitor 的時候窗口顯示 Completed \n 8.7.2 FEA結果 \n ➢從 Simulation Navigator 雙擊 Structural 下 Results \n ➢您將被定向到 Post Processing Navigator \n 後處理導航器顯示您剛剛解決的所有解決方案。如果您點擊“ +”登錄在解決方案的前面，您將看到對模型執行的不同分析。 \n ➢雙擊 Displacement-Nodal \n 屏幕現在如下所示。您可以輕鬆地解釋顏色編碼的結果。橘紅色顯示最大變形區域，藍色區域顯示最大變形區域。最小變形區。您可以觀察到，由於圓錐形核心是固定的，因此會遇到零變形。分析還表明，尖端出現的最大變形刀片的數量約為1.9×10^-3英寸。 \n 8.7.3仿真和動畫 \n ➢點擊 Animate \n ➢在 Animation 窗口，更改數量幀數為 10 ，然後單擊 Play 按鈕查看變形動畫 \n 現在，您可以看到有關葉輪運行方式的動畫在將載荷施加到葉片時變形。 \n ➢要在結果顯示中進行任何設置更改，點擊 Edit Post View \n ➢檢查 Show undeformed mode l 然後點擊 OK \n 現在，按“播放”按鈕以查看動畫。這將顯示變形的動畫原始形狀為灰色，如下圖所示 \n ➢點擊 Stop 按鈕停止動畫 \n ➢點擊 \xa0 Return to Home 返回到 FEA 模型 \n 有兩種方法可以提高 FEA 結果的準確性： \n •減少元素的大小 \n •增加插值多項式的階數（即，使用二次甚至偶數代替線性多項式） \n 讓我們嘗試使用不同的設置創建模擬 \n ➢右鍵單擊 Solution 1 在裡面 Simulation Navigator \n ➢選擇 Clone 複製第一個模擬 \n ➢一次 Copy of Solution 1 被建造，重命名為 Solution 2 \n ➢從 Simulation Navigator, under 3D Meshes 右鍵單擊 3D Mesh \n （ 1 ）然後單擊 Edit \n ➢在彈出對話框中，更改 Type 至 TETRA4 \n ➢點擊 OK \n ➢點擊 Solve 圖標來解決模擬 \n ➢點擊 OK \n 分析作業監視器應顯示狀態解決方案 2 的完成。 \n ➢點擊 Cancel \n ➢在 Simulation Navigato r 連按兩下上 Results for Solution 2 \n 下圖顯示了分析。您可以觀察最大值的變化。保存所有模擬並關閉文件。 \n 8.8練習 \n 8.8.1喬木壓桿 \n 開啟檔案 ‘Arborpress_L-bar.prt’ \xa0 ”，並根據材料進行類似的結構分析作為鋼。對於網格，元素的大小和類型應為“ \xa0 10 ”和“ \xa0 Tetra （ 10 ）”。對於負載如上圖所示，在頂面上施加 500 級的法向壓力下面。 \n 對於邊界條件，固定三個平面（前高亮面，與如下圖第二個圖所示。 \n 8.8.2搖臂 \n 在本練習中，您將檢查單元類型和網格大小對有限結果的影響元素分析。打開您在第4章中建模的搖臂。分配以下材料性質：楊氏模量= 3.0×10 ^ 7psi，泊鬆比= 0.29，質量密度= 7.35×10 ^ -4金屬塊/ in3。固定沉孔和沈孔（即固定圓柱面）如下圖所示，並在面部垂直施加600 psi的壓力負載顯示。對於以下四種情況，分別獲得撓度輪廓和馮·米塞斯應力輪廓。 \n \n a) \xa0 Tetra 4 元素，元素大小 -0.2 \n b) \xa0 Tetra 4 元素，元素大小 - 05 \n c) \xa0 Tetra 10 元素，元素大小 -0.2 \n d) \xa0 Tetra 10 元素，元素大小 - 05 \n \n', 'tags': '', 'url': '第八章.html'}, {'title': 'NX12', 'text': '', 'tags': '', 'url': 'NX12.html'}, {'title': 'NX12零組件繪圖', 'text': '\n', 'tags': '', 'url': 'NX12零組件繪圖.html'}]};