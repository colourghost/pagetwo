function Album(title, release, art, tracklist) {
  this.title = title
  this.release = release
  this.art = art
  this.tracklist = tracklist
}

export const albums = [
  new Album(
    'BETWEEN 1&2',
    'August 26, 2022',
    'between1&2',
    [
      'Talk That Talk',
      'Queen of Hearts',
      'Basics • Chaeyoung',
      'Trouble • Jihyo',
      'Brave',
      'Gone • Dahyun',
      'When We Were Kids • Dahyun'
    ]
  ),
  new Album(
    'Celebrate',
    'July 27, 2022',
    'celebrate',
    [
      'Celebrate • TWICE',
      'Voices of Delight',
      'Tick Tock • Dahyun',
      'Flow Like Waves',
      'That\'s All I\'m Saying • Dahyun',
      'Bitter Sweet',
      'Sandcastle',
      'Just Be Yourself',
      'Doughnut'
    ]
  ),
  new Album(
    'IM NAYEON',
    'June 24, 2022',
    'imnayeon',
    [
      'POP!',
      'NO PROBLEM',
      'LOVE COUNTDOWN • Nayeon',
      'CANDYFLOSS',
      'ALL OR NOTHING • Nayeon',
      'HAPPY BIRTHDAY TO YOU',
      'SUNSET'
    ]
  ),
  new Album(
    '#TWICE4',
    'March 26, 2022',
    'twice4',
    [
      'I CAN\'T STOP ME (Japanese Ver.)',
      'CRY FOR ME (Japanese Ver.)',
      'Alcohol-Free (Japanese Ver.)',
      'SCIENTIST (Japanese Ver.)'
    ]
  ),
  new Album(
    'Formula of Love: O+T=<3',
    'November 12, 2021',
    'formulaoflove',
    [
      'SCIENTIST',
      'MOONLIGHT',
      'ICON',
      'CRUEL • Dahyun',
      'REAL YOU • Jihyo',
      'F.I.L.A (Fall In Love Again) • Nayeon',
      'LAST WALTZ',
      'ESPRESSO',
      'REWIND',
      'CACTUS • Jihyo',
      'PUSH & PULL',
      'HELLO',
      '1,3,2',
      'CANDY',
      'The Feels',
      'SCIENTIST (R3HAB Remix)'
    ]
  ),
  new Album(
    'Perfect World',
    'July 28, 2021',
    'perfectworld',
    [
      'Perfect World',
      'BETTER',
      'Good at Love',
      'Fanfare',
      'Kura Kura',
      'Four-leaf Clover',
      'In the Summer',
      'PIECES OF LOVE',
      'Thank You, Family',
      'PROMISE'
    ]
  ),
  new Album(
    'Taste of Love',
    'June 11, 2021',
    'tasteoflove',
    [
      'Alcohol-Free',
      'First Time • Jihyo',
      'Scandal • Dahyun',
      'Conversation • Sana',
      'Baby Blue Love • Nayeon',
      'SOS • Dahyun'
    ]
  ),
  new Album(
    'Eyes wide open',
    'October 26, 2020',
    'eyeswideopen',
    [
      'I CAN\'T STOP ME',
      'HELL IN HEAVEN',
      'UP NO MORE • Jihyo',
      'DO WHAT WE LIKE • Sana',
      'BRING IT BACK • Dahyun',
      'BELIEVER',
      'QUEEN • Dahyun',
      'GO HARD',
      'SHOT CLOCK',
      'HANDLE IT • Chaeyoung',
      'DEPEND ON YOU • Nayeon',
      'SAY SOMETHING',
      'BEHIND THE MASK'
    ]
  ),
  new Album(
    '#TWICE3',
    'September 16, 2020',
    'twice3',
    [
      'The Best Thing I Ever Did (Japanese Ver.)',
      'FANCY (Japanese Ver.)',
      'Feel Special (Japanese Ver.)',
      'MORE & MORE (Japanese Ver.)',
      'STUCK IN MY HEAD (Japanese Ver.)',
      '21:29 (Japanese Ver.) • TWICE'
    ]
  ),
  new Album(
    'MORE & MORE',
    'June 1, 2020',
    'more&more',
    [
      'MORE & MORE',
      'OXYGEN',
      'FIREWORK',
      'MAKE ME GO • Nayeon',
      'SHADOW',
      'DON\'T CALL ME AGAIN',
      'SWEET SUMMER DAY • Jeongyeon and Chaeyoung'
    ]
  ),
  new Album(
    '&TWICE -Repackage-',
    'Febuary 5, 2020',
    '&twicerepackage',
    [
      'SWING',
      'Fake & True',
      'Stronger',
      'Breakthrough',
      'Changing!',
      'HAPPY HAPPY',
      'What You Waiting For',
      'Be OK',
      'POLISH',
      'How u doin\' • Chaeyoung',
      'The Reason Why'
    ]
  ),
  new Album(
    '&TWICE',
    'November 19, 2019',
    '&twice',
    [
      'Fake & True',
      'Stronger',
      'Breakthrough',
      'Changing!',
      'HAPPY HAPPY',
      'What You Waiting For',
      'Be OK',
      'POLISH',
      'How u doin\' • Chaeyoung',
      'The Reason Why'
    ]
  ),
  new Album(
    'Feel Special',
    'September 23, 2019',
    'feelspecial',
    [
      'Feel Special',
      'RAINBOW • Nayeon',
      'GET LOUD • Jihyo',
      'TRICK IT • Dahyun',
      'LOVE FOOLISH • Momo',
      '21:29 • TWICE',
      'BREAKTHROUGH (Korean Ver.)'
    ]
  ),
  new Album(
    'FANCY YOU',
    'April 22, 2019',
    'fancyyou',
    [
      'FANCY',
      'STUCK IN MY HEAD',
      'GIRLS LIKE US • Jihyo',
      'HOT • Momo',
      'TURN IT UP • Sana',
      'STRAWBERRY • Chaeyoung'
    ]
  ),
  new Album(
    '#TWICE2',
    'March 6, 2019',
    'twice2',
    [
      'LIKEY (Japanese Ver.)',
      'Heart Shaker (Japanese Ver.)',
      'What is Love? (Japanese Ver.)',
      'Dance The Night Away (Japanese Ver.)',
      'YES or YES (Japanese Ver.)'
    ]
  ),
  new Album(
    'BDZ -Repackage-',
    'December 26, 2018',
    'bdzrepackage',
    [
      'STAY BY MY SIDE',
      'BDZ',
      'One More Time',
      'Candy Pop',
      'L.O.V.E',
      'Wishing',
      'Say it again',
      'Wake Me Up',
      'BRAND NEW GIRL',
      'Be As ONE',
      'I WANT YOU BACK'
    ]
  ),
  new Album(
    'The year of "YES"',
    'December 12, 2018',
    'yearofyes',
    [
      'The Best Thing I Ever Did',
      'Be as ONE (Korean Ver.)',
      'YES or YES',
      'SAY YOU LOVE ME',
      'LALALA • Jeongyeon',
      'YOUNG & WILD • Chaeyoung',
      'SUNSET • Jihyo',
      'AFTER MOON',
      'BDZ (Korean Ver.)'
    ]
  ),
  new Album(
    'YES or YES',
    'November 5, 2018',
    'yesoryes',
    [
      'YES or YES',
      'SAY YOU LOVE ME',
      'LALALA • Jeongyeon',
      'YOUNG & WILD • Chaeyoung',
      'SUNSET • Jihyo',
      'AFTER MOON',
      'BDZ (Korean Ver.)'
    ]
  ),
  new Album(
    'BDZ',
    'September 12, 2018',
    'bdz',
    [
      'BDZ',
      'One More Time',
      'Candy Pop',
      'L.O.V.E',
      'Wishing',
      'Say it again',
      'Wake Me Up',
      'BRAND NEW GIRL',
      'Be As ONE',
      'I WANT YOU BACK'
    ]
  ),
  new Album(
    'Summer Nights',
    'July 9, 2018',
    'summernights',
    [
      'Dance The Night Away',
      'CHILLAX',
      'Shot thru the heart • Momo, Sana, and Mina',
      'What is Love?',
      'SWEET TALKER • Jeongyeon and Chaeyoung',
      'HO! • Jihyo',
      'DEJAVU',
      'SAY YES',
      'STUCK'
    ]
  ),
  new Album(
    'What is Love?',
    'April 10, 2018',
    'whatislove',
    [
      'What is Love?',
      'SWEET TALKER • Jeongyeon and Chaeyoung',
      'HO! • Jihyo',
      'DEJAVU',
      'SAY YES',
      'STUCK'
    ]
  ),
  new Album(
    'Merry & Happy',
    'December 11, 2017',
    'merryhappy',
    [
      'Heart Shaker',
      'Merry & Happy',
      'LIKEY',
      'TURTLE',
      'MISSING U • Dahyun and Chaeyoung',
      'WOW',
      'FFW',
      'DING DONG',
      '24/7 • Nayeon and Jihyo',
      'LOOK AT ME',
      'ROLLIN\'',
      'LOVE LINE • Jeongyeon',
      'DON\'T GIVE UP • Chaeyoung',
      'YOU IN MY HEART',
      'JALJAYO GOOD NIGHT'
    ]
  ),
  new Album(
    'twicetagram',
    'October 30, 2017',
    'twicetagram',
    [
      'LIKEY',
      'TURTLE',
      'MISSING U • Dahyun and Chaeyoung',
      'WOW',
      'FFW',
      'DING DONG',
      '24/7 • Nayeon and Jihyo',
      'LOOK AT ME',
      'ROLLIN\'',
      'LOVE LINE • Jeongyeon',
      'DON\'T GIVE UP • Chaeyoung',
      'YOU IN MY HEART',
      'JALJAYO GOOD NIGHT'
    ]
  ),
  new Album(
    '#TWICE',
    'June 28, 2017',
    'twice',
    [
      'Like OOH-AHH (Japanese Ver.)',
      'CHEER UP (Japanese Ver.)',
      'TT (Japanese Ver.)',
      'KNOCK KNOCK (Japanese Ver.)',
      'SIGNAL (Japanese Ver.)'
    ]
  ),
  new Album(
    'SIGNAL',
    'May 15, 2017',
    'signal',
    [
      'SIGNAL',
      'THREE TIMES A DAY',
      'Only YOU',
      'HOLD ME TIGHT',
      'EYE EYE EYES • Jihyo and Chaeyoung',
      'SOMEONE LIKE ME'
    ]
  ),
  new Album(
    'TWICEcoaster: LANE 2',
    'Febuary 20, 2017',
    'twicecoaster2',
    [
      'KNOCK KNOCK',
      'Ice Cream',
      'TT',
      '1 TO 10',
      'PONYTAIL',
      'JELLY JELLY',
      'PIT-A-PAT',
      'NEXT PAGE',
      'ONE IN A MILLION'
    ]
  ),
  new Album(
    'TWICEcoaster: LANE 1',
    'October 24, 2016',
    'twicecoaster1',
    [
      'TT',
      '1 TO 10',
      'PONYTAIL',
      'JELLY JELLY',
      'PIT-A-PAT',
      'NEXT PAGE',
      'ONE IN A MILLION'
    ]
  ),
  new Album(
    'PAGE TWO',
    'April 25, 2016',
    'pagetwo',
    [
      'Cheer Up',
      'Precious Love • Chaeyoung',
      'Touchdown',
      'Tuk Tok',
      'Woohoo',
      'My Headphones on'
    ]
  ),
  new Album(
    'THE STORY BEGINS',
    'October 20, 2015',
    'thestorybegins',
    [
      'Like OOH-AHH',
      'Do it again',
      'Going Crazy',
      'Truth',
      'Candy Boy',
      'Like a Fool'
    ]
  )
]