import client from '@sanity/client';

export default client({
    projectId: 't8y6s7c3',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-06-27'
})