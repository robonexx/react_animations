import React, { useCallback, useEffect, useState } from 'react';
import anime from 'animejs';
import './robsvg.scss';

const RobSvg = () => {
  const [isLoading, setIsLoading] = useState(true);

  const Animate = useCallback(() => {
    const loader = anime.timeline({
      targets: '.intro',
      duration: 1500,
      easing: 'easeOutSine',
    });
    loader
      .add({
        targets: '.rob .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 600,
        stroke: '#888',
        delay: function (el, i) {
          return i * 100;
        },
        direction: 'forwards',
        loop: false,
      })
      .add({
        targets: '.eye',
        d: [eyeOpen, eyeClosed, eyeOpen],
        easing: 'easeInOutSine',
        duration: 300,
      });
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 1500);
    Animate();
    return () => clearTimeout(timeOut);
  }, [Animate]);

  return (
    <div className='intro'>
      <svg
        className='rob'
        width='414'
        height='414'
        viewBox='0 0 414 414'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_301_2)' className='lines' stroke='currentColor'>
          <path
            className='el'
            d='M317.868 164.432C318.42 163.624 319.355 162.708 320.218 163.171C321.18 163.688 320.72 165.156 320.092 166.049C318.464 168.361 316.387 170.708 316.465 173.534C316.624 179.349 316.783 185.163 316.942 190.978C316.963 191.733 316.874 192.669 316.177 192.96C315.616 193.195 314.95 192.82 314.65 192.291C314.35 191.762 314.324 191.127 314.304 190.519C314.121 184.771 313.937 179.022 313.754 173.274C313.726 172.42 313.701 171.551 313.93 170.728C314.178 169.836 314.708 169.055 315.23 168.291C316.11 167.005 316.989 165.718 317.868 164.432V164.432Z'
          />
          <path
            className='el'
            d='M288.547 162.477C286.226 160.957 284.205 159.023 281.97 157.379C271.317 149.543 256.847 149.037 243.878 151.624C242.255 151.948 240.549 152.311 238.974 151.803C237.398 151.295 236.09 149.546 236.695 148.006C237.291 146.487 239.213 146.081 240.837 145.919C255.052 144.496 269.461 145.019 283.536 147.469C284.518 147.639 285.544 147.84 286.32 148.466C287.051 149.056 287.462 149.946 287.848 150.803C289.249 153.917 290.65 157.031 292.052 160.145C292.386 160.888 292.72 161.759 292.348 162.485C291.692 163.762 289.749 163.264 288.547 162.477V162.477Z'
          />
          <path
            className='el'
            d='M278.986 172.725C278.355 173.697 277.125 174.05 276.001 174.33C268.991 176.079 261.981 177.827 254.971 179.576C254.484 179.697 253.931 179.81 253.508 179.537C252.908 179.15 252.977 178.184 253.46 177.658C253.943 177.132 254.676 176.934 255.368 176.759C261.928 175.1 268.488 173.442 275.048 171.783C276.491 171.418 278.486 171.323 278.986 172.725V172.725Z'
          />
          <path
            className='el'
            d='M152.141 155.932C150.755 156.989 148.531 156.171 147.764 154.606C146.998 153.041 147.443 151.099 148.434 149.666C149.425 148.232 150.881 147.199 152.307 146.197C155.371 144.043 158.436 141.889 161.5 139.735C164.319 137.754 167.418 135.685 170.861 135.831C180.599 136.241 190.324 136.947 200.02 137.946C201.821 138.131 204.012 138.643 204.482 140.391C204.855 141.778 203.792 143.226 202.471 143.791C201.151 144.357 199.654 144.264 198.221 144.162C191.948 143.713 185.675 143.263 179.403 142.814C177.489 142.677 175.547 142.542 173.668 142.93C171.638 143.35 169.784 144.359 167.987 145.393C162.485 148.56 157.188 152.083 152.141 155.932Z'
          />
          <path
            className='eye eyes el'
            d='M205.507 162.156C202.676 164.071 199.267 164.891 195.941 165.676C192.492 166.489 189.044 167.303 185.596 168.116C183.971 168.499 182.215 168.874 180.677 168.223C175.74 166.133 170.802 164.043 165.865 161.953C164.272 161.279 161.786 161.019 161.415 162.709C161.234 163.534 159.804 163.245 159.597 162.425C159.39 161.606 159.927 160.802 160.436 160.126C163.644 155.866 167.451 151.249 172.752 150.665C178.532 150.028 184.313 149.391 190.093 148.754C191.227 148.63 192.416 148.512 193.471 148.945C194.37 149.315 195.066 150.045 195.727 150.759C199.129 154.433 202.393 158.236 205.507 162.156ZM183.723 152.462C185.715 153.063 187.272 154.906 187.531 156.97C187.79 159.033 186.736 161.204 184.955 162.278C185.343 162.518 185.841 162.433 186.287 162.341C190.878 161.39 195.468 160.439 200.059 159.488C198.157 157.326 196.255 155.163 194.353 153C193.869 152.448 193.363 151.882 192.696 151.576C192.096 151.3 191.416 151.261 190.756 151.258C188.365 151.247 185.974 151.657 183.723 152.462ZM174.551 153.425C171.872 152.842 168.901 153.936 167.241 156.118C166.809 156.686 166.613 157.739 167.305 157.916C169.179 158.395 170.969 159.197 172.572 160.278C173.015 160.116 172.874 159.467 172.714 159.023C171.994 157.033 172.792 154.601 174.551 153.425ZM193.008 164.608C193.38 164.522 193.858 164.18 193.624 163.878C189.54 164.545 185.47 165.305 181.42 166.156C181.143 166.639 182.007 166.93 182.554 166.824C186.052 166.149 189.537 165.41 193.008 164.608Z'
          />
          <path
            className='el'
            d='M112.344 192.549C112.155 191.467 112.219 189.975 113.291 189.739C113.959 189.592 114.624 190.127 114.866 190.766C115.108 191.406 115.034 192.115 114.956 192.794C114.864 193.608 114.771 194.422 114.678 195.236C114.596 195.953 114.493 196.721 114.009 197.258C113.526 197.795 112.521 197.909 112.143 197.294C110.67 194.898 109.197 192.502 107.724 190.106C106.653 188.365 105.554 186.544 105.357 184.509C105.249 183.398 105.418 182.28 105.587 181.176C106.061 178.073 106.535 174.97 107.009 171.867C107.121 171.133 107.242 170.374 107.649 169.753C108.056 169.132 108.833 168.688 109.543 168.904C110.062 169.062 110.424 169.518 110.748 169.952C112.344 172.087 113.85 174.289 115.262 176.55C115.648 177.169 116.031 177.962 115.65 178.583C115.294 179.166 114.416 179.22 113.823 178.881C113.231 178.541 112.856 177.929 112.506 177.342C111.688 175.969 110.871 174.595 110.053 173.221C109.83 172.847 109.333 173.396 109.274 173.827C108.894 176.584 108.514 179.342 108.134 182.099C108.023 182.904 107.912 183.723 108.045 184.525C108.207 185.502 108.718 186.381 109.22 187.235C110.261 189.006 111.303 190.778 112.344 192.549Z'
          />
          <path
            className='el'
            d='M204.2 166.757C204.786 167.681 203.443 168.604 202.386 168.886C196.801 170.371 191.217 171.857 185.633 173.343C184.973 173.519 184.276 173.695 183.618 173.513C182.96 173.331 182.387 172.651 182.58 171.996C182.762 171.375 183.476 171.108 184.097 170.93C190.095 169.215 196.15 167.698 202.248 166.383C202.94 166.233 203.82 166.159 204.2 166.757V166.757Z'
          />
          <path
            className='el'
            d='M211.849 153.505C212.703 153.736 212.801 154.892 212.722 155.772C212.217 161.362 211.712 166.952 211.208 172.542C211.1 173.735 210.785 175.193 209.631 175.516C208.455 174.543 208.495 172.759 208.638 171.239C209.121 166.088 209.604 160.937 210.087 155.786C210.19 154.689 210.785 153.218 211.849 153.505Z'
          />
          <path
            className='el eyes'
            d='M236.947 163.05C238.601 161.914 240.255 160.779 241.909 159.643C243.025 158.877 244.164 158.099 245.462 157.717C247.023 157.258 248.69 157.404 250.31 157.555C253.537 157.855 256.764 158.156 259.99 158.456C261.553 158.602 263.13 158.75 264.623 159.231C266.325 159.78 267.86 160.741 269.374 161.693C274.015 164.612 278.657 167.53 283.299 170.448C284.09 170.945 284.957 172.019 284.265 172.646C284.044 172.846 283.727 172.899 283.43 172.901C281.361 172.917 279.859 171.04 278.1 169.951C274.186 167.529 269.171 169.098 264.655 169.99C255.281 171.841 245.275 170.303 236.89 165.722C236.45 165.482 235.972 165.177 235.869 164.687C235.727 164.006 236.374 163.443 236.947 163.05V163.05ZM249.47 167.343C248.105 165.132 249.081 161.832 251.428 160.718C249.727 159.627 247.474 159.73 245.6 160.483C243.725 161.237 242.145 162.56 240.6 163.861C240.452 163.986 240.288 164.164 240.354 164.345C240.401 164.472 240.542 164.534 240.669 164.582C243.218 165.548 245.767 166.513 248.316 167.479C248.715 167.63 249.278 167.724 249.47 167.343V167.343ZM260.377 161.078C260.693 163.257 261.009 165.435 261.326 167.614C264.971 167.222 268.617 166.831 272.263 166.439C270.537 165.368 268.812 164.296 267.086 163.224C265.042 161.955 262.742 160.633 260.377 161.078V161.078Z'
          />
          <path
            className='el'
            d='M236.318 172.406C235.535 172.097 235.792 170.781 236.562 170.44C237.331 170.099 238.219 170.4 239.005 170.701C242.833 172.167 246.661 173.633 250.489 175.1C251.532 175.5 252.806 176.487 252.228 177.443C251.767 178.207 250.619 177.982 249.787 177.661C245.291 175.924 240.802 174.173 236.318 172.406Z'
          />
          <path
            className='el'
            d='M211.649 182.366C213.112 182.27 213.018 184.583 212.337 185.882C210.863 188.691 209.39 191.501 207.916 194.311C207.068 195.927 205.503 197.827 203.828 197.103C201.903 196.271 199.582 197.362 198.338 199.051C197.094 200.739 196.671 202.876 196.281 204.937C196.043 206.194 195.811 207.532 196.281 208.723C196.75 209.914 198.212 210.806 199.34 210.201C203.534 207.95 208.654 210.013 212.911 212.141C217.168 214.27 222.151 216.501 226.481 214.526C231.742 212.125 237.755 211.409 243.432 212.508C245.038 209.877 245.8 206.739 245.578 203.664C244.008 202.37 241.567 203.713 239.635 203.072C237.397 202.329 236.879 199.453 236.738 197.1C236.43 191.935 236.122 186.77 235.813 181.605C235.74 180.368 235.676 179.073 236.199 177.95C236.722 176.828 238.039 175.971 239.202 176.398C240.583 176.905 240.866 178.7 240.926 180.171C241.149 185.626 241.373 191.081 241.596 196.537C241.639 197.594 241.696 198.701 242.237 199.611C242.778 200.521 243.971 201.136 244.923 200.674C245.855 200.221 247.018 200.917 247.444 201.862C247.87 202.807 247.764 203.895 247.651 204.925C247.467 206.585 247.284 208.246 247.101 209.906C246.946 211.314 246.768 212.785 245.975 213.959C245.181 215.132 243.563 215.88 242.305 215.228C236.165 212.047 229.131 217.893 222.217 217.924C218.085 217.942 214.284 215.867 210.427 214.386C206.57 212.905 201.954 212.072 198.508 214.352C196.999 215.35 194.825 214.322 193.969 212.727C193.112 211.133 193.201 209.219 193.312 207.412C193.527 203.915 193.803 200.228 195.768 197.327C197.734 194.425 202.013 192.783 204.851 194.839C206.714 190.478 208.994 186.295 211.649 182.366Z'
          />
          <path
            className='el'
            d='M317.791 131.63C313.891 129.623 309.991 127.617 306.09 125.61C307.367 124.585 309.043 124.243 310.644 123.901C317.627 122.409 324.481 120.309 331.101 117.632C331.273 117.966 331.029 118.355 330.797 118.65C327.63 122.675 324.464 126.699 321.297 130.723C320.806 131.347 320.229 132.021 319.439 132.107C318.862 132.169 318.307 131.895 317.791 131.63V131.63Z'
          />
          <path
            className='el'
            d='M91.8159 362.882C89.226 360.669 86.9453 358.095 85.0608 355.257C96.8354 348.955 108.911 343.216 121.233 338.065C122.418 337.569 122.798 336.107 123.024 334.842C125.854 318.989 128.165 303.044 129.951 287.041C131.758 285.8 134.414 287.083 135.394 289.045C136.374 291.006 136.165 293.325 135.932 295.505C134.797 306.137 133.662 316.77 132.527 327.403C132.133 331.094 131.418 335.313 128.238 337.227C115.504 344.891 103.321 353.473 91.8159 362.882Z'
          />
          <path
            className='el'
            d='M285.236 301.078C284.842 311.198 284.448 321.318 284.053 331.438C283.581 343.566 294.957 352.401 305.124 359.03C277.206 393.99 232.524 414.912 187.794 413.969C143.065 413.026 99.3042 390.239 72.8845 354.133C84.0452 344.686 97.6495 338.151 112 335.343C116.742 334.415 118.234 328.476 118.748 323.671C120.194 310.137 121.641 296.603 123.088 283.069C123.795 276.456 124.446 269.467 121.674 263.421C115.834 250.682 113.146 236.511 113.914 222.517C108.99 223.04 103.795 223.522 99.2802 221.489C94.7657 219.455 91.4195 213.942 93.5247 209.461C102.498 190.358 92.7216 167.901 94.4304 146.865C94.7305 143.171 95.5696 139.184 98.4132 136.807C101.257 134.431 106.592 135.028 107.605 138.593C108.334 136.916 109.064 135.24 109.793 133.563C106.668 129.595 100.217 131.565 95.5436 129.647C87.4427 126.324 88.8369 114.554 91.6628 106.266C97.2102 89.9968 102.758 73.7275 108.305 57.4583C110.272 51.6898 115.097 44.5514 120.638 47.0895C118.405 38.033 129.205 31.6767 138.029 28.6527C163.392 19.9606 188.754 11.2686 214.117 2.57658C218.11 1.20824 222.221 -0.178027 226.437 0.0187483C230.877 0.225965 235.026 2.16802 239.041 4.07499C263.105 15.5049 287.168 26.9348 311.232 38.3647C314.34 39.8413 316.077 43.1444 317.601 46.2304C321.067 53.2511 324.533 60.2719 327.999 67.2926C336.448 84.4085 345.099 103.778 339.144 121.913C335.978 131.555 329.038 139.414 322.273 146.978C319.659 149.9 317.046 152.822 314.432 155.744C320.216 152.464 326.539 159.695 327.936 166.196C329.464 173.307 328.835 180.866 326.153 187.627C323.85 193.431 320.057 198.734 319.075 204.9C317.971 211.828 320.581 218.843 320.235 225.85C319.89 232.856 314.126 240.76 307.378 238.844C305.549 253.224 299.79 267.084 290.89 278.526C286.049 284.75 285.544 293.2 285.236 301.078ZM309.364 234.082C314.491 235.126 318.389 228.962 318.236 223.731C318.083 218.501 315.644 213.508 315.708 208.276C315.805 200.307 321.539 193.659 324.346 186.2C327.927 176.684 326.432 165.42 320.493 157.167C318.769 159.373 314.855 159.237 313.288 156.918C311.721 154.599 313.055 150.917 315.744 150.139C308.81 144.121 298.753 141.922 289.94 144.498C284.413 146.113 278.497 145.401 272.818 144.454C258.957 142.142 245.317 138.51 232.142 133.621C200.43 121.853 163.353 125.622 134.657 143.533C132.323 144.99 129.893 146.584 127.145 146.712C124.396 146.839 121.339 144.791 121.52 142.045C121.721 139.009 120.123 135.717 117.264 134.677C114.404 133.637 110.643 135.735 110.641 138.778C110.639 140.513 110.518 143.407 108.934 142.698C106.492 141.1 104.05 139.502 101.608 137.904C98.9958 139.119 98.0585 142.312 97.5819 145.154C96.1584 153.641 96.273 162.385 97.9185 170.832C99.4431 178.659 102.282 186.553 100.869 194.4C100.051 198.942 97.8459 203.131 96.8865 207.645C95.9271 212.159 96.5794 217.549 100.303 220.275C110.032 216.216 122.089 218.546 129.605 225.938C135.041 231.285 140.477 236.632 145.914 241.979C148.298 244.324 152.387 242.732 154.863 240.484C157.799 237.819 159.992 234.419 162.913 231.736C165.833 229.053 169.928 227.087 173.723 228.235C173.316 226.693 174.704 225.305 175.977 224.345C178.347 222.559 180.989 220.845 183.953 220.718C186.918 220.591 190.163 222.682 190.245 225.648C200.332 222.084 211.875 222.871 221.385 227.771C223.288 226.073 226.143 226.179 228.686 226.383C236.233 226.99 243.781 227.596 251.328 228.203C254.959 228.495 258.716 228.823 261.906 230.582C266.477 233.102 269.204 238.605 268.439 243.769C269.426 242.32 271.972 243.337 272.434 245.028C272.895 246.719 272.042 248.461 271.221 250.009C270.399 251.557 269.558 253.309 270.042 254.994C270.848 257.797 275.029 260.121 273.328 262.491C280.186 255.586 287.044 248.68 293.901 241.775C298.14 237.507 303.47 232.88 309.364 234.082ZM300.124 358.541C300.108 357.529 299.375 356.685 298.658 355.971C294.126 351.458 288.461 348.093 282.33 346.273C282.037 327.911 282.541 309.537 283.841 291.218C278.195 295.722 272.55 300.226 266.905 304.73C259.089 310.966 251.272 317.202 243.456 323.438C241.521 321.795 240.191 319.454 239.77 316.95C238.522 327.228 229.31 334.4 220.851 340.368C214.439 344.892 208.027 349.415 201.615 353.939C195.104 347.127 188.594 340.314 182.083 333.502C178.65 329.91 174.993 324.682 177.612 320.459C177.475 322.152 175.371 323.094 173.725 322.672C172.08 322.249 170.839 320.934 169.694 319.678C163.574 312.963 157.454 306.247 151.334 299.531C148.954 296.919 146.403 293.397 147.86 290.177C146.821 290.69 145.782 291.202 144.743 291.715C139.16 285.279 133.113 279.245 126.665 273.677C124.537 293.938 122.409 314.198 120.281 334.459C105.108 338.442 90.5172 344.638 77.1141 352.789C87.2944 372.161 105.471 386.365 125.224 395.787C153.508 409.277 185.941 413.909 216.871 408.875C249.022 403.642 280.1 387.336 299.114 360.887C299.62 360.183 300.138 359.408 300.124 358.541ZM256.135 270.32C253.923 269.752 253.667 266.752 253.884 264.479C254.248 260.672 254.612 256.865 254.976 253.058C253.9 252.628 252.729 253.318 251.777 253.979C245.013 258.669 238.25 263.359 231.487 268.049C230.694 268.599 229.795 269.448 230.122 270.356C231.046 272.919 229.3 275.679 227.279 277.506C225.257 279.333 222.795 280.849 221.599 283.298C220.502 285.545 220.676 288.178 220.875 290.671C221.179 294.478 221.483 298.286 221.787 302.093C230.741 296.955 239.865 292.114 249.139 287.581C252.103 286.132 252.439 282.124 252.446 278.825C252.454 275.526 253.043 271.474 256.135 270.32ZM310.35 141.802C312.518 143.404 316.136 144.819 317.384 142.43C305.483 132.572 291.407 125.354 276.456 121.442C256.053 116.103 235.65 110.765 215.247 105.427C210.408 104.16 205.445 102.883 200.466 103.367C186.101 104.762 171.736 106.157 157.372 107.552C151.459 108.126 145.182 108.638 139.866 105.986C128.766 100.449 117.512 95.2189 106.123 90.3034C104.095 89.4283 101.486 88.652 99.8944 90.1835C99.8758 91.1746 100.916 91.8049 101.816 92.2222C114.1 97.9241 126.385 103.626 138.67 109.328C142.103 110.921 145.747 112.553 149.513 112.174C163.371 110.78 177.228 109.385 191.086 107.991C198.024 107.293 205.142 106.607 211.882 108.399C231.163 113.525 250.445 118.651 269.727 123.777C276.611 125.608 283.519 127.446 290.102 130.166C297.315 133.146 304.075 137.162 310.35 141.802ZM174.131 252.079C173.864 258.095 173.597 264.111 173.33 270.127C173.294 270.934 173.263 271.771 173.564 272.521C173.859 273.258 174.444 273.835 175.015 274.387C183.933 283.029 193.054 291.462 202.368 299.676C203.435 300.618 205.242 300.037 206.067 298.878C206.892 297.718 207.005 296.214 207.09 294.794C207.405 289.534 207.557 283.734 204.254 279.629C202.834 277.865 200.887 276.586 199.456 274.831C198.024 273.076 197.186 270.48 198.396 268.566C199.088 267.47 198.658 265.952 197.766 265.012C196.874 264.071 195.629 263.568 194.432 263.07C187.313 260.112 180.499 256.423 174.131 252.079ZM219.503 245.887C216.365 246.204 213.572 242.929 210.488 243.587C209.218 243.858 207.844 244.764 206.758 244.054C202.044 240.97 195.885 240.21 190.563 242.055C188.025 242.935 185.159 244.352 182.847 242.985C182.119 242.555 181.548 241.882 180.786 241.516C180.024 241.15 178.907 241.251 178.582 242.032C200.12 253.035 225.941 255.361 249.099 248.385C243.882 247.442 238.664 246.499 233.447 245.556C231.906 245.277 230.227 244.919 229.25 243.695C228.128 242.288 225.869 242.637 224.3 243.519C222.731 244.401 221.294 245.707 219.503 245.887ZM328.703 127.917C331.166 124.756 333.636 121.494 334.919 117.699C335.132 117.07 335.312 116.391 335.146 115.748C334.892 114.766 333.874 114.136 332.867 114.018C331.86 113.899 330.854 114.185 329.88 114.469C320.172 117.293 310.463 120.118 300.754 122.942C299.766 123.23 298.536 123.906 298.789 124.903C298.914 125.396 299.378 125.714 299.809 125.985C305.577 129.605 311.503 132.973 317.566 136.075C318.519 136.563 319.567 137.058 320.617 136.852C321.726 136.634 322.53 135.698 323.238 134.818C325.078 132.532 326.9 130.231 328.703 127.917ZM223.108 268.848C232.858 263.462 242.288 257.498 251.331 250.996C240.41 253.51 229.3 255.207 218.126 256.068C216.238 256.213 214.337 256.334 212.452 256.147C210.035 255.906 207.699 255.162 205.384 254.423C196.895 251.712 188.406 249.001 179.916 246.29C178.757 245.92 177.538 245.545 176.344 245.776C175.15 246.007 174.022 247.069 174.169 248.277C176.188 246.284 179.529 247.026 182.227 247.903C189.577 250.291 196.927 252.678 204.278 255.066C207.155 256.001 210.071 256.943 213.091 257.13C215.104 257.255 217.122 257.04 219.128 256.826C227.565 255.925 236.003 255.023 244.44 254.122C237.329 259.03 230.218 263.939 223.108 268.848ZM176.066 249.443C176.069 250.435 177.078 251.08 177.961 251.532C187.147 256.228 196.333 260.923 205.519 265.619C206.645 266.194 208.015 265.563 208.991 264.761C209.968 263.959 210.854 262.944 212.074 262.612C211.273 261.664 209.737 262.491 208.902 263.41C208.068 264.328 206.884 265.434 205.784 264.861C195.884 259.709 185.978 254.569 176.066 249.443ZM213.183 263.937C214.856 265.499 216.739 266.836 218.765 267.901C219.702 268.394 220.942 268.797 221.737 268.097C218.565 266.885 215.631 265.054 213.148 262.737C212.618 262.685 212.794 263.574 213.183 263.937Z'
          />
          <path
            className='el'
            d='M285.236 301.078C284.842 311.198 284.448 321.318 284.053 331.438C283.581 343.566 294.957 352.401 305.124 359.03C277.206 393.99 232.524 414.912 187.794 413.969C143.065 413.026 99.3042 390.239 72.8845 354.133C84.0452 344.686 97.6495 338.151 112 335.343C116.742 334.415 118.234 328.476 118.748 323.671C120.194 310.137 121.641 296.603 123.088 283.069C123.795 276.456 124.446 269.467 121.674 263.421C115.834 250.682 113.146 236.511 113.914 222.517C108.99 223.04 103.795 223.522 99.2802 221.489C94.7657 219.455 91.4195 213.942 93.5247 209.461C102.498 190.358 92.7216 167.901 94.4304 146.865C94.7305 143.171 95.5696 139.184 98.4132 136.807C101.257 134.431 106.592 135.028 107.605 138.593C108.334 136.916 109.064 135.24 109.793 133.563C106.668 129.595 100.217 131.565 95.5436 129.647C87.4427 126.324 88.8369 114.554 91.6628 106.266C97.2102 89.9968 102.758 73.7275 108.305 57.4583C110.272 51.6898 115.097 44.5514 120.638 47.0895C118.405 38.033 129.205 31.6767 138.029 28.6527C163.392 19.9606 188.754 11.2686 214.117 2.57658C218.11 1.20824 222.221 -0.178027 226.437 0.0187483C230.877 0.225965 235.026 2.16802 239.041 4.07499C263.105 15.5049 287.168 26.9348 311.232 38.3647C314.34 39.8413 316.077 43.1444 317.601 46.2304C321.067 53.2511 324.533 60.2719 327.999 67.2926C336.448 84.4085 345.099 103.778 339.144 121.913C335.978 131.555 329.038 139.414 322.273 146.978C319.659 149.9 317.046 152.822 314.432 155.744C320.216 152.464 326.539 159.695 327.936 166.196C329.464 173.307 328.835 180.866 326.153 187.627C323.85 193.431 320.057 198.734 319.075 204.9C317.971 211.828 320.581 218.843 320.235 225.85C319.89 232.856 314.126 240.76 307.378 238.844C305.549 253.224 299.79 267.084 290.89 278.526C286.049 284.75 285.544 293.2 285.236 301.078ZM309.364 234.082C314.491 235.126 318.389 228.962 318.236 223.731C318.083 218.501 315.644 213.508 315.708 208.276C315.805 200.307 321.539 193.659 324.346 186.2C327.927 176.684 326.432 165.42 320.493 157.167C318.769 159.373 314.855 159.237 313.288 156.918C311.721 154.599 313.055 150.917 315.744 150.139C308.81 144.121 298.753 141.922 289.94 144.498C284.413 146.113 278.497 145.401 272.818 144.454C258.957 142.142 245.317 138.51 232.142 133.621C200.43 121.853 163.353 125.622 134.657 143.533C132.323 144.99 129.893 146.584 127.145 146.712C124.396 146.839 121.339 144.791 121.52 142.045C121.721 139.009 120.123 135.717 117.264 134.677C114.404 133.637 110.643 135.735 110.641 138.778C110.639 140.513 110.518 143.407 108.934 142.698C106.492 141.1 104.05 139.502 101.608 137.904C98.9958 139.119 98.0585 142.312 97.5819 145.154C96.1584 153.641 96.273 162.385 97.9185 170.832C99.4431 178.659 102.282 186.553 100.869 194.4C100.051 198.942 97.8459 203.131 96.8865 207.645C95.9271 212.159 96.5794 217.549 100.303 220.275C110.032 216.216 122.089 218.546 129.605 225.938C135.041 231.285 140.477 236.632 145.914 241.979C148.298 244.324 152.387 242.732 154.863 240.484C157.799 237.819 159.992 234.419 162.913 231.736C165.833 229.053 169.928 227.087 173.723 228.235C173.316 226.693 174.704 225.305 175.977 224.345C178.347 222.559 180.989 220.845 183.953 220.718C186.918 220.591 190.163 222.682 190.245 225.648C200.332 222.084 211.875 222.871 221.385 227.771C223.288 226.073 226.143 226.179 228.686 226.383C236.233 226.99 243.781 227.596 251.328 228.203C254.959 228.495 258.716 228.823 261.906 230.582C266.477 233.102 269.204 238.605 268.439 243.769C269.426 242.32 271.972 243.337 272.434 245.028C272.895 246.719 272.042 248.461 271.221 250.009C270.399 251.557 269.558 253.309 270.042 254.994C270.848 257.797 275.029 260.121 273.328 262.491C280.186 255.586 287.044 248.68 293.901 241.775C298.14 237.507 303.47 232.88 309.364 234.082ZM300.124 358.541C300.108 357.529 299.375 356.685 298.658 355.971C294.126 351.458 288.461 348.093 282.33 346.273C282.037 327.911 282.541 309.537 283.841 291.218C278.195 295.722 272.55 300.226 266.905 304.73C259.089 310.966 251.272 317.202 243.456 323.438C241.521 321.795 240.191 319.454 239.77 316.95C238.522 327.228 229.31 334.4 220.851 340.368C214.439 344.892 208.027 349.415 201.615 353.939C195.104 347.127 188.594 340.314 182.083 333.502C178.65 329.91 174.993 324.682 177.612 320.459C177.475 322.152 175.371 323.094 173.725 322.672C172.08 322.249 170.839 320.934 169.694 319.678C163.574 312.963 157.454 306.247 151.334 299.531C148.954 296.919 146.403 293.397 147.86 290.177C146.821 290.69 145.782 291.202 144.743 291.715C139.16 285.279 133.113 279.245 126.665 273.677C124.537 293.938 122.409 314.198 120.281 334.459C105.108 338.442 90.5172 344.638 77.1141 352.789C87.2944 372.161 105.471 386.365 125.224 395.787C153.508 409.277 185.941 413.909 216.871 408.875C249.022 403.642 280.1 387.336 299.114 360.887C299.62 360.183 300.138 359.408 300.124 358.541ZM256.135 270.32C253.923 269.752 253.667 266.752 253.884 264.479C254.248 260.672 254.612 256.865 254.976 253.058C253.9 252.628 252.729 253.318 251.777 253.979C245.013 258.669 238.25 263.359 231.487 268.049C230.694 268.599 229.795 269.448 230.122 270.356C231.046 272.919 229.3 275.679 227.279 277.506C225.257 279.333 222.795 280.849 221.599 283.298C220.502 285.545 220.676 288.178 220.875 290.671C221.179 294.478 221.483 298.286 221.787 302.093C230.741 296.955 239.865 292.114 249.139 287.581C252.103 286.132 252.439 282.124 252.446 278.825C252.454 275.526 253.043 271.474 256.135 270.32ZM310.35 141.802C312.518 143.404 316.136 144.819 317.384 142.43C305.483 132.572 291.407 125.354 276.456 121.442C256.053 116.103 235.65 110.765 215.247 105.427C210.408 104.16 205.445 102.883 200.466 103.367C186.101 104.762 171.736 106.157 157.372 107.552C151.459 108.126 145.182 108.638 139.866 105.986C128.766 100.449 117.512 95.2189 106.123 90.3034C104.095 89.4283 101.486 88.652 99.8944 90.1835C99.8758 91.1746 100.916 91.8049 101.816 92.2222C114.1 97.9241 126.385 103.626 138.67 109.328C142.103 110.921 145.747 112.553 149.513 112.174C163.371 110.78 177.228 109.385 191.086 107.991C198.024 107.293 205.142 106.607 211.882 108.399C231.163 113.525 250.445 118.651 269.727 123.777C276.611 125.608 283.519 127.446 290.102 130.166C297.315 133.146 304.075 137.162 310.35 141.802ZM174.131 252.079C173.864 258.095 173.597 264.111 173.33 270.127C173.294 270.934 173.263 271.771 173.564 272.521C173.859 273.258 174.444 273.835 175.015 274.387C183.933 283.029 193.054 291.462 202.368 299.676C203.435 300.618 205.242 300.037 206.067 298.878C206.892 297.718 207.005 296.214 207.09 294.794C207.405 289.534 207.557 283.734 204.254 279.629C202.834 277.865 200.887 276.586 199.456 274.831C198.024 273.076 197.186 270.48 198.396 268.566C199.088 267.47 198.658 265.952 197.766 265.012C196.874 264.071 195.629 263.568 194.432 263.07C187.313 260.112 180.499 256.423 174.131 252.079ZM219.503 245.887C216.365 246.204 213.572 242.929 210.488 243.587C209.218 243.858 207.844 244.764 206.758 244.054C202.044 240.97 195.885 240.21 190.563 242.055C188.025 242.935 185.159 244.352 182.847 242.985C182.119 242.555 181.548 241.882 180.786 241.516C180.024 241.15 178.907 241.251 178.582 242.032C200.12 253.035 225.941 255.361 249.099 248.385C243.882 247.442 238.664 246.499 233.447 245.556C231.906 245.277 230.227 244.919 229.25 243.695C228.128 242.288 225.869 242.637 224.3 243.519C222.731 244.401 221.294 245.707 219.503 245.887ZM328.703 127.917C331.166 124.756 333.636 121.494 334.919 117.699C335.132 117.07 335.312 116.391 335.146 115.748C334.892 114.766 333.874 114.136 332.867 114.018C331.86 113.899 330.854 114.185 329.88 114.469C320.172 117.293 310.463 120.118 300.754 122.942C299.766 123.23 298.536 123.906 298.789 124.903C298.914 125.396 299.378 125.714 299.809 125.985C305.577 129.605 311.503 132.973 317.566 136.075C318.519 136.563 319.567 137.058 320.617 136.852C321.726 136.634 322.53 135.698 323.238 134.818C325.078 132.532 326.9 130.231 328.703 127.917ZM223.108 268.848C232.858 263.462 242.288 257.498 251.331 250.996C240.41 253.51 229.3 255.207 218.126 256.068C216.238 256.213 214.337 256.334 212.452 256.147C210.035 255.906 207.699 255.162 205.384 254.423C196.895 251.712 188.406 249.001 179.916 246.29C178.757 245.92 177.538 245.545 176.344 245.776C175.15 246.007 174.022 247.069 174.169 248.277C176.188 246.284 179.529 247.026 182.227 247.903C189.577 250.291 196.927 252.678 204.278 255.066C207.155 256.001 210.071 256.943 213.091 257.13C215.104 257.255 217.122 257.04 219.128 256.826C227.565 255.925 236.003 255.023 244.44 254.122C237.329 259.03 230.218 263.939 223.108 268.848ZM176.066 249.443C176.069 250.435 177.078 251.08 177.961 251.532C187.147 256.228 196.333 260.923 205.519 265.619C206.645 266.194 208.015 265.563 208.991 264.761C209.968 263.959 210.854 262.944 212.074 262.612C211.273 261.664 209.737 262.491 208.902 263.41C208.068 264.328 206.884 265.434 205.784 264.861C195.884 259.709 185.978 254.569 176.066 249.443ZM213.183 263.937C214.856 265.499 216.739 266.836 218.765 267.901C219.702 268.394 220.942 268.797 221.737 268.097C218.565 266.885 215.631 265.054 213.148 262.737C212.618 262.685 212.794 263.574 213.183 263.937Z'
          />
        </g>
      </svg>
    </div>
  );
};

export default RobSvg;

const eyeOpen =
  'M205.507 162.156C202.676 164.071 199.267 164.891 195.941 165.676C192.492 166.489 189.044 167.303 185.596 168.116C183.971 168.499 182.215 168.874 180.677 168.223C175.74 166.133 170.802 164.043 165.865 161.953C164.272 161.279 161.786 161.019 161.415 162.709C161.234 163.534 159.804 163.245 159.597 162.425C159.39 161.606 159.927 160.802 160.436 160.126C163.644 155.866 167.451 151.249 172.752 150.665C178.532 150.028 184.313 149.391 190.093 148.754C191.227 148.63 192.416 148.512 193.471 148.945C194.37 149.315 195.066 150.045 195.727 150.759C199.129 154.433 202.393 158.236 205.507 162.156ZM183.723 152.462C185.715 153.063 187.272 154.906 187.531 156.97C187.79 159.033 186.736 161.204 184.955 162.278C185.343 162.518 185.841 162.433 186.287 162.341C190.878 161.39 195.468 160.439 200.059 159.488C198.157 157.326 196.255 155.163 194.353 153C193.869 152.448 193.363 151.882 192.696 151.576C192.096 151.3 191.416 151.261 190.756 151.258C188.365 151.247 185.974 151.657 183.723 152.462ZM174.551 153.425C171.872 152.842 168.901 153.936 167.241 156.118C166.809 156.686 166.613 157.739 167.305 157.916C169.179 158.395 170.969 159.197 172.572 160.278C173.015 160.116 172.874 159.467 172.714 159.023C171.994 157.033 172.792 154.601 174.551 153.425ZM193.008 164.608C193.38 164.522 193.858 164.18 193.624 163.878C189.54 164.545 185.47 165.305 181.42 166.156C181.143 166.639 182.007 166.93 182.554 166.824C186.052 166.149 189.537 165.41 193.008 164.608Z';

const eyeClosed =
  'M205.507 162.156C201.5 159.5 199.5 159.5 197.5 159C195.5 158.5 190.5 158.5 190.5 158.5C188.654 158.5 184 159 180.5 158.5C174.5 158.5 167.635 158.5 166.5 158.5C164.907 157.826 161.786 161.019 161.415 162.709C161.234 163.534 159.804 163.245 159.597 162.425C159.39 161.606 159.927 160.802 160.436 160.126C163.644 155.866 166.199 155.084 171.5 154.5C177.281 153.863 182.874 155.137 188.654 154.5C189.788 154.375 190.945 154.067 192 154.5C192.9 154.87 196.839 153.786 197.5 154.5C201.793 157.5 202.393 158.236 205.507 162.156ZM182.554 155.932C185 155.932 185.75 155.236 188.654 156.118C190.248 156.118 194.281 155.426 192.5 156.5C192.888 156.74 193.024 156.593 193.471 156.5C198.061 155.549 199 157 199.5 156.5C197 155.932 196.5 156.118 195.727 155.932C194.5 155.932 194.138 156.424 193.471 156.118C192.87 155.842 192.661 156.121 192 156.118C189.61 156.107 184.805 155.126 182.554 155.932ZM173.5 156.118C170.5 156.118 171 156.5 167.5 156.5C166.985 156.426 166.5 156.5 167.5 156.5C171 157 171 155.932 173.5 156.5C173.943 156.338 182.16 156.375 182 155.932C178.5 155.932 177.5 155.932 173.5 156.118ZM193.471 157.5C193.471 157.5 194.734 157.302 194.5 157C194.5 157 183.453 156.149 179.403 157C179.126 157.484 184 157 184 157C184 157 188 156.667 193.471 157.5Z';
