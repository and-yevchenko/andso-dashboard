
export async function getStatistics() {
    try {
        const response = await fetch('./src/data/data.json');
        if (!response.ok) {
            throw new Error('Error loading data');
        }
        const data = await response.json();
        return { data, error: null };
    } catch(error) {
        return { data: null, error: error.message };
    }
}