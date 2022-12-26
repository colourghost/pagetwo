function Member(name, birth, nation, id) {
  this.name = name
  this.birth = birth
  this.nation = nation
  this.id = id
}

export const members = [
  new Member('Nayeon', 'September 22, 1995', 'South Korea', '28Avip-paeA'),
  new Member('Jeongyeon', 'November 1, 1996', 'South Korea', 't4eIRbA4zw8'),
  new Member('Momo', 'November 9, 1996', 'Japan', 'fDwoc1darYk'),
  new Member('Sana', 'December 29, 1996', 'Japan', 'CPcvaBmrD60'),
  new Member('Jihyo', 'February 1, 1997', 'South Korea', 'CYicpmxKyME'),
  new Member('Mina', 'March 24, 1997', 'Japan', '7kV7urmtsWE'),
  new Member('Dahyun', 'May 28, 1998', 'South Korea', 'xBDECHE0Qig'),
  new Member('Chaeyoung', 'April 23, 1999', 'South Korea', 'eMpMgEyp7yg'),
  new Member('Tzuyu', 'June 14, 1999', 'Taiwan', 'sgey4Z91Xd8')
]