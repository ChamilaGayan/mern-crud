import React, { Component } from 'react'
import axios from 'axios';

export default class AllPost extends Component {
    constructor(props){
        super(props);
      
        this.state={
          posts:[]
        };
      }

      //execute method affter all component render
componentDidMount(){
    this.getPost();
  }
  
  getPost(){
    axios.get("http://localhost:8000/posts").then(res => {
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <table id="example" class="display">
    			<thead>
					<tr>
                    <th scope="col">#</th>
                    <th scope="col">Topic</th>
                    <th scope="col">Description</th>
                    <th scope="col">Post Category</th>
                    <th scope="col">Action</th>
					</tr>
				</thead>

				<tbody>
                {this.state.posts.map((post,index) =>(

                    <tr>
                    <td>{index+1}</td>
                    <td> <a href={`/post/${post._id}`} style={{textDecoration:'none'}}> {post.topic} </a> </td>
                    <td>{post.description}</td>
                    <td>{post.postCategory}</td>
                    <td>
                        <a className="btn btn-success" href="/#"><i className="fas fa-edit"></i> Edit</a> 
                        &nbsp;
                        <a className="btn btn-danger" href="/#"><i className="far fa-trash-alt"></i> Delete</a> 
                    </td>
                    </tr>
                    ))}
				</tbody>
			</table>





{/* <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-pagination-switch="true" data-show-refresh="true" data-key-events="true" data-show-toggle="true" data-resizable="true" data-cookie="true"
                                        data-cookie-id-table="saveId" data-show-export="true" data-click-to-select="true" data-toolbar="#toolbar">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Post Category</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {this.state.posts.map((post,index) =>(

        <tr>
            <td>{index+1}</td>
            <td> <a href={`/post/${post._id}`} style={{textDecoration:'none'}}> {post.topic} </a> </td>
            <td>{post.description}</td>
            <td>{post.postCategory}</td>
            <td>
                <a className="btn btn-success" href="/#"><i className="fas fa-edit"></i> Edit</a> 
                &nbsp;
                <a className="btn btn-danger" href="/#"><i className="far fa-trash-alt"></i> Delete</a> 
            </td>
        </tr>
        ))}                          
    </tbody>
</table> */}

      </div>
    )
  }
}
