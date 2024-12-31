---
layout: default
title: "효과를 복사하는 효과의 처리에 대하여\"
date: 2023-06-10
categories: tips-and-guides
---

# {{ page.title }}

[「트랜잭션 롤백」을 발동, 적용할 때에 대상이 된 카드에 적힌 텍스트에서 어느 부분을 적용하나요?](https://www.db.yugioh-card.com/yugiohdb/faq_search.action?ope=5&fid=23985&request_locale=ja)

## 트랜잭션 롤백
[![트랜잭션 롤백](/assets/images/transaction_rollback.png)](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)

`함정 카드 / 일반`
```
이 카드명의 ①②의 효과는 1턴에 1번, 어느 쪽이든 1개밖에 사용할 수 없다.  
①: LP를 절반 지불하고, "트랜잭션 롤백" 이외의 상대 묘지의 일반 함정 카드 1장을 대상으로 하여 발동할 수 있다. 이 효과는, 그 일반 함정 카드의 발동시의 효과와 같아진다.  
②: 묘지의 이 카드를 제외하고, LP를 절반 지불하여, "트랜잭션 롤백" 이외의 자신 묘지의 일반 함정 카드 1장을 대상으로 하고 발동할 수 있다. 이 효과는, 그 일반 함정 카드의 발동시의 효과와 같아진다.
```

## Question
「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ①이나 ②의, 『묘지의 일반 함정 카드 1장을 대상으로 하여 발동할 수 있다. 이 효과는, 그 일반 함정 카드의 발동시의 효과와 같아진다』에 대하여,

(A) 「[암즈 콜](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=14886)」은 텍스트에 『이 카드명의 카드는 1턴에 1장밖에 발동할 수 없다』는 조건이 있는데, 이미 자신이 「[암즈 콜](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=14886)」을 발동한 턴에, 묘지의 「[암즈 콜](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=14886)」을 대상으로 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 효과를 발동할 수 있습니까?

(B) 「[모래 먼지의 태풍](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13115)」을 대상으로 할 경우, 「[모래 먼지의 태풍](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13115)」의 텍스트에 적힌 조건 『이 카드를 발동하는 턴에 자신은 배틀 페이즈를 실행할 수 없다』를 만족시킬 필요가 있습니까?

(C) 「[거성낙하](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=16565)」를 대상으로 했을 때, 텍스트에 적힌 『이 카드의 발동에 대하여 레벨을 가지지 않는 몬스터의 효과는 발동할 수 없다』는 어떻게 됩니까?

(D) 배틀 페이즈 종료시 이외의 타이밍에, 『상대 필드의 카드의 수가 자신 필드의 카드보다 많을 경우, 자신 / 상대의 배틀 페이즈 종료시에 발동할 수 있다』라는 발동 조건을 가진 「[길항승부](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13293)」를 대상으로 발동할 수 있습니까?

(E) 「[붉은 피로 물든 엘드릭시르](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=15127)」를 대상으로 했을 경우, 『이 카드의 발동 후, 턴 종료시까지 자신은 언데드족 몬스터밖에 특수 소환할 수 없다』는 적용 됩니까?

## Answer
「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ①의 효과에 대해서는, 원래의 일반 함정 카드에 적혀있는 『1턴에 1번밖에 발동할 수 없다』나 『1턴에 1장밖에 발동할 수 없다』를 무시할 수 있으며, 또한 그 카드가 코스트를 필요로 하는 카드라도 그 코스트를 무시할 수 있습니다. 다만, 그 이외의 카드, 효과의 발동의 조건을 가진 일반 함정에 대해서는, 그 조건을 만족하는 상황에서 대상으로 할 필요가 있습니다.  
(「[어둠의 함정](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=6453)」「[페이크 페더](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=8222)」「[라뷰린스 버라지](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=17371)」에 대해서도 똑같이, 원래의 카드가 가진 조건을 만족하도록 발동할 필요가 있습니다.)

「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ②의 효과에 대해서도 똑같이, 원래의 일반 함정 카드에 적혀잇는 『1턴에 1번밖에 발동할 수 없다』『1턴에 1장밖에 발동할 수 없다』나 코스트를 무시할 수 있습니다. 거기에 더해서, ②의 효과는 카드의 발동을 하지 않기 때문에, 카드의 발동 조건인 『이 카드를 발동하는 턴에』를 가지는 일반 함정 카드에 대해서도 그것을 무시할 수 있습니다. 단, 효과의 발동의 조건을 가지는 일반 함정 카드에 대해서는, 그 조건을 만족하는 상황에서 대상으로 할 필요가 있습니다.  
(「[정크 컬렉터](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=8606)」의 효과에 대해서도 똑같이, 원래의 카드가 가지는 조건을 만족하도록 발동할 필요가 있습니다.)

「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ①이나 ②의 효과의 처리시에는, 대상이 된 카드에 적힌 텍스트 중에 효과의 처리 부분이 원칙적으로 적용됩니다. 단, 『이 카드를 발동한 턴』 같이 카드의 발동을 실행 하는 것을 조건으로 하는 처리가 포함될 경우, 카드의 발동을 실행 한 (①의 효과의 대상으로 한) 경우에는 그 처리를 하지만, 카드의 발동을 실행 하지 않은 (②의 효과의 대상으로 한) 경우라면, 그 처리를 시ㅣㄹ행 하지 않습니다

(A) 대상으로 할 수 있습니다.  
위에 적은대로, 『이 카드명의 카드는 1턴에 1장밖에 발동할 수 없다』는 무시할 수 있습니다. 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ①의 효과의 대상으로 할 경우에도 ②의 효과의 대상으로 할 경우에도 같습니다.

(B) 그 텍스트는 「[모래 먼지의 태풍](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13115)」의 카드의 발동에 관한 조건이므로, 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ①의 효과의 대상으로 한다면 만족시킬 필요가 있습니다.  
(배틀 페이즈를 실행한 턴에는「[모래 먼지의 태풍](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13115)」을 대상으로 할 수 없으며, 「[모래 먼지의 태풍](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13115)」을 대상으로 한 턴에는 배틀 페이즈를 실행 할 수 없습니다.)  
「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ②의 효과의 대상으로 할 때는 그 조건을 무시할 수 있습니다.

(C) 이 텍스트는 「[거성낙하](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=16565)」의 카드의 발동 조건이 아니라, 효과의 처리도 아닙니다. 따라서, 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 ①의 효과의 대상으로 할 경우에도 ②의 효과의 대상으로 할 경우에도 고려하지 않습니다.  
(서로 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 카드나 효과의 발동에 체인해서, 레벨을 가지지 않은 몬스터의 효과를 발동할 수 있습니다.)

(D) 발동할 수 없습니다.  
『상대 필드의 카드의 수가 자신 필드의 카드보다 많을 경우, 자신 / 상대의 배틀 페이즈 종료시에 발동할 수 있다』는 「[길항승부](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=13293)」의 효과의 발동 조건이므로, 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의①이나 ②의 효과의 대상으로 할 때도 만족 시킬 필요가 있습니다.

(E) 그 텍스트는 효과의 처리 내용이지만, 카드의 발동을 실행한 것을 조건으로 하고 있습니다. 그러므로, 「[트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)」의 카드의 발동을 실행한 (①의 효과의 대상으로 한) 경우에는 경우에는 적용되지만, 카드의 발동을 실행하지 않은 (②의 효과의 대상으로 한) 경우에는 적용되지 않습니다.

## 정리
1. 효과를 복사하는 카드는 효과 텍스트(①: ~)만 복사한다.
    - ①같이 번호가 붙지 않은 텍스트는 카드의 효과가 아니다.
1. 카드의 효과가 아닌 텍스트라도 발동 조건을 만족시켜야 효과를 복사할 수 있으며, 효과를 복사했으면 지켜야한다.
    - 『1턴에 한 번~』 계열은 발동 조건이 아니다.
    - 『이 카드의 발동에 대하여 ~의 효과는 발동할 수 없다』 계열은 발동 조건이 아니다.
    - 카드의 발동 조건은 번호가 안 붙고, 효과의 발동 조건은 번호가 붙는다.
1. 효과 처리 중에 일부 처리를 할 수 없으면 그 뒤에 적힌 효과는 처리하지 않는다.
1. [트랜잭션 롤백](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=19049)은 ①은 카드의 발동이고, ②는 효과의 발동이라서 같은 이름의 카드를 대상으로 해도 무시할 수 있는 발동 조건이나 발동 중에 효과 처리가 달라지는 경우가 있다.
    - 예를 들어, 「[붉은 피로 물든 엘드릭시르](https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=15127)」를 복사했다면 ①으로 복사하면 이후 언데드족 몬스터만 특수 소환할 수 있지만, ②로 복사했으면 효과는 발동했지만 카드를 발동하지는 않았으므로 『이 카드의 발동 후』 부터는 효과를 처리하지 않기 때문에 언데드족 몬스터가 아니라도 특수 소환할 수 있다.
