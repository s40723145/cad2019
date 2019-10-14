var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '', 'tags': '', 'url': 'Solvespace.html'}, {'title': '編譯步驟', 'text': '先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n (將子模組中的資料全部取下放在solvespace的資料夾中) \n 上述步驟同: \n \xa0 \xa0 \xa0git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n \xa0 \xa0 \xa0cd solvespace \n \xa0 \xa0 \xa0git submodule init \n \xa0 \xa0 \xa0git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n (原本會尋找713和714行但因為無法編譯所以將其註解掉) \n (在windows中的動態資料庫裡就有了，若有需要再給它即可) \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄) \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 將libpng.dll.a重新命名為libpng_static.a並且複製到\xa0 Y:\\msys64\\mingw64\\lib \n 完成後若solvespace.exe可順利打開即成功 \n \n', 'tags': '', 'url': '編譯步驟.html'}, {'title': '教程練習', 'text': 'tutorial_1_simple plate \n \n tutorial_2_three-way connector \n \n tutorial_3_ Sketch Rotation around an Axis \n \n tutorial_4_Assembly \n \n tutorial_6_Christmas Tree(BONUS) \n \n tutorial_7_Constrained Movement \n', 'tags': '', 'url': '教程練習.html'}, {'title': 'Question', 'text': '', 'tags': '', 'url': 'Question.html'}, {'title': '無法使用python指令', 'text': '當在cmd中使用python指令沒有反應時，因為在windows最新版本中使用python編譯器時會自動跳至APP store要你下載python編譯器，此時將start_mdecourse.bat中Line29第一個的%path%刪除即可 \n \n', 'tags': '', 'url': '無法使用python指令.html'}, {'title': 'Solvespace開啟出現錯誤', 'text': '在編譯完成solvespace後要開啟執行檔時跳出缺少libwinpthread.dll檔的畫面，此時到 \n Y:\\msys64\\mingw64\\bin 找到 libwinpthread.dll並複製到 \n solvespace\\build\\bin即可', 'tags': '', 'url': 'Solvespace開啟出現錯誤.html'}]};