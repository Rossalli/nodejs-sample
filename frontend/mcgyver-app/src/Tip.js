import React, {Component} from 'react';
import $ from "jquery";
import PubSub from 'pubsub-js';

export default class TipBox extends Component{

    constructor() {
        super();
        this.state = {tips: []};
    }

    componentDidMount() {
        $.ajax({
                url: 'http://localhost:8080/tips',
                dataType: 'json',
                success: function (response) {
                    this.setState({tips: response});
                }.bind(this)
            }
        );

        PubSub.subscribe('load-list-tips', function(topic,newListTips){
            this.setState({tips:newListTips});
        }.bind(this));
    }

    render() {
        return(
            <div>
                <TipsForm/>
                <TipsList tips={this.state.tips}/>
            </div>
        );
    }
}

 class TipsForm extends Component {

     constructor(props) {
        super(props);
        this.state = {name:'', description:'', link:'', category:''};
        this.sendForm = this.sendForm.bind(this);
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setLink = this.setLink.bind(this);
        this.setCategory = this.setCategory.bind(this);
    }

    sendForm(event){
        event.preventDefault();
        $.ajax({
            url:'http://localhost:8080/tips',
            contentType:'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({name:this.state.name,description:this.state.description,link:this.state.link, category:this.state.category}),
            success: function(newListTips){
                PubSub.publish('load-list-tips', newListTips)
            },
            error: function(response){
                console.log("erro");
                console.log(response);
            }
        });
    }

    setName(event){
        this.setState({name:event.target.value});
    }

    setDescription(event){
        this.setState({description:event.target.value});
    }

    setLink(event){
        this.setState({link:event.target.value});
    }

    setCategory(event){
        this.setState({category:event.target.value});
    }

    render() {
        return (
            <div className="content" id="content">
                <div className="pure-form pure-form-aligned" onSubmit={this.sendForm} method="post">
                    <form className="pure-form pure-form-aligned">
                        <div className="pure-control-group">
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" name="name" value={this.state.name}  onChange={this.setName} />
                        </div>
                        <div className="pure-control-group">
                            <label htmlFor="description">Descrição</label>
                            <input id="description" type="text" name="description" value={this.state.description} onChange={this.setDescription}/>
                        </div>
                        <div className="pure-control-group">
                            <label htmlFor="link">Link</label>
                            <input id="link" type="text" name="link" value={this.state.link} onChange={this.setLink}/>
                        </div>
                        <div className="pure-control-group">
                            <label htmlFor="category">Categoria</label>
                            <input id="category" type="text" name="category" value={this.state.category}onChange={this.setCategory} />
                        </div>
                        <div className="pure-control-group">
                            <label></label>
                            <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }}

class TipsList extends Component {

    render() {
       return (
           <div className="content">
            <table className="pure-table  d-flex justify-content-center">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Link</th>
                    <th>Categoria</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.tips.map(function(tip){
                        return (

                            <tr key={tip.id.toString()}>
                                <td>{tip.name}</td>
                                <td>{tip.description}</td>
                                <td>{tip.link}</td>
                                <td>{tip.category}</td>
                                <td>
                                    <button className="pure-button">Editar</button>
                                </td>
                                <td>
                                    <button className="pure-button">Excluir</button>
                                </td>
                            </tr>

                        );
                    })
                }
                </tbody>
            </table>
        </div>
       );
    }
}