import './App.css';

/* JSX에서 스타일을 적용하는 방법
- class 속성은 className으로 변경한다. JS에서 예약어로 사용하기 때문이다.
- id 속성은 그대로 사용할 수 있다.
- style 속성을 통해 부여할 때는 { } (= 컬리브레이스)를 사용하여 JSON 객체 형태로 기술한다.
- 외부 css 파일에 스타일시트를 정의한 후 적용할 수 있다.
- index.html / index.css / App.css 파일을 사용할 수 있다. */

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamile: "Verdana"
  };

  return (
    <div className="App">
      <h2>React - Style 지정하기</h2>
      <ol>
        {/* style 속성을 직접 부여할 때는 아래와 같이 컬리브레이스를 사용한다. */}
        <li style={{color: "red"}}>프론트엔드</li>
          {/* JSON 객체로 정의한 속성을 부여한다. */}
          <ul style={mystyle}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
          </ul>
        {/* App.css에 정의한 스타일시트가 적용된다. */}
        <li className='backEnd'>백엔드</li>
          <ul>
            <li id='backEndSub'>Java</li>
            {/* class 속성을 사용하면 에러가 발생하진 않으나
            경고가 뜨므로 React의 권고사항대로 className을 사용하도록 한다. */}
            {/* <li class="warnings">Oracle</li> */}
            <li className='warnings'></li>
            <li>JSP</li>
            <li>Spring Boot <button className='btn btn-danger'>Spring.io 바로가기</button></li>
          </ul>
      </ol>
    </div>
  );
}

export default App;