import styles from '../styles/feed.module.css';
import { PostModel } from "@/models/PostModel"
import MOCK_DATA from "@/data/MOCK_DATA.json"
import Post from '@/components/post';

const getPosts = () : PostModel[] => {
    const postArr : PostModel[] = MOCK_DATA;
   

    return postArr;
}
export default function Feed() {
    return (
        <div className={styles.feed}>
            { getPosts().map((post : PostModel, index)=>{
                return <Post 
                post={post}
                key={index}
                />   
            })}
        </div>
  )
}