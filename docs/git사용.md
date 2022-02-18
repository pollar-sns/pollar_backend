# GIT 사용

## branch 및 merge 전략

---

git flow 전략을 이용해 브랜치를 나누고 3명이상 approve를 하며 코드리뷰를 병행했습니다.<br>

![git1](/uploads/e610b8f726f4bd766182e80a8de134b7/git1.png)

> <git flow를 이용한 브랜치생성 및 머지 flow chart>

![git2](/uploads/eab6eb7a7b3996f86e2906264c16a427/git2.png)

> <3명 이상 approve시 머지 진행>

![git3](/uploads/cd1adb2f114ed9d9939d2c4a4d17a990/git3.png)

> <코드리뷰>

100개 이상의 머지 리퀘스트로 알 수 있듯이 기능을 세세하게 모듈화 하여 작업하였습니다. <br>
![git4](/uploads/3cf9d83109ed7e3ffc591208af498b02/git4.png)

![git5](/uploads/c9a2820aa2b551f02645108040f99e9b/git5.png)

> <머지 현황>

이를 통해 팀원들 간에 원활한 협업을 할 수 있습니다.<br><br>

## commit 전략

---

Jira smart commit, convention rull을 통해 commit message를 구성했습니다.<br>
![git6](/uploads/1c4573df3ed2d519ad8f7dae2085d09e/git6.png)
<br>
이를 통해 Jira issue와 간편하게 연동할 수 있었고 한눈에 어떤 작업을 했는지 알 수 있습니다.<br> 또한 연동한 Jira를 통해 한눈에 epic별 진행상황을 알아볼 수 있습니다.

<br><br>

## 참고자료

---

[git flow 전략 참고자료](https://techblog.woowahan.com/2553/)

[컨벤션 룰 보기](https://pollarweb.notion.site/Conventions-5013f221db7e4bddb7bf7107ab5d9e90)

[지라사용 보기](./jira사용.md)
