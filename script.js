var musicList = [
  { name: "酔払いの跋扈する夕焼け", date: "2023/08/28", format: "mp3", note:
    `
      処女作です。
      作曲の知識なんて完全になかったので拙作(全部)ですがノリは悪くない。はず。
    `
  },

  { name: "気ままで淋しい村", date: "2023/08/30", format: "mp3", note:
    `
      作ってるうちに何の曲か判らなくなりました。
      私の曲は大体そうですが。
      あと後半はまぁまぁ聴くに堪えないですね。手抜きだし。
    `
  },

  { name: "和の散る街", date: "2023/08/30", format: "mp3", note:
    `
      和風...なはずです。なんだかんだお気に入りかも。
      ここまでの3作品はMuseScoreで作ってました。打ち込み大変すぎる。
      気づくの遅いですがこういうことをするソフトじゃないね。
    `
  },

  { name: "正直村へようこそ", date: "2023/10/15", format: "mp3", note:
    `
      なんでこんな曲名にしたんだろ？ってのは毎回思います。
      曲は暗いのか明るいのか...
    `
  },

  { name: "Drunken Adventures", date: "2023/11/03", format: "mp3", note:
    `
      冒険と言えば冒険かもしれません。少なくとも酔払いにとっては。
      まぁ、そんなことを考えて作曲しているわけではないのです。
      これが本当の酔払いか。
    `
  },

  { name: "Amusement Moment", date: "2023/11/16", format: "mp3", note:
    `
      なんとなくギャグ臭のする曲です。
      少なくとも楽しそうな感じはしますね。
      それ以外に感想は出ません。
    `
  },

  { name: "Evening of Eve", date: "2023/12/23", format: "mp3", note:
    `
      クリスマス前日っぽい曲です。
      当たり障りのない曲なので割とお気に入り。
      何とも形容しがたいワクワク感、ほんのり冬の高揚感。
    `
  },

  { name: "ShowGats", date: "2024/01/19", format: "mp3", note:
    `
      和風を目指しましたが中華風になっちゃって正月感は出せませんでした。
      旧正月ですよ、旧正月。
      どうでもいいですが、旧正月は"一日(ついたち)正月"と読めることに気づきました。
    `
  },

  { name: "雪桜散る浜辺", date: "2024/02/03", format: "mp3", note:
    `
      季節感皆無の浜辺のイメージ。
      で作りたかったけど全然そんな感じしませんね。
      明るくもなく暗くもない曲しか作れません。
    `
  },

  { name: "at Sakabar", date: "2024/02/04", format: "mp3", note:
    `
      酒場ではない。バーでもない。どこで流れてる曲なんでしょうか、これ。
      ちなみに21/8拍子です。変拍子らしく変な曲でノろうにもノれない。
    `
  },

  { name: "サテライト極夜", date: "2024/03/29", format: "mp3", note:
    `
      1μmぐらいのスペーシーさはあります。そんなつもりで作ったわけじゃないのに。
      最初は、暗い夜空を見上げて独り寂しくオカリナを吹いているイメージでした。
      どう考えてもピアノは出てこないはずなのにねぇ。
    `
  },

  { name: "泥酔ビリオネア", date: "2024/04/07", format: "mp3", note:
    `
      カジノっぽい曲です。
      実際には適当に作っていてたまたまそうなっただけです。
      というか何かテーマを決めて作るの苦手なんですよね。
      まぁ珍しく楽し気な感じは出せたと思います。
    `
  },

  { name: "テクノディペンデンシィ", date: "2024/06/09", format: "mp3", note:
    `
      戦闘曲作りたいなぁ～ と思っていたのですが作れませんでした。
      テクノってついてますがテクノとか聴いたことありません。
      でもタイトル思いつかなかったから仕方ないね。
      うーん、のっぺりとした曲。
    `
  },

  { name: "ふるやのもり", date: "2024/06/17", format: "mp3", note:
    `
      RPGっぽい？曲です。森かな。
      今回は少しコード理論を勉強してきましたよ～。
      少しだけど。ほんとにさ。
    `
  },

  { name: "デスマーチ克己曲", date: "2024/08/24", format: "ogg", note:
    `
      割とかっこいい？曲になったと思います。
      マーチは行進曲という意味ですがどう考えても行進曲のテンポじゃない
      (それ以前に曲の意味が重複してるし)。
      あとループ対応してみました(のでoggです)。
    `
  }
];

musicList.forEach((music, i) => {
  var content = document.createElement("div");
  var title = document.createElement("p");
  var date = document.createElement("p");
  var controls = document.createElement("div");
  var audio = document.createElement("audio");
  var download = document.createElement("a");
  var text = document.createElement("div");

  var musicName = `${i + 1}_${music.name}.${music.format}`;

  content.className = "content";
  content.id = `music${i + 1}`;

  title.textContent = `${i + 1}. ${music.name}`;
  title.className = "title";

  date.textContent = music.date;
  date.className = "date";

  controls.className = "controls";

  audio.controls = true;
  audio.type = `audio/${music.format}`;
  audio.src = `./audios/${musicName}`;

  download.className = "download";
  download.textContent = "Download";
  download.download = musicName;
  download.href = `./audios/${musicName}`;

  text.innerText = music.note;
  text.className = "text";

  content.append(title, date);
  controls.append(audio, download);
  content.append(controls, text);

  museum.append(content);
});
