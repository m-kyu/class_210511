import useFetch from './useFetch';
import Item from './Item';


export default function List (){
    
    const data = useFetch("http://localhost:3001/work/");
    
    return(
        <>
            <article className="add">
                <h1>수강생 리스트</h1>
                <table>
                <tr>
                    <th colspan="3">수강생</th>
                </tr>
                    {
                        data && data.map((w)=>(
                        <Item works={w} key={w.id} />
                        ))
                    }                
                </table>
            </article>
        </>
    );
}