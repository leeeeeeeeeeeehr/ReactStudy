import './App.css';
import {useState, useEffect} from 'react';

/* useEffect
: 함수형 컴포넌트에서 LifeCycle(수명주기)를 사용하기 위한 훅,
컴포넌트 내부에서 발생하는 데이터 가져오기, 구독 설정, 수동으로 DOM 조작 등과
같은 작업을 수행한다. 컴포넌트가 렌더링된 후 실행할 코드를 정의할 때 주로 사용한다. */

// '컴포넌트 렌더링'은 해당 함수가 호출되어 실행된다는 의미를 가진다.
function LifeGood(props) {
  /* 이 컴포넌트에서 제일 먼저 실행되는 코드,
  즉, 렌더링 전에 실행할 코드가 있다면 이 부분에 작성하면 된다. */
  console.log('#Life', 'LifeGood => 1. 컴포넌트 실행 (함수 호출)');

  /* State 생성
  : 컴포넌트는 State의 상태가 변경될 때마다 새롭게 렌더링 된다. */
  var [myRandomNum, setMyRandomNum] = useState(props.initNumber);
  var [myCount, setMyCount] = useState(1);

  /* 컴포넌트가 렌더링된 후 실행된다.
  첫 번째 실행에서는 마운트만 되고,
  두 번째 실행 에서는 언마운트, 마운트 순으로 실행된다.*/
  useEffect(function() {
    console.log('#Life', 'useEffect 실행 => 3. 컴포넌트 마운트');
    return ()=>{
      console.log('#Life', 'useEffect 실행 => 4. 컴포넌트 언마운트');
    }
//}); // 1. 의존성 배열 (두 번째 인자) 없는 상태

//}, []); // 2. 의존성 배열에 빈 배열을 할당한 상태

  }, [myCount]); // 3. 의존성 배열에 State 변수를 할당한 상태

  /* 의존성 배열의 유무에 따른 실행 설명
  1. 2개의 버튼을 누를 때마다 useEffect가 실행된다.
  2. 프로그램 최초 실행 시에만 useEffect가 실행되고, 그 이후에는 실행되지 않는다.
  3. myCount가 변경될 때만 useEffect가 실행된다. */

  /* 앞에서 useEffect가 먼저 선언되었지만 수명주기에서는 렌더링이 먼저 수행된다.
  즉, 화면에 UI가 표시된 후 useEffect가 실행된다. */
  console.log('#Life', 'return 실행 => 2. 렌더링 (return 문)');

  return (
    <div>
      <h4>함수형 컴포넌트의 수명주기 함수</h4>
      {/* State 값 출력 */}
      <p>난수: {myRandomNum}</p>
      <p>카운트: {myCount}</p>

      {/* 버튼을 누를 때마다 난수를 생성하거나 1을 더한 후 State를 변경한다.
      State가 변경될 때마다 새로운 렌더링이 발생하게 된다. */}
      <input type="button" value="난수 생성" onClick={()=>{
        setMyRandomNum(Math.random());
      }} />
      <input type="button" value="카운트" onClick={()=>{
        setMyCount(myCount + 1);
      }}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h2>React Hook - useEffect</h2>
      <LifeGood initNumber={1}></LifeGood>
    </div>
  );
}

export default App;
