import { useState, useEffect } from 'react';
import axios from 'axios';
import { Fragment } from 'react';

export default function DomainStatusWidget() {
    const [domainStatus, setDomainStatus] = useState({});
    
    useEffect(() => {
        // Fetch the health status of domains from the backend using axios
        axios.get('https://api.juanjaramillo.tech/domains/')
            .then(response => setDomainStatus(response.data));
    }, []);
    
    return (
        <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                {Object.entries(domainStatus).map(([domain, status]) => (
                    <Fragment key={domain}>
                        <a href={domain} target="_blank" rel="noopener noreferrer" className="truncate">
                            {new URL(domain).hostname}
                        </a>
                        <span className={`h-4 w-4 rounded-full ${status === 'Healthy' ? 'bg-lime-500' : 'bg-red-500'}`}></span>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
