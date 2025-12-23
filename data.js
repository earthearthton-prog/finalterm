// data.js : 課程內容資料庫

const courseData = {
    1: {
        title: "Week 01: 課程啟航與工具建置",
        date: "9/10",
        tags: ["Github", "Hugging Face", "AI Tools"],
        desc: "建立數位工作環境，熟悉 Codespace 與 AI 輔助學習工作流。",
        content: `
            <h3>課程介紹與工具學習</h3>
            <p>本週是學期的開始，重點在於建立未來18週所需的數位環境。我申請了 Hugging Face 帳號，並學習如何使用 Github Codespace 進行雲端開發。</p>
            <h3>Hugging Face Space 實作</h3>
            <p>我利用 Gradio 框架建立了一個地球物理概論的互動網頁，並成功部署。</p>
            <p><strong>使用的 AI 提示詞：</strong>「你是一位地球物理學教師，擅長教導學生，以簡單有趣的方式說明課程內容，請參考圖片中的目錄，並產生地球物理概論的說明文件...」</p>
            <p>這讓我學會如何精準地與 AI 溝通以產出教學內容。</p>
        `,
        iframe: "https://earthton-111.hf.space/?logs=container&__theme=system&deep_link=FIFa0VgjVNQ",
        link: "https://oceanicdayi.blogspot.com/"
    },
    2: {
        title: "Week 02: 震測學基礎推導",
        date: "9/17",
        tags: ["Seismology", "Math Derivation", "PyGMT"],
        desc: "學習折射與反射震測學，推導臨界折射波走時公式。",
        content: `
            <h3>臨界折射波與 Crossover Distance</h3>
            <p>本週深入研讀了 Whole Earth Geophysics，並進行了關鍵公式的推導。</p>
            <div style="background:#222; padding:20px; border-radius:10px;">
                <p><strong>題目：</strong>推導 Crossover Distance (\(X_{cr}\))，即直達波與折射波同時到達的距離。</p>
                <p><strong>解答公式：</strong></p>
                $$ X_{cr} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}} $$
                <p>其中 \(h\) 為第一層厚度，\(V_1\) 為上層波速，\(V_2\) 為下層波速。</p>
            </div>
            <h3>資料處理技能</h3>
            <p>初步接觸了 pygmt 與 obspy，為後續的繪圖與波形分析打下基礎。</p>
        `,
        link: "https://oceanicdayi.blogspot.com/2025/09/blog-post_30.html"
    },
    3: {
        title: "Week 03: 校園野外折射震測實驗",
        date: "9/24",
        tags: ["Field Work", "Experiment", "Data Analysis"],
        desc: "實際操作震測儀與檢波器，分析地下分層構造。",
        content: `
            <h3>實驗目的與過程</h3>
            <p>本週我們在校園內進行了實地折射震測實驗。使用大錘作為震源，並沿測線每 2 公尺佈設一個 Geophone (檢波器)，共 24 個。</p>
            <h3>實驗結果分析</h3>
            <p>雖然實驗場地緊鄰馬路，車輛噪音嚴重干擾了遠處檢波器的訊號，導致走時曲線後半段難以判讀。但我們利用<strong>截距時間法 (Intercept-Time Method)</strong> 分析前半段數據：</p>
            $$ h_1 = \\frac{T_i V_1 V_2}{2\\sqrt{V_2^2 - V_1^2}} $$
            <p>經計算，我們測得地下第一層厚度約為 <strong>5.96 公尺</strong>。</p>
            <p>這次實驗讓我深刻體會到「信噪比 (SNR)」在野外探勘中的重要性。</p>
        `,
        slides:["images/1.png",
                "images/2.png",
                "images/3.png",
                "images/4.png",
                "images/5.png",
                "images/6.png",
                "images/7.png",
                "images/8.png",
                "images/9.png",
                "images/10.png",
                "images/11.png",
                "images/12.png",
                "images/13.png",
                "images/14.png",
                "images/15.png",
                "images/16.png",
                "images/17.png",
                "images/18.png",
                "images/19.png"
        ],
    },
    4: {
        title: "Week 04: 專題演講 - 地球的 CT 掃描",
        date: "10/1",
        tags: ["Seminar", "Seismic Tomography", "FWI"],
        desc: "甘禮有博士演講：地震層析成像技術與全波形逆推。",
        content: `
            <h3>演講心得：透視地球深部</h3>
            <p>甘禮有博士將地震層析成像比喻為地球的 CT 掃描。由於人類鑽井最深僅達地球半徑的 0.19%，我們必須依賴地震波來探測深部。</p>
            <h3>關鍵技術比較</h3>
            <ul>
                <li><strong>走時層析 (Travel-Time Tomography)：</strong>僅利用波到達的時間，解析度較低，容易受「波陣面癒合」影響。</li>
                <li><strong>全波形逆推 (Full-Waveform Inversion, FWI)：</strong>利用完整的波形資訊（振幅、相位），解析度極高，可解析與波長相當的構造，是目前的研究熱點。</li>
            </ul>
        `
    },
    5: {
        title: "Week 05: 深度探勘與 Obspy 實作",
        date: "10/8",
        tags: ["ObsPy", "Python", "IRIS FDSN"],
        desc: "使用 Python 下載並視覺化地震波形資料。",
        content: `
            <h3>地震波形抓取與繪圖</h3>
            <p>本週利用 Python 的 Obspy 套件連接 IRIS FDSN，抓取台灣測站 (NACB) 的地震波形資料。</p>
            <h4>程式碼實作：</h4>
            <pre>
from obspy.clients.fdsn import Client
from obspy import UTCDateTime
import matplotlib.pyplot as plt

client = Client("IRIS")
starttime = UTCDateTime("2025-10-07T23:52:12")
# 下載波形
st = client.get_waveforms("TW", "NACB", "", "BHZ", starttime, starttime + 120)
# 繪圖
st.plot(outfile="waveform.png")
            </pre>
            <p>透過程式自動化抓取數據，比傳統手動下載效率高出許多。</p>
        `,
        link:"https://github.com/earthearthton-prog/homework7_u11310016"
    },
    6: {
        title: "Week 06: 重力探勘與異常校正",
        date: "10/15",
        tags: ["Gravity", "Gradio", "Anomaly"],
        desc: "探討自由空間重力異常 (Free Air Anomaly) 並製作互動程式。",
        content: `
            <h3>重力異常 (Gravity Anomaly)</h3>
            <p>本週學習了重力探勘的三大重點：重力測量、自由空間異常與布蓋異常。</p>
            <h3>Gradio 互動程式</h3>
            <p>為了展示 Free Air Anomaly 的概念，我製作了一個互動網頁，讓使用者可以調整高度參數，觀察重力值的變化。</p>
        `,
        iframe: "https://earthton-homework8.hf.space",
        link: "https://oceanicdayi.blogspot.com/2025/10/1015-2.html"
    },
    7: {
        title: "Week 07: AI 賦能地科研究",
        date: "10/22",
        tags: ["Gemini API", "Dify", "Workflow"],
        desc: "串接 Gemini API 與 Dify，建立自動化知識工作流。",
        content: `
            <h3>打造個人 AI 小助手</h3>
            <p>這週的重點在於「工具整合」。我使用 Dify 平台串接 Google Gemini API，並將其整合到 Notion 中。</p>
            <p>這個工作流可以幫助我快速整理地科文獻、摘要演講內容，大幅提升了學習效率。</p>
        `,
        link: "https://www.notion.so/1-2-3--2949e8c6167d81bb999bd521da9b8021", // ✅ 改放這裡，會變成按鈕
    },
    8: {
        title: "Week 08: 期中考",
        date: "10/29",
        tags: ["Exam", "Review"],
        desc: "檢驗上半學期關於震測學與重力探勘的學習成果。",
        content: `
            <h3>期中總結</h3>
            <p>本週進行期中測驗，考核內容涵蓋：</p>
            <ul>
                <li>折射震測理論與公式推導</li>
                <li>重力異常校正 (Free-air & Bouguer correction)</li>
                <li>野外實驗數據處理流程</li>
            </ul>
        `
    },
    9: {
        title: "Week 09: 板塊構造與 PyGMT 繪圖",
        date: "11/5",
        tags: ["Plate Tectonics", "PyGMT", "Colab"],
        desc: "分析加勒比板塊邊界特性，並繪製地質地圖。",
        content: `
            <h3>加勒比板塊 (Caribbean Plate) 分析</h3>
            <p>利用 PyGMT 繪製地圖，並詳細分析了四個邊界的構造特性：</p>
            <ul>
                <li><strong>北界 (Transform)：</strong>與北美板塊交界，為平移斷層，造成海地大地震。</li>
                <li><strong>東界 (Subduction)：</strong>大西洋板塊隱沒，形成小安地列斯火山島弧。</li>
                <li><strong>西界 (Subduction)：</strong>科科斯板塊隱沒，形成中美洲海溝與火山帶。</li>
                <li><strong>南界 (Complex)：</strong>與南美板塊交互作用，包含平移與擠壓構造。</li>
            </ul>
        `,
        link: "https://colab.research.google.com/github/earthearthton-prog/geophysics-class-2025/blob/main/U11310016.ipynb",
        image: "images/20.png" // 記得放 PyGMT 跑出來的圖
    },
    10: {
        title: "Week 10: PyGMT 教學網站製作",
        date: "11/12",
        tags: ["Web Dev", "Tutorial", "Open Source"],
        desc: "製作 PyGMT 教學網站，分享繪圖技巧。",
        content: `
            <h3>教學相長</h3>
            <p>為了鞏固 PyGMT 的使用技能，我在 Github 上製作了一個教學網站。</p>
            <p>內容包含環境安裝、基礎地圖繪製、地形資料載入等步驟，希望能幫助初學者快速上手。</p>
        `,
        iframe: "https://earthearthton-prog.github.io/intro-learnPYGMT/"
    },
    11: {
        title: "Week 11: 古地磁與岩石磁學",
        date: "11/19",
        tags: ["Paleomagnetism", "APWP", "Continental Drift"],
        desc: "探討大陸漂移的鐵證：視極移曲線 (APWP)。",
        content: `
            <h3>岩石的秘密羅盤</h3>
            <p>本週深入探討「是誰推動了大陸？」。</p>
            <p>重點在於<strong>視極移曲線 (Apparent Polar Wander Path, APWP)</strong>。透過測量不同年代岩石的古地磁方向，發現磁極似乎在移動，但實際上是大陸板塊在移動。這是板塊構造學說的重要證據。</p>
        `
    },
    12: {
        title: "Week 12: 地球熱分布與地熱",
        date: "11/26",
        tags: ["Heat Flow", "Geothermal", "NotebookLM"],
        desc: "研究地殼熱流測量、模擬及其影響。",
        content: `
            <h3>地熱探勘基礎</h3>
            <p>地球內部的熱能是推動板塊運動的引擎。本週利用 NotebookLM 整理了地殼熱流的測量方法與模擬技術，並探討了地熱作為再生能源的潛力。</p>
        `
    },
    13: {
        title: "Week 13: 互動式地震波形分析平台",
        date: "12/3",
        tags: ["Platform Dev", "Obspy", "Plotly"],
        desc: "整合 Obspy 與 Gradio，開發一站式地震分析工具。",
        content: `
            <h3>平台功能介紹</h3>
            <p>這是一個高效能的地震資料處理網頁，功能包含：</p>
            <ul>
                <li><strong>Record Section 繪製：</strong>自動將全球測站波形依震央距離排列，並疊加 IASP91 理論走時。</li>
                <li><strong>自動化數據流：</strong>整合 FDSN 客戶端，支援全球地震搜尋與下載。</li>
                <li><strong>即時訊號處理：</strong>內建 Bandpass/Highpass 濾波器，方便震相判讀。</li>
            </ul>
        `,
        iframe: "https://cwadayi-eq-demo.hf.space"
    },
    14: {
        title: "Week 14: 專題演講 - 黃有志博士",
        date: "12/10",
        tags: ["Volcano", "Earthquake Interaction", "Seminar"],
        desc: "從阿蘇火山到嘉南地震：探討構造地震的連鎖效應。",
        content: `
            <h3>演講心得</h3>
            <p>黃有志博士深入探討了 2016 熊本地震是否誘發阿蘇火山活動，證實了靜態應力變化的影響。</p>
            <h3>台灣嘉南地震警訊</h3>
            <p>針對台灣，黃博士指出近期嘉南群震 (2017-2024) 有「向西遷徙」的跡象，這與熊本地震主震前的模式驚人相似，提醒我們需對梅山斷層保持高度警戒。</p>
        `
    },
    15: {
        title: "Week 15: 專題演講 - AI 遇上地震學",
        date: "12/17",
        tags: ["Deep Learning", "PhaseNet", "Automation"],
        desc: "廖勿渝博士：從深度學習到全自動化監測。",
        content: `
            <h3>AI 革新地震監測</h3>
            <p>傳統方法難以偵測微小地震，導致 Gutenberg-Richter Law 的驗證出現缺口。</p>
            <h3>核心技術</h3>
            <ul>
                <li><strong>ARRU Phase Picker：</strong>利用 Attention U-Net 架構精準拾取 P/S 波。</li>
                <li><strong>RED-PAN：</strong>專為即時預警設計，能處理訊號重疊與截斷問題，成功捕捉到被官方遺漏的餘震。</li>
            </ul>
        `
    },
    16: {
        title: "Week 16: 期末專題發表",
        date: "12/24",
        tags: ["Final Project", "Presentation"],
        desc: "本學期學習成果總結與展示。",
        content: `
            <h3>學習歷程檔案</h3>
            <p>本網頁即為期末專題之成果。</p>
            <p>在這 18 週的課程中，我從基礎的地震學理論出發，學會了野外震測實驗，掌握了 Python (Obspy, PyGMT) 資料處理技術，並最終能結合 AI 工具開發互動式應用程式。</p>
            <p>這不僅是知識的累積，更是解決問題能力的實踐。</p>
        `
    }
};