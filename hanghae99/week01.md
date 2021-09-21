# week01

## css/html

- id, class: 선택지라고 부른다
- 그 안의 {...} 부분은: 선언 이라고 부른다.(속성, 값으로 구성되어 있다.)

![week01/1.png](week01/1.png)

```jsx
 <style>
      #title {
          color: blue;
          text-decoration: underline;
      }

      .todo-card {
        border: 1px solid gray;
        border-radius: 5px;
        padding: 2em;
        margin: 1em;
      }

      button:hover {
          background-color: orange;
      }
    </style>
```

이런식으로 사용

## vscode 내부에서 미리보기 창 열기

![2.png](2.png)

command + shift + x를 눌러 확장 창을 열어 html preview 설치 누르고

설치가 완료되면 todo.html로 돌아와서

단축키 command + shift + v를 누르면 미리보기 창이 vscode 내에서 뜨게 된다.

마우스로 끌어 놓든 단축키를 사용하든 오른쪽으로 끌어두면 됨.

![3.png](3.png)

![4.png](4.png)

## 크롬창에서 미리보기 창 열기

위와 같은 방법으로 확장 창을 열어서 

open in browser를 설치해준다. 

todo.html로 와서 단축키

option + b를 누르면 외부 크롬 창에서 미리보기 창이 열리게 된다.

## 박스 flex 가로정렬 박스 그리드

```jsx
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>오늘의 투두</title>
  </head>
  <body>
    <style>
      #title {
        color: blue;
        text-decoration: underline;
      }

      .wrap {
        display: flex;
      }

      .todo-card {
        border: 1px solid gray;
        border-radius: 5px;
        padding: 2em;
        margin: 1em;
        flex: 1 1 0;
      }

      button:hover {
        background-color: orange;
      }
    </style>
    <h1 id="title">오늘 할 일</h1>
    <div class="wrap">
      <div class="todo-card">
        <h3>고양이 밥주기</h3>
        <p>고양이 물, 사료 챙겨주기</p>
        <button>완료</button>
      </div>

      <div class="todo-card">
        <h3>장보기</h3>
        <p>토마토, 계란, 초코렛 사기</p>
        <button>완료</button>
      </div>
    </div>
    <div class="wrap">
      <div class="todo-card">
        <h3>코딩하기</h3>
        <p>리액트 강의 1주차 듣기</p>
        <button>완료</button>
      </div>
      <div class="todo-card">
        <h3>코딩하기</h3>
        <p>리액트 강의 1주차 듣기</p>
        <button>완료</button>
      </div>
    </div>
  </body>
</html>
```

## button에 사칙연산

%로 크기를 조절할때

```jsx
<style>
button {
                width: calc(80% - 20px);
            }
        button:hover {
            background-color: orange;
        }
</style>
```

button 안에 가로값 calc로 버튼크기 80%에서 20px  뺀 값으로 변동된다.

## npx에서 폴더 만들기

npx create-react-app 폴더

##
