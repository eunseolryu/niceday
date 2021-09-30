// 추가하기버튼 인풋박스 3개 넣기
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {createDictionary} from "./redux/modules/dictionary";

const AddDic = (props) => {
    const dispatch = useDispatch();
    
    const wordRef = React.useRef(null);
    const descRef = React.useRef(null);
    const exmpRef = React.useRef(null);
    // console.log(word)
    const history = useHistory();
    const addDictionaryList = () => {
    const word = wordRef.current.value; 
    const desc = descRef.current.value; 
    const exmp = exmpRef.current.value;
        history.push("/")
            
            

        dispatch(createDictionary({ word: word, desc: desc, exmp: exmp }));
        };
        return (

            <>
                <div>
                    <Title>단어를 등록하세요</Title>
                    <Input>
                    <h3>단어</h3>
                    <input type="text" ref={wordRef} />
                    <h3>설명</h3>
                    <input type="text" ref={descRef} />
                    <h3>예시</h3>
                    <input type="text" ref={exmpRef} />
                    <br/>
                    <br/>
                    <button onClick={addDictionaryList}>등록</button>
                    </Input>
                </div>
            </>
            
        )
}
            
const Title = styled.h1`
    width: 500px;
    
    margin: auto;
`

const Input = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

export default AddDic;