// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";

const BucketList = ({list}) => {
    const history = useHistory();
    const my_lists = useSelector((state) => state.dictionary.list);

    return (
        <div>
            <Container>
                <Title>사전</Title>
                <Line />
            {
                my_lists.map((dictionary, index) => {
                    return (<div key={index}>
                        <div>
                            단어: {dictionary.word}
                        </div>
                        <div>
                            설명: {dictionary.desc}
                        </div>
                        <div>
                            예시: {dictionary.exmp}
                        </div>

                    </div>);
                })
            }
            
                <button onClick={() => {
                    history.push("/AddDic")
                }}>단어추가</button>
            </Container>
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default BucketList;