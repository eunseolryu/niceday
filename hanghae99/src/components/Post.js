import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
    
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Grid is_flex>
                    <Image shape="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
                <div>user profile / user name / insert_dt</div>
                <div>contents</div>
                <div>image</div>
                <div>comment cnt</div>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "seol",
        user_profile: "https://cdnweb01.wikitree.co.kr/webdata/editor/202010/12/img_20201012154025_ab86869c.webp"
    },
    image_url: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2674D93953FC27C3261A00",
    contents: "고양이네용",
    comment_cnt: 10,
    insert_dt: "2021-10-04 10:00:00",
};

export default Post;