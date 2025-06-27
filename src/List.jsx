import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import './assets/styles/reset.css';
import './assets/styles/List.css';

function List(){
    return (
        //반복하는 위치
        <li>
            <input type="checkbox" name="list" />
            <span>방청소하기</span>
            <button type="button">
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
        </li>
        //반복해서 호출해야하는 위치는 App에 있는 <List />를 ul 안에 넣는다.
    )
}
export default List;