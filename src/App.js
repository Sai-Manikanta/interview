import { useState, useEffect } from 'react'
import Search from './components/Search';
import Quetions from './components/Quetions'
import { quetions } from './data.js'

function App() {
  const [query, setQuery] = useState('');

//   const [quetions, setQuetions] = useState([
//       {
//           id: 1,
//           quetion: 'hooks',
//           answer: 'whatever features availble in class components we use in functional components by the help of hooks'
//       },
//       {
//           id: 2,
//           quetion: 'available hooks',
//           answer: 'useState, useEffect, useReducer, useMemo, useContext, useRef'
//       },
//       {
//         id: 3,
//         quetion: 'lifecycle',
//         answer: 'methods'
//     },
//   ]);

  const [searchedQuetion, setSearchedQuetion] = useState([]);

  useEffect(() => {
    if(query){
        const results = quetions.filter(q => {
            return q.quetion.indexOf(query) !== -1
        })
        setSearchedQuetion(results)
        setQuery('')
    }
  }, [query])

  return (
    <div className="bg-green-500 h-screen p-4">
        <div>
            <Search query={query} setQuery={setQuery} />
            <Quetions searchedQuetion={searchedQuetion} setSearchedQuetion={setSearchedQuetion} />
        </div>
    </div>
  )
}

export default App