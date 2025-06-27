import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
/* 개별 fontawxome 불러오기 */
//리엑트에서 fontawsome을 사용하겠다.
//import { faFacebook,faInstagram, } from '@fortawesome/free-brands-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
//brands -> 별칭 | as -> 별칭으로 선언하겠다.
import * as arrow from '@fortawesome/free-solid-svg-icons'
//컴포넌트 호출
import Header from './Header';
import Todo from './Todo';
import List from './List';

function App(){/* 세팅할때 파일 이름과 똑같이 */
  return (
    <div id='wrap' style={{//{}한번 묶으면 함수 2번 묶으면 css로 인식
        backgroundColor:'#eee',
        width:'420px',
        height:'80vh',
        margin:'0 auto',
        padding:'30px 15px',
      }}>
      {/* <h1>App</h1>
      <FontAwesomeIcon icon={brands.faFacebook} />
      <FontAwesomeIcon icon={brands.faInstagram} />
      <FontAwesomeIcon icon={arrow.faArrowLeft} />
      <FontAwesomeIcon icon={arrow.faArrowRight} />
      <FontAwesomeIcon icon={arrow.faArrowUp} />
      <FontAwesomeIcon icon={arrow.faArrowDown} /> */}
      <Header />{/* 태그가 아닌 컴포넌트 호출 */}
      <Todo />
      <ul>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default App