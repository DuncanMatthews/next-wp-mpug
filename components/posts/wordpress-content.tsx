'use client'

import Image from 'next/image'
import DOMPurify from 'dompurify'
import { useEffect, useRef } from 'react'

interface WordPressContentProps {
  content: string
}

export function WordPressContent({ content }: WordPressContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const images = contentRef.current.getElementsByTagName('img')
    
    Array.from(images).forEach(img => {
      // Get original dimensions from data attributes or src
      const width = parseInt(img.getAttribute('width') || '0', 10)
      const height = parseInt(img.getAttribute('height') || '0', 10)
      
      // Get srcset and sizes
      const srcset = img.getAttribute('data-srcset') || img.getAttribute('srcset')
      const sizes = img.getAttribute('data-sizes') || img.getAttribute('sizes')
      
      // Get the largest image from srcset
      let src = img.getAttribute('data-src') || img.getAttribute('src') || ''
      if (srcset) {
        const sources = srcset.split(',')
        const lastSource = sources[sources.length - 1]
        src = lastSource.trim().split(' ')[0]
      }

      // Create wrapper div
      const wrapper = document.createElement('div')
      wrapper.style.position = 'relative'
      wrapper.style.width = '100%'
      
      // Set aspect ratio if we have dimensions
      if (width && height) {
        wrapper.style.paddingBottom = `${(height / width) * 100}%`
      } else {
        wrapper.style.aspectRatio = '16/9'
      }

      // Create next/image element
      const imgElement = document.createElement('img')
      imgElement.setAttribute('src', src)
      imgElement.setAttribute('alt', img.alt)
      imgElement.style.position = 'absolute'
      imgElement.style.top = '0'
      imgElement.style.left = '0'
      imgElement.style.width = '100%'
      imgElement.style.height = '100%'
      imgElement.style.objectFit = 'contain'
      
      // Replace original img with wrapper containing next/image
      wrapper.appendChild(imgElement)
      img.parentNode?.replaceChild(wrapper, img)
    })
  }, [content])

  return (
    <div 
      ref={contentRef}
      className="prose prose-gray dark:prose-invert mt-8 max-w-none"
      dangerouslySetInnerHTML={{ 
        __html: DOMPurify.sanitize(content, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
        })
      }}
    />
  )
}

