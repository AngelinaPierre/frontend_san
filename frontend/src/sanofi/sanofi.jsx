import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import SanofiForm from './sanofiForm'

export default class Sanofi extends Component {
    render() {
        return (
            <div>
                {/* <PageHeader name="Sanofi" small="" /> */}
                <SanofiForm />
            </div>
        )
    }
}