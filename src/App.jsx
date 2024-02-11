import {  useState } from 'react'
import StyleAdjustment from './StyleAdjustment'
import Pagination from './Pagination'
import Page from './Page'
import AdditionAssignment from './AdditionAssignment'
import EqualityComparison from './EqualityComparison'
import LogicalAndOperator from './LogicalAndOperator'
import MyComponent from './MyComponent'
import UserProfile from './UserProfile'
import MyComponent1 from './MyComponent1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' text-yellow-500 text-center'>
hi    <StyleAdjustment/>
<Pagination/>
<Page/>
<AdditionAssignment/>
<EqualityComparison/>
<LogicalAndOperator/>
<MyComponent/>
<UserProfile />
<MyComponent1/>

      </div> 
    </>
  )
}

export default App
