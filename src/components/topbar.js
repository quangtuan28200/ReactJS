import React, { Component } from 'react'

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <section id="topbar" className="d-none d-lg-flex align-items-center fixed-top topbar-transparent">
                    <div className="container text-right">
                        <i className="icofont-phone" /> +1 5589 55488 55
                        <i className="icofont-clock-time icofont-rotate-180" /> Mon-Sat: 11:00 AM - 23:00 PM
                    </div>
                </section>

            </div>
        )
    }
}
