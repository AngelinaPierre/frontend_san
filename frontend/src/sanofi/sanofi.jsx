import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import SanofiForm from './sanofiForm'
import SanofiList from './sanofiList'


export default class Sanofi extends Component {
    render() {
        return (
            <div>
                {/* <PageHeader name="Sanofi" small="" /> */}
                <SanofiForm title='Login' />
                <SanofiList />
            </div>
        )
    }
}