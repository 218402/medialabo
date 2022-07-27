let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
console.log("みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」");
console.log("パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ");

//課題4-2

let b = document.querySelector('button#search').addEventListener('click', print);
let table = document.querySelector('tbody#table');
// 通信を開始する処理
function print() {
	// URL を設定
  let service=document.querySelector('select[name="service"]').value;
  //console.log(service);
  let genre=document.querySelector('input[name="genre"]').value;
  
	let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+service+'-'+genre+'-j.json';
  

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力

	let data = resp.data;

  let service=document.querySelector('select[name="service"]').value;
  //let genre=document.querySelector('input[name="genre"]').value;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(resp.data);

  let td = document.querySelectorAll('td');
  for (let t of td) {
    t.remove();
  }
  let tr = document.querySelectorAll('tr');
  for (let T of tr) {
    T.remove();
  }

  let kaisu = 0;
  let setsume=['番号','番組開始時刻','番組終了時刻','チャンネル','番組名','番組サブタイトル','番組説明文','出演者'];

  if(data.list[service]) {
    for (let n of data.list[service]) {
      kaisu++

      tr = document.createElement('tr');
      table.insertAdjacentElement('beforeend', tr);
      for(let s of setsume) {
        th = document.createElement('th');
        th.textContent = s;
        tr.insertAdjacentElement('beforeend', th);
      }

      if (data!==null) {
        let yoko = document.createElement('tr');
        table.insertAdjacentElement('beforeend', yoko);

        let suji = document.createElement('td');
        suji.textContent = kaisu;
        table.insertAdjacentElement('beforeend', suji);

        let start_time = document.createElement('td');
        start_time.textContent = n.start_time;
        table.insertAdjacentElement('beforeend', start_time);

        let end_time = document.createElement('td');
        end_time.textContent = n.end_time;
        table.insertAdjacentElement('beforeend', end_time);

        let service_name = document.createElement('td');
        service_name.textContent = n.service.name;
        table.insertAdjacentElement('beforeend', service_name);

        let title = document.createElement('td');
        title.textContent = n.title;
        table.insertAdjacentElement('beforeend', title);

        let subtitle = document.createElement('td');
        subtitle.textContent = n.subtitle;
        table.insertAdjacentElement('beforeend', subtitle);

        let content = document.createElement('td');
        content.textContent = n.content;
        table.insertAdjacentElement('beforeend', content);

        let act = document.createElement('td');
        act.textContent = n.act;
        table.insertAdjacentElement('beforeend', act);

      }else if(data===null){
        let nasi = document.createElement('p');
        nasi.textContent ='合う情報がありません。';
        table.insertAdjacentElement('beforeend', nasi);
      }
    }
  }
}

// 通信エラーが発生した時の処理
function showError(err) {
  let era = document.createElement('p');
  era.textContent ='合う情報がありません。';
  table.insertAdjacentElement('beforeend', era);
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
