/* Rebuilt entry point: render the complete Framer-exported Postical component once. */
import './framercode/styles.css'
import PosticalFramerComponent from './framercode/postical'

export default function App() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#fff' }}>
      <PosticalFramerComponent.Responsive
        width="100%"
        style={{ width: '100%', maxWidth: '100%' }}
      />
    </main>
  )
}
