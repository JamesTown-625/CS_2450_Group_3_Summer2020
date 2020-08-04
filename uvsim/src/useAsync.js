import React, { useState, useEffect } from "react";

export function useAsync(setRunning) {
    const [valueA, setValueA] = useState(null);
    const [errorA, setErrorA] = useState(null);
    const [loadingA, setLoadingA] = useState(true);
    async function getA() {
        try {
            setLoadingA(true);
            const valueA = await setRunning(true);
            setValueA(setValueA);
        } catch (e) {
            setErrorA(e);
        } finally {
            setLoadingA(false);
        }
    }
    useEffect(() => {
        getA();
    }, []);

    return [valueA, errorA, loadingA];
}

function FetchOneResource() {
    const [valueA, errorA, loadingA] = useAsync();
    if (errorA) return "Failed to load resource A";
    return loadingA ? "Loading..." : valueA;
}