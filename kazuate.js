// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する

// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
//hantei();
//hantei();
//hantei();
let yoso = document.querySelector('#print');
yoso.addEventListener('click', hantai);

function hantai() {
    kaisu++;
	let i = document.querySelector('input[name="number"]');
	let a = i.value;
    let result = document.querySelector('p#result');
    let answer = document.querySelector('p#answer');
    answer.textContent = kaisu + '回目の予想: ' + a;
    
    if(kaisu<4){
        if(a==kotae){
            console.log("正解です．おめでとう!");
            result.textContent = '正解です．おめでとう!'
            kaisu=kaisu+3;

        }else if(a>kotae){
            console.log("まちがい．答えはもっと小さいですよ");
            result.textContent = 'まちがい．答えはもっと小さいですよ!'
            
        }else if(a<kotae){
            console.log("まちがい．答えはもっと大きいですよ");
            result.textContent = 'まちがい．答えはもっと大きいですよ!'
            
        }  
    }else if(kaisu>=4){
        console.log("答えは"+kotae+"でした．すでにゲームは終わっています");
        result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    }
	//console.log('こんにちは! ' + yoso + ' さん');
    //result.textContent = kaisu + '回目の予想: ' + yoso;
}
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること


