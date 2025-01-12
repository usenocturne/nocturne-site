import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
