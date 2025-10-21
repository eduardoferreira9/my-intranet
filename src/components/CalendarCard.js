'use client'

import Link from 'next/link'

export default function Calendar() {
    return (
        <div className="card card-bordered bg-base-100 hover:bg-base-200 transition-all rounded-2xl shadow-sm">
            <div className="card-body items-center justify-center">
                <h2 className="card-title text-lg text-base-content mb-2">
                    Calendário
                </h2>
                <calendar-date class="cally text-base-content">
                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    <calendar-month></calendar-month>
                </calendar-date>
            </div>
        </div>
    )
}