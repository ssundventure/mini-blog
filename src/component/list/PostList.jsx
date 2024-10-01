import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
   
    /**
     * & : 현재 스타일이 적용될요소
     * > : 직계 자신을 선택하는 선택자
     * * : 모든 요소를 의미하는 선택자
     * & > * : 현재 요소의 모든 직계 자식 요소를 선택하는 구문 
    */
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostList(props){
    const { posts, onClickItem} = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={()=>{
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;