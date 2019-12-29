var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Tools', 'text': '', 'tags': '', 'url': 'Tools.html'}, {'title': 'Batch Command', 'text': '利用Batch Command可以將在命令列中切換目錄和啟動某特定檔案的指令集合在一批次檔中。建立完成後就可以在任一位置中輸入設定的批次檔名稱後就能自動啟用批次檔中設定的檔案。 \n \n', 'tags': '', 'url': 'Batch Command.html'}, {'title': 'IPv6_SSH', 'text': '因為github目前沒有支援IPv6的SSH key，所以必須利用putty來將由sh.exe所產生的OpenSSH轉換為可在IPv6環境下所使用。 \n 步驟: \n 1.在命令列中輸入sh進入系統 \n 2.輸入ssh-keygen -t rsa -b 4096 -C "_______" 來產生鑰匙 \n 3.開啟puttygen將剛剛所產生的private key載入並將再點選Save private key \n 4.在start.bat中加入 \n REM for putty\nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n 並設置路徑讓開啟start.bat時能夠連結plink.exe \n 5.將.git/config中的URL改為SSH所用 \n url= git@github.com:(username)/(repository).git \n 6.開啟putty.exe將(1)session和hostname設定為github.com \n (2)將要用的proxy hostname設定為目前所用的IPv6 proxy \n 並將Proxy type改為HTTP \n \n (3)至SSH的Auth將剛剛所轉好的private key載入 \n 7.將OpenSSH格式的public key內容複製到Setting SSH \n', 'tags': '', 'url': 'IPv6_SSH.html'}, {'title': 'Solvespace', 'text': '', 'tags': '', 'url': 'Solvespace.html'}, {'title': '編譯步驟', 'text': '先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n (將子模組中的資料全部取下放在solvespace的資料夾中) \n 上述步驟同: \n \xa0 \xa0 \xa0git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n \xa0 \xa0 \xa0cd solvespace \n \xa0 \xa0 \xa0git submodule init \n \xa0 \xa0 \xa0git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n (原本會尋找713和714行但因為無法編譯所以將其註解掉) \n (在windows中的動態資料庫裡就有了，若有需要再給它即可) \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄) \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 將libpng.dll.a重新命名為libpng_static.a並且複製到\xa0 Y:\\msys64\\mingw64\\lib \n 完成後若solvespace.exe可順利打開即成功 \n \n', 'tags': '', 'url': '編譯步驟.html'}, {'title': '教程練習', 'text': 'tutorial_1_simple plate \n \n tutorial_2_three-way connector \n \n tutorial_3_ Sketch Rotation around an Axis \n \n tutorial_4_Assembly \n \n tutorial_6_Christmas Tree(BONUS) \n \n tutorial_7_Constrained Movement \n \n tutorial_8_interactive 3D Model in Browser \n \n tutorial_9_a Simple Gear \n \n tutorial_10_Fidget Spinner \n \n tutorial_12_How to create Mechanical Linked System \n \n \n', 'tags': '', 'url': '教程練習.html'}, {'title': 'NX12', 'text': '', 'tags': '', 'url': 'NX12.html'}, {'title': '區網NX12認證主機設定', 'text': '1.確認VmService有啟動 \n 2.Virtualbox IPv4設定為 \n IP:192.168.56.101 \n 子網路遮罩:255.255.255.0 \n 預設閘道:空白 \n \n 若以上設置完成還無法正常啟動NX12 \n 1.先將電腦管理→服務與應用程式→服務中的VboxVmService停止 \n 2.進入nserver的Virtualbox電腦管理中確認nx12是否為啟動狀態 \n \n', 'tags': '', 'url': '區網NX12認證主機設定.html'}, {'title': 'Webots', 'text': '', 'tags': '', 'url': 'Webots.html'}, {'title': 'tutorial', 'text': 'tutorial_1 : my first simulation \n \n tutorial_2 : Modification of the Environment \n \n tutorial_3 : Appearance \n \n tutorial_4:More about Controllers \n', 'tags': '', 'url': 'tutorial.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'BubbleRob tutorial', 'text': 'Part1 \n \n Part2 \n \n Part3 \n \n', 'tags': '', 'url': 'BubbleRob tutorial.html'}, {'title': 'Question', 'text': '', 'tags': '', 'url': 'Question.html'}, {'title': '無法使用python指令', 'text': '當在cmd中使用python指令沒有反應時，因為在windows最新版本中使用python編譯器時會自動跳至APP store要你下載python編譯器，此時將start_mdecourse.bat中Line29第一個的%path%刪除即可 \n \n', 'tags': '', 'url': '無法使用python指令.html'}, {'title': 'Solvespace開啟出現錯誤', 'text': '在編譯完成solvespace後要開啟執行檔時跳出缺少libwinpthread.dll檔的畫面，此時到 \n Y:\\msys64\\mingw64\\bin 找到 libwinpthread.dll並複製到 \n solvespace\\build\\bin即可 \n', 'tags': '', 'url': 'Solvespace開啟出現錯誤.html'}, {'title': 'Puttygen鑰匙儲存', 'text': '在利用Puttygen.exe產生IPv6可用的鑰匙時，在載入OpenSSH格式的Private key後直接點選Save private key儲存IPv6可用的檔案。 \n 載入後不要按Generate，此處的Generate不是指載入後將格式產生新的可為IPv6所用的格式，而是產生一個"完全新的"IPv6可用的key。 \n', 'tags': '', 'url': 'Puttygen鑰匙儲存.html'}, {'title': 'FFmpeg合併兩個mp4檔案', 'text': '在利用  ffmpeg -f concat -i allmp4.txt -c copy new.mp4 指令時如果命令列說要合併的檔案名稱是不安全的，在-i 前面加上 -safe 0即可。 \n 因為預設的參數為safe 1會拒絕所有不安全的檔案名稱。 \n', 'tags': '', 'url': 'FFmpeg合併兩個mp4檔案.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'Week6', 'text': '參數化零組件繪製 \n \n V-rep模型控制 \n \n 新增啟動與停止按鈕 \n \n 參考: \n http://www.coppeliarobotics.com/helpFiles/en/regularApi/simStartSimulation.htm \n vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot) \n http://www.coppeliarobotics.com/helpFiles/en/regularApi/simStopSimulation.htm \n vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) \n', 'tags': '', 'url': 'Week6.html'}, {'title': 'Week7', 'text': '在About內容加入"This is compiled by 407xxxxx" \n \n 因為編譯完成後的檔案在開啟時皆是讀取obj檔，所以即使更改了solvespace.cpp檔的內容在About裡的內容也不會有改變。 \n 如果更改了內容要顯示在solvespace的About中必須重新編譯，但因全部重新編譯需花較長時間，即不須刪除資料夾的情況下重新編譯即可，這樣在編譯的過程中就不需要重新編譯全部的檔案，只會編譯和有被更改的內容相關的檔案，而編譯出來的obj檔會蓋過原先的obj檔，若順利完成後再次開啟即會有剛剛該改的內容。 \n ------------------------------------------------------------------------------------------------------------- \n 繪圖認證: \n 15 \n \n \n 16 \n \n \n', 'tags': '', 'url': 'Week7.html'}, {'title': 'Week15', 'text': '\n', 'tags': '', 'url': 'Week15.html'}, {'title': 'Week16', 'text': '', 'tags': '', 'url': 'Week16.html'}]};