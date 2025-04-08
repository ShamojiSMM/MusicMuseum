const musicList = [
  {
    name: "酔払いの跋扈する夕焼け", num: 1, date: "2023/08/28", note:
    `
      処女作です。
      作曲の知識なんて完全になかったので拙作(全部)ですがノリは悪くない。はず。
    `
  },
  {
    name: "気ままで淋しい村", num: 2, date: "2023/08/30", note:
    `
      作ってるうちに何の曲か判らなくなりました。
      私の曲は大体そうですが。
      あと後半はまぁまぁ聴くに堪えないですね。手抜きだし。
    `
  },
  {
    name: "和の散る街", num: 3, date: "2023/08/30", note:
    `
      和風...なはずです。なんだかんだお気に入りかも。
      ここまでの3作品はMuseScoreで作ってました。打ち込み大変すぎる。
      気づくの遅いですがこういうことをするソフトじゃないね。
    `
  },
  {
    name: "正直村へようこそ", num: 4, date: "2023/10/15", note:
    `
      なんでこんな曲名にしたんだろ？ってのは毎回思います。
      曲は暗いのか明るいのか...
    `
  },
  {
    name: "Drunken Adventures", num: 5, date: "2023/11/03", note:
    `
      冒険と言えば冒険かもしれません。少なくとも酔払いにとっては。
      まぁ、そんなことを考えて作曲しているわけではないのです。
      これが本当の酔払いか。
    `
  },
  {
    name: "Amusement Moment", num: 6, date: "2023/11/16", note:
    `
      なんとなくギャグ臭のする曲です。
      少なくとも楽しそうな感じはしますね。
      それ以外に感想は出ません。
    `
  },
  {
    name: "Evening of Eve", num: 7, date: "2023/12/23", note:
    `
      クリスマス前日っぽい曲です。
      当たり障りのない曲なので割とお気に入り。
      何とも形容しがたいワクワク感、ほんのり冬の高揚感。
    `
  },
  {
    name: "ShowGats", num: 8, date: "2024/01/19", note:
    `
      和風を目指しましたが中華風になっちゃって正月感は出せませんでした。
      旧正月ですよ、旧正月。
      どうでもいいですが、旧正月は"一日(ついたち)正月"と読めることに気づきました。
    `
  },
  {
    name: "雪桜散る浜辺", num: 9, date: "2024/02/03", note:
    `
      季節感皆無の浜辺のイメージ。
      で作りたかったけど全然そんな感じしませんね。
      明るくもなく暗くもない曲しか作れません。
      ここまでの曲は音量がおかしかったりするけど
      データをなくしてしまったので...
    `
  },
  {
    name: "at Sakabar", num: 10, date: "2024/02/04", note:
    `
      酒場ではない。バーでもない。どこで流れてる曲なんでしょうか、これ。
      ちなみに21/8拍子です。変拍子らしく変な曲でノろうにもノれない。
    `
  },
  {
    name: "サテライト極夜", num: 11, date: "2024/03/29", note:
    `
      1μmぐらいのスペーシーさはあります。そんなつもりで作ったわけじゃないのに。
      最初は、暗い夜空を見上げて独り寂しくオカリナを吹いているイメージでした。
      どう考えてもピアノは出てこないはずなのにねぇ。
    `
  },
  {
    name: "泥酔ビリオネア", num: 12, date: "2024/04/07", note:
    `
      カジノっぽい曲です。
      実際には適当に作っていてたまたまそうなっただけです。
      というか何かテーマを決めて作るの苦手なんですよね。
      まぁ珍しく楽し気な感じは出せたと思います。
    `
  },
  {
    name: "テクノディペンデンシィ", num: 13, date: "2024/06/09", note:
    `
      戦闘曲作りたいなぁ～ と思っていたのですが作れませんでした。
      テクノってついてますがテクノとか聴いたことありません。
      でもタイトル思いつかなかったから仕方ないね。
      うーん、のっぺりとした曲。
    `
  },
  {
    name: "ふるやのもり", num: 14, date: "2024/06/17", note:
    `
      RPGっぽい？曲です。森かな。
      今回は少しコード理論を勉強してきましたよ～。
      少しだけど。ほんとにさ。
    `
  },
  {
    name: "デスマーチ克己曲", num: 15, date: "2024/08/24", note:
    `
      割とかっこいい？曲になったと思います。
      マーチは行進曲という意味ですがどう考えても行進曲のテンポじゃない
      (それ以前に曲の意味が重複してるし)。
    `
  },
  {
    name: "パレード・エルフ", num: 16, date: "2025/04/08", note:
    `
      半年ぶりです。のでまぁ色々挑戦した曲に。
      11平均律の曲ですがいかがでしょう？ 私が聴く分にはあまり違和感ないですが...
      曲名のエルフは11から。なお曲にはエルフ要素皆無です。
    `
  }
];

const selectOrder = document.getElementById("selectOrder");
const listContainer = document.getElementById("listContainer");

function generateList() {
  while (listContainer.firstChild) listContainer.firstChild.remove();

  const isReverse = selectOrder.selectedIndex == 0;
  const _musicList = isReverse ? musicList.slice().reverse() : musicList;

  _musicList.forEach(data => {
    const fileName = `${data.num}_${data.name}.mp3`;
    const source = `audios/${fileName}`;

    const content = document.createElement("div");
    content.className = "audioContent";

    const title = document.createElement("h2");
    title.textContent = `${data.num}. ${data.name}`;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = source;

    const link = document.createElement("a");
    link.href = source;
    link.download = fileName;
    link.textContent = "Download";

    const date = document.createElement("p");
    date.textContent = data.date;

    const text = document.createElement("span");
    text.innerText = data.note.trim();

    content.append(title, audio, link, date, text);
    listContainer.append(content);
  });
}

selectOrder.addEventListener("change", generateList);
generateList();
