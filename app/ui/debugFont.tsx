'use client' //forces client sside execution

import { inter } from '@/app/ui/fonts';
import { useEffect } from 'react';

export default function DebugFont() {
    useEffect( () => {
        console.log("Debugging inter object: ", inter)
    });

    return <p className={inter.className}> Check Console</p>
}