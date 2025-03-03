//以下はターミナルでエラーが出ていた時のコード
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true, // app/ ディレクトリの機能を有効化
//         transpilePackages: ["@fortawesome"]
//       },
// };

// export default nextConfig;

export default {
  // appDir: true,
  transpilePackages: ['some-package'],
  // 他の設定...
}