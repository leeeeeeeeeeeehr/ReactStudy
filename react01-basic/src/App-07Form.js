import './App.css';
import { useState } from 'react';

function WriteForm(props) {
  // submit 이벤트 리스너를 통해 폼값을 처리한다.
  return (
    <form onSubmit={(e)=>{
      // 이벤트 리스너 안에서는 event 객체를 배개변수로 받을 수 있다.
      console.log("이벤트 객체 e", e);
      // 전송 차단
      e.preventDefault();
      // 이벤트의 target 속성을 통해 입력한 폼값을 얻어온다.
      let writer = e.target.writer.value;
      let title = e.target.title.value;
      let contents = e.target.contents.value;

      // 부모 컴포넌트에서 Props로 전달해준 함수를 호출하여 폼값을 전달한다.
      props.writeAction(title, writer, contents);
    }}>
      <table id="boardTable">
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name='writer' /></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" name='title' /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea name='contents' cols='22' rows='3'></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="전송" />
    </form>
  );
}

function App() {
  const [message, setMessage] = useState('폼값 검증 진행 중');

  return (
    <div className="App">
      <h2>React - Form 값 처리</h2>
      {/* 작성폼 컴포넌트를 추가하면서 Props를 통해 폼값을 받아
      콘솔에 출력하는 함수를 전달한다. */}
      <WriteForm writeAction={(wr, ti, con)=>{
        console.log("Form 값", wr, ti, con);
        // 매개변수로 전달된 폼값이 모두 입력된 경우 State를 변경한다.
        if (wr !== '' && ti !== '' && con !== '') {
          setMessage('폼값 검증 완료');
        }
      }}></WriteForm>
      {/* State가 변경되면 새롭게 렌더링되므로
      아래 텍스트가 변경되는 것을 확인할 수 있다. */}
      <p>{message}</p>
    </div>
  );
}

export default App;
