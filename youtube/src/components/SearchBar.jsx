import React, { useState } from "react";

// class SearchBar extends React.Component {
//   state = { term: "" };
//   onInputChange = (event) => {
//     console.log(event.currentTarget.value);
//     this.state.term = event.currentTarget.value;
//   };
//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.term);
//   };
//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input onChange={this.onInputChange} type="text" />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState("");
    
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input onChange={(event) => setTerm(event.target.value)} type="text" />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
