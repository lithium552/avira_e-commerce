import { useState, useEffect } from 'react'
import Title from '../components/Title'
import { radioInputStyles } from './AddressPage'
import PriceDetails from '../components/PriceDetails'
import { useNavigate } from 'react-router-dom'

type CardValues = {
  cardNumber: string;
  nameOnCard: string;
  exprires: string;
  cvv: string;
}


const cardValuesHandler = (setCardValues: React.Dispatch<React.SetStateAction<CardValues>>, value: string, targetValue: string) => {
  switch (value) {
    case 'cardNumber': setCardValues(prev => ({ ...prev, [value]: targetValue }))
      break
    case 'nameOnCard': setCardValues(prev => ({ ...prev, [value]: targetValue }))
      break
    case 'exprires': setCardValues(prev => ({ ...prev, [value]: targetValue }))
      break
    case 'cvv': setCardValues(prev => ({ ...prev, [value]: targetValue }))
      break
  }
}

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [disableForm, setDisableForm] = useState(true)
  const [disableButton, setDisableButton] = useState(true)
  const [cardValues, setCardValues] = useState({
    cardNumber: '',
    nameOnCard: '',
    exprires: '',
    cvv: ''
  })
  const [cardValuesErorr, setCardValuesErorr] = useState({
    cardNumber: '',
    nameOnCard: '',
    exprires: '',
    cvv: ''
  })

  const navigate = useNavigate()

  const submitPayment = () => {
    if (paymentMethod !== 'Credit/Debit Card') {
      localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod))
      navigate('/avira_e-commerce/address')
    }
    const res = {
      cardNumber: '',
      nameOnCard: '',
      exprires: '',
      cvv: ''
    }
    setCardValuesErorr({...res})
    if(cardValues.cardNumber.length !== 16) {
      res.cardNumber = 'Card Number must have 16 digits'
    }
    if(/[^0-9]/.test(cardValues.cardNumber)) {
      res.cardNumber = 'Card Number can be only digits'
    }
    if(/[^A-Za-z ]/.test(cardValues.nameOnCard)) {
      res.nameOnCard = 'Name on card must contain only characters'
    }
    if(cardValues.nameOnCard.length < 3) {
      res.nameOnCard = 'Name on card must contain at least 3 characters'
    }
    const dividedString = cardValues.exprires.split('/')
    if(dividedString.length === 1) {
      res.exprires = 'Expires should have slash symbol - "/"'
    }
    if(/[^0-9]/g.test(dividedString[0]) && /[^0-9]/g.test(dividedString[1])) {
      res.exprires = 'Month and year can only be a digits'
    }
    if(Number(dividedString[0]) < 0 && Number(dividedString[0]) - 1 > 12) {
      res.exprires = 'Incorrect month input'
    }
    if(new Date(Number( `20${dividedString[1]}`), Number(dividedString[0]) - 1).getTime() < Date.now()) {
      res.exprires = 'Your card expired'
    }
    if (cardValues.cvv.length < 3) {
      res.cvv = 'Must be 3 characters'
    }
    if (/[^0-9]/.test(cardValues.cvv)) {
      res.cvv = 'Must be digits only'
    }

    if(Object.values(res).every(val => val === '')) {
      localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod))
      localStorage.setItem('cardValues', JSON.stringify(cardValues))
      navigate('/address')
    }
    setCardValuesErorr({...res})
  }

  const isVaildValues = (paymentMethod: string, cardValues: CardValues) => {
    if (paymentMethod === 'Credit/Debit Card') {
      const res = [...Object.values(cardValues)]
      if (res.length && res.every(val => val)) return true
      else return false
    } else return false
  }

  const onRadioInputHandle = (e: React.ChangeEvent<HTMLInputElement> ) => setPaymentMethod((e.target.nextSibling as HTMLLabelElement).innerText)

  useEffect(() => {
    paymentMethod && paymentMethod !== 'Credit/Debit Card' 
      ? setDisableButton(false)
      : paymentMethod === 'Credit/Debit Card' && isVaildValues(paymentMethod, cardValues)
      ? setDisableButton(false)
      : setDisableButton(true)

    if (paymentMethod === 'Credit/Debit Card') setDisableForm(false)
    else setDisableForm(true)

  }, [paymentMethod, cardValues])

  return (
    <main className='p-12 flex gap-4 justify-center'>
      <svg className='mt-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.875 15.3L0.275 8.70001C0.175 8.60001 0.104 8.49167 0.0619998 8.37501C0.0206665 8.25834 0 8.13334 0 8.00001C0 7.86667 0.0206665 7.74167 0.0619998 7.62501C0.104 7.50834 0.175 7.40001 0.275 7.30001L6.875 0.700006C7.05833 0.516673 7.28733 0.420673 7.562 0.412006C7.83733 0.404006 8.075 0.500006 8.275 0.700006C8.475 0.883339 8.57933 1.11234 8.588 1.38701C8.596 1.66234 8.5 1.90001 8.3 2.10001L3.4 7.00001H14.575C14.8583 7.00001 15.096 7.09567 15.288 7.28701C15.4793 7.47901 15.575 7.71667 15.575 8.00001C15.575 8.28334 15.4793 8.52067 15.288 8.71201C15.096 8.90401 14.8583 9.00001 14.575 9.00001H3.4L8.3 13.9C8.48333 14.0833 8.57933 14.3167 8.588 14.6C8.596 14.8833 8.5 15.1167 8.3 15.3C8.11667 15.5 7.88333 15.6 7.6 15.6C7.31667 15.6 7.075 15.5 6.875 15.3Z" fill="#2D2D2D" />
      </svg>
      <section>
        <Title length={null} title='SELECT PAYMENT OPTION' />
        <div className='border rounded-lg mt-6 flex items-center p-4 gap-4'>
          <input
            className={radioInputStyles}
            type="radio"
            name="payment"
            id="delivery"
            value={paymentMethod}
            onChange={onRadioInputHandle}
          />
          <label htmlFor="delivery">Cash On Delivery</label>
        </div>
        <div className='border rounded-lg mt-6 flex items-center p-4 gap-4'>
          <input
            className={radioInputStyles}
            type="radio"
            name="payment"
            id="phone"
            value={paymentMethod}
            onChange={onRadioInputHandle}
          />
          <label htmlFor="phone">PhonePay/Google Pay/BHIM UPI</label>
        </div>
        <div className='border rounded-lg mt-6 flex items-center p-4 gap-4'>
          <input
            className={radioInputStyles}
            type="radio"
            name="payment"
            id="netbanking"
            value={paymentMethod}
            onChange={onRadioInputHandle}
          />
          <label htmlFor="netbanking">Net Bankin</label>
        </div>
        <div className='border rounded-lg mt-6 p-4'>
          <div className='flex items-center'>
            <input
              className={radioInputStyles}
              type="radio"
              name="payment"
              id="card"
              value={paymentMethod}
              onChange={onRadioInputHandle}
            />
            <label htmlFor="card" className='flex ml-4'>
              Credit/Debit Card
            </label>
            <div className='flex ml-auto'>
              <div className='flex gap-4'>
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="24" rx="2" fill="#FBFAF8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M32.1666 7.44798C31.5893 7.23205 30.6847 7 29.5546 7C26.6748 7 24.6456 8.44574 24.6285 10.5164C24.6128 12.0486 26.0767 12.9017 27.1826 13.4125C28.3167 13.9339 28.6985 14.2673 28.6925 14.7335C28.6853 15.4479 27.7871 15.7741 26.9494 15.7741C25.7826 15.7741 25.1632 15.6133 24.2058 15.2154L23.8299 15.0457L23.4209 17.4315C24.1024 17.7285 25.3603 17.9868 26.6676 18C29.7316 18 31.7209 16.5712 31.743 14.3594C31.7536 13.1469 30.9776 12.2243 29.2966 11.4645C28.2771 10.9711 27.6534 10.6415 27.6603 10.1426C27.6603 9.70058 28.1877 9.22588 29.3285 9.22588C30.2829 9.21103 30.9725 9.41847 31.5102 9.63482L31.7719 9.757L32.1666 7.44798ZM18.6827 17.8418L20.505 7.18583H23.4193L21.596 17.8418H18.6827ZM37.389 7.19625H39.6413L42 17.8446H39.2952C39.2952 17.8446 39.0283 16.6211 38.9411 16.2482C38.7156 16.2482 37.7742 16.247 36.8894 16.2459L36.877 16.2459C36.0973 16.2449 35.3644 16.244 35.2082 16.244C35.095 16.532 34.5948 17.8446 34.5948 17.8446H31.5337L35.8621 8.0799C36.1694 7.38546 36.6909 7.19625 37.389 7.19625ZM36.0464 14.0644C36.2878 13.4505 37.2081 11.0851 37.2081 11.0851C37.1996 11.099 37.2563 10.9523 37.3337 10.752L37.3337 10.7519C37.4149 10.5418 37.5188 10.2728 37.5942 10.0682L37.7909 10.9871C37.7909 10.9871 38.3494 13.5303 38.4664 14.0644H36.0464ZM13.3849 14.46L16.2378 7.19358H19.3249L14.7369 17.8288L11.6528 17.833L9.04419 8.51291C10.8942 9.43601 12.5497 11.2805 13.0805 12.9833L13.3849 14.46Z" fill="#1A1F71" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7374 7.18659H6.03703L6 7.40803C9.65663 8.29083 12.0762 10.4221 13.0804 12.9835L12.0583 8.08594C11.8821 7.411 11.37 7.20992 10.7374 7.18659Z" fill="#F9A51A" />
                </svg>
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="24" rx="2" fill="#FBFAF8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.8063 21C34.8838 21 38.9999 16.9706 38.9999 12C38.9999 7.02944 34.8838 3 29.8063 3C24.7289 3 20.6128 7.02944 20.6128 12C20.6128 16.9706 24.7289 21 29.8063 21Z" fill="#F79E1B" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.1935 21C23.271 21 27.3871 16.9706 27.3871 12C27.3871 7.02944 23.271 3 18.1935 3C13.1161 3 9 7.02944 9 12C9 16.9706 13.1161 21 18.1935 21Z" fill="#EB001B" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.9997 5.02195C21.9327 6.67228 20.6128 9.18523 20.6128 12C20.6128 14.8147 21.9327 17.3276 23.9997 18.978C26.0667 17.3276 27.3866 14.8147 27.3866 12C27.3866 9.18523 26.0667 6.67228 23.9997 5.02195Z" fill="#FF5F00" />
                </svg>
              </div>
            </div>
          </div>
          <form action="" className='flex flex-col gap-4 mt-6' onChange={e => console.log(e)} >
            {/* <Input placeholder='Card Number' type='text' /> */}
            <input 
              disabled={disableForm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => cardValuesHandler(setCardValues, 'cardNumber', e.target.value)}
              className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
              maxLength={16} type='text' name="" id="" placeholder='Card Number' required />
            {cardValuesErorr.cardNumber && (<span className='text-red-600 text-xs'>{cardValuesErorr.cardNumber}</span>)}
            <input 
              disabled={disableForm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => cardValuesHandler(setCardValues, 'nameOnCard', e.target.value)}
              className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
              type='text' name="" id="" placeholder='Name on Card' required />
            {/* <Input placeholder='Name on Card' type='text' /> */}
            {cardValuesErorr.nameOnCard && (<span className='text-red-600 text-xs'>{cardValuesErorr.nameOnCard}</span>)}
            <div className='flex gap-6'>
              <div>
              <input 
                disabled={disableForm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => cardValuesHandler(setCardValues, 'exprires', e.target.value)}
                className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 mb-4'
                type="text" name="" id="" placeholder='MM/YY' required />
                {cardValuesErorr.exprires && (<p className='text-red-600 text-xs'>{cardValuesErorr.exprires}</p>)}
                </div>
                <div>
              <input 
                disabled={disableForm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => cardValuesHandler(setCardValues, 'cvv', e.target.value)}
                className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 mb-4'
                type="text" pattern='\[0-9]' minLength={3} maxLength={3} name="" id="" placeholder='CVV' required />
                {cardValuesErorr.cvv && (<p className='text-red-600 text-xs'>{cardValuesErorr.cvv}</p>)}
                </div>
            </div>
          </form>
        </div>
        <div className='flex gap-6 mt-14 mx-auto justify-center'>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="32" rx="2" fill="#FBFAF8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M42.8887 9.93064C42.119 9.64274 40.9129 9.33334 39.406 9.33334C35.5663 9.33334 32.8607 11.261 32.838 14.0218C32.817 16.0649 34.7689 17.2023 36.2434 17.8833C37.7555 18.5785 38.2646 19.0231 38.2566 19.6447C38.247 20.5972 37.0494 21.0322 35.9324 21.0322C34.3767 21.0322 33.5508 20.8178 32.2744 20.2872L31.7732 20.061L31.2277 23.2421C32.1364 23.638 33.8136 23.9825 35.5567 24C39.6421 24 42.2944 22.095 42.3239 19.1458C42.3381 17.5293 41.3034 16.299 39.062 15.286C37.7027 14.6282 36.8712 14.1887 36.8803 13.5235C36.8803 12.9341 37.5835 12.3012 39.1046 12.3012C40.3771 12.2814 41.2966 12.558 42.0135 12.8464L42.3625 13.0093L42.8887 9.93064ZM24.9101 23.7891L27.3399 9.58112H31.2256L28.7946 23.7891H24.9101ZM49.852 9.59502H52.855L56 23.7928H52.3936C52.3936 23.7928 52.0377 22.1615 51.9214 21.6643C51.6216 21.6643 50.3726 21.6628 49.1959 21.6613L49.1919 21.6613L49.1858 21.6612L49.1767 21.6612C48.1343 21.6599 47.153 21.6587 46.9442 21.6587C46.7933 22.0427 46.1264 23.7928 46.1264 23.7928H42.0449L47.816 10.7732C48.2258 9.84728 48.9211 9.59502 49.852 9.59502ZM48.0618 18.7525C48.3836 17.9341 49.6107 14.7801 49.6107 14.7801C49.5994 14.7986 49.6749 14.6032 49.778 14.3363L49.7782 14.336L49.7784 14.3353C49.8866 14.0553 50.0251 13.6969 50.1255 13.4243L50.3878 14.6495C50.3878 14.6495 51.1324 18.0404 51.2885 18.7525H48.0618ZM17.8464 19.2801L21.6504 9.59146H25.7665L19.6491 23.7717L15.537 23.7773L12.0588 11.3506C14.5255 12.5814 16.7329 15.0407 17.4406 17.3111L17.8464 19.2801Z" fill="#1A1F71" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.3166 9.58212H8.04938L8 9.87738C12.8755 11.0544 16.1016 13.8961 17.4406 17.3114L16.0778 10.7812C15.8428 9.88134 15.16 9.61323 14.3166 9.58212" fill="#F9A51A" />
          </svg>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="32" rx="2" fill="#FBFAF8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M39.742 28C46.5119 28 52 22.6274 52 16C52 9.37258 46.5119 4 39.742 4C32.972 4 27.4839 9.37258 27.4839 16C27.4839 22.6274 32.972 28 39.742 28Z" fill="#F79E1B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24.2581 28C31.028 28 36.5161 22.6274 36.5161 16C36.5161 9.37258 31.028 4 24.2581 4C17.4881 4 12 9.37258 12 16C12 22.6274 17.4881 28 24.2581 28Z" fill="#EB001B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M31.9998 6.69592C29.2438 8.89637 27.4839 12.247 27.4839 15.9999C27.4839 19.7529 29.2438 23.1035 31.9998 25.304C34.7557 23.1035 36.5156 19.7529 36.5156 15.9999C36.5156 12.247 34.7557 8.89637 31.9998 6.69592Z" fill="#FF5F00" />
          </svg>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="32" rx="2" fill="#FBFAF8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M38.293 22.5991C37.988 23.2741 38.7308 22.8336 38.8218 22.7566C39.8236 21.9168 40.5608 19.3968 40.1074 19.0114C39.5352 18.5269 36.8807 18.5312 35.7042 19.3264C35.2126 19.6596 35.4881 19.7242 36.0066 19.695C36.9138 19.6419 37.7285 19.5868 38.4253 19.6419C39.0865 19.695 39.1237 19.9933 38.9542 20.6391C38.7572 21.3902 38.6331 21.8474 38.293 22.5991Z" fill="#FBAF29" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.2053 20.5696C30.3565 23.1595 22.4542 22.8 15.9543 19.626C15.8643 19.5824 15.5459 19.4134 15.183 19.2449C14.8992 19.1142 14.8455 19.1573 14.7995 19.2037C14.7359 19.2674 14.7602 19.3828 14.861 19.467C18.678 22.6521 23.2673 24.1836 28.2779 23.9825C32.1022 23.8283 35.6664 22.5295 37.7072 21.1469C38.0086 20.9425 38.1161 20.6773 37.991 20.5528C37.8623 20.4245 37.5232 20.4489 37.2053 20.5696Z" fill="#FBAF29" />
            <path fillRule="evenodd" clipRule="evenodd" d="M45.4087 10.6669C47.3766 10.6458 48.7951 12.3467 48.7961 14.5849C48.7972 16.7583 47.4154 18.4689 45.4438 18.5187C43.463 18.568 42.0233 16.8488 42.0212 14.6007C42.0181 12.408 43.4294 10.6884 45.4087 10.6669ZM26.1864 12.1783C26.1864 10.7717 23.0637 9.81617 22.0603 11.9078C21.2792 10.281 18.8119 10.3346 18.1399 11.9202L18.1404 11.0901C18.1404 10.9642 18.0163 10.8493 17.8799 10.8493H16.479C16.343 10.8493 16.219 10.9642 16.219 11.0901V18.1089C16.219 18.2348 16.343 18.3502 16.479 18.3502H17.9848C18.1208 18.3502 18.2412 18.2348 18.2412 18.1089V13.6581C18.2412 13.1559 18.4707 12.5886 19.045 12.4713C19.6767 12.3415 20.1921 12.6652 20.1921 13.3411L20.1916 18.1089C20.1916 18.2348 20.3157 18.3502 20.4516 18.3502H21.9828C22.1192 18.3502 22.2433 18.2348 22.2433 18.1089L22.2438 13.3799C22.2438 12.3075 24.1699 12.0303 24.1704 13.3799V18.1089C24.1704 18.2348 24.2939 18.3502 24.4304 18.3502H25.9264C26.0629 18.3502 26.1864 18.2348 26.1864 18.1089V12.1783ZM41.1604 11.1018C41.1604 10.9759 41.0364 10.862 40.9004 10.862H35.9477C35.8789 10.862 35.8107 10.8883 35.7626 10.9323C35.714 10.9778 35.6923 11.0405 35.6923 11.1042V12.0794C35.6923 12.2044 35.8242 12.3159 35.9596 12.3159H38.5629L35.5967 16.3383C35.4449 16.5439 35.4522 16.6802 35.4554 16.7402V16.7402V16.7403V16.7403V16.7403C35.4558 16.7473 35.4561 16.7532 35.4561 16.7581L35.4587 17.8774C35.4587 18.1173 35.5548 18.2245 35.8521 18.1082C37.666 17.3982 39.5988 17.3561 41.0555 18.1632C41.1744 18.2298 41.3186 18.1575 41.3186 17.9698L41.3191 16.7131C41.3191 16.6317 41.2716 16.5523 41.1971 16.5101C40.3556 16.0185 39.2855 15.8868 38.247 15.9017L41.0203 12.3317C41.1532 12.1608 41.1604 11.9774 41.1604 11.9281V11.1018ZM56.0001 12.6988C56.0001 11.5862 55.2727 10.667 53.5705 10.7154C52.7806 10.7379 52.165 11.2942 51.8227 12.0812V11.0701C51.8227 10.9432 51.6987 10.8288 51.5627 10.8288H50.1091C49.9732 10.8288 49.8496 10.9432 49.8496 11.0701V18.1152C49.8496 18.2411 49.9732 18.3556 50.1091 18.3556H51.6289C51.7654 18.3556 51.8894 18.2411 51.8894 18.1152V13.6898C51.8894 13.031 52.4994 12.4747 53.0613 12.4546C53.525 12.4388 53.9887 12.851 53.9887 13.3168V18.1152C53.9887 18.2411 54.1127 18.3556 54.2487 18.3556H55.7406C55.8765 18.3556 56.0006 18.2411 56.0001 18.1152V12.6988ZM30.6731 10.682C32.8158 10.6121 33.922 11.3662 33.922 12.5496V15.8338C33.922 16.0803 34.0016 16.514 34.0817 16.6112L34.4756 17.0914C34.548 17.1848 34.534 17.3265 34.4441 17.4069L33.373 18.3543C33.3229 18.3988 33.2531 18.4233 33.1838 18.4213C33.1145 18.419 33.0463 18.3893 32.9998 18.3419L32.1774 17.4935C31.6051 18.0838 30.8499 18.4261 29.984 18.4687C28.5309 18.5377 27.4655 17.8296 27.4909 16.3451C27.5177 14.7322 28.8158 13.8901 30.2099 13.7915L31.8584 13.6756V12.991C31.8584 12.4682 31.5002 12.0737 30.6731 12.0737C30.1184 12.0737 29.74 12.4156 29.6439 12.8766C29.618 12.9929 29.4872 13.0805 29.359 13.0681L28.0249 12.9264C27.9535 12.9187 27.8858 12.8828 27.8439 12.8292C27.8015 12.7751 27.785 12.7042 27.7995 12.6386C28.1205 11.1747 29.3653 10.7242 30.6731 10.682ZM14.4316 12.5478C14.4316 11.3639 13.3259 10.6099 11.1832 10.6797C9.87483 10.7224 8.63006 11.1728 8.30905 12.6373C8.29458 12.7019 8.31112 12.7733 8.35351 12.8269C8.39589 12.881 8.46309 12.9179 8.53443 12.9255L9.86914 13.0658C9.99683 13.0797 10.1276 12.9921 10.1535 12.8748C10.2496 12.4137 10.628 12.0729 11.1832 12.0729C12.0098 12.0729 12.368 12.4664 12.368 12.9887V13.6743L10.7195 13.7896C9.32533 13.8878 8.02732 14.7299 8.00044 16.3428C7.97511 17.8288 9.04051 18.5363 10.4936 18.4665C11.3595 18.4253 12.1147 18.083 12.6869 17.4913L13.5099 18.3401C13.5559 18.387 13.6241 18.4171 13.6934 18.4205C13.7627 18.4224 13.833 18.398 13.8826 18.3535L14.9542 17.4051C15.0436 17.3251 15.0581 17.1829 14.9852 17.0896L14.5913 16.6104C14.5112 16.5118 14.4316 16.0785 14.4316 15.8319V12.5478ZM45.4087 17.0714C46.5144 17.0714 46.5671 15.9698 46.5671 14.6093C46.5671 13.2492 46.4441 12.1615 45.4087 12.1457C44.3376 12.1299 44.2502 13.2492 44.2502 14.6093C44.2502 15.9698 44.3552 17.0714 45.4087 17.0714ZM31.876 14.7132V15.6257C31.876 16.3333 31.3694 16.936 30.9502 17.0523C30.1242 17.2836 29.5881 16.689 29.6083 16.0551C29.6341 15.2542 30.3945 14.7659 31.0365 14.7438L31.876 14.7132ZM12.3856 15.6239V14.7124L11.5461 14.7416C10.9041 14.7651 10.1437 15.2524 10.1178 16.0529C10.0977 16.6872 10.6337 17.2813 11.4598 17.0506C11.879 16.9342 12.3856 16.331 12.3856 15.6239Z" fill="#2A2D2E" />
          </svg>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="32" rx="2" fill="#FBFAF8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27.3938 27.1865L27.83 24.5447L26.8583 24.5231H22.2183L25.4429 5.02771C25.453 4.96867 25.4854 4.91387 25.5329 4.87489C25.5805 4.8359 25.6413 4.81451 25.7048 4.81451H33.5286C36.1262 4.81451 37.9187 5.32978 38.8544 6.34695C39.2932 6.82413 39.5726 7.32291 39.7079 7.8716C39.8497 8.44746 39.852 9.13538 39.7137 9.97456L39.7037 10.0356V10.5734L40.1424 10.8104C40.5118 10.9973 40.8055 11.2112 41.0307 11.456C41.406 11.8641 41.6487 12.3827 41.7513 12.9973C41.8573 13.6296 41.8223 14.3821 41.6487 15.234C41.4485 16.2137 41.1249 17.0671 40.6878 17.7653C40.2859 18.4087 39.7738 18.9424 39.1656 19.3559C38.585 19.7488 37.8953 20.0471 37.1154 20.2381C36.3596 20.4256 35.498 20.5203 34.5529 20.5203H33.9441C33.5088 20.5203 33.0859 20.6698 32.7539 20.9378C32.421 21.2113 32.2009 21.5851 32.1334 21.9939L32.0873 22.2319L31.3166 26.8884L31.2818 27.0593C31.2724 27.1134 31.2565 27.1404 31.2332 27.1587C31.2124 27.1754 31.1825 27.1865 31.1533 27.1865H27.3938Z" fill="#28356A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M40.5577 10.0978C40.5346 10.2401 40.5077 10.3856 40.4778 10.5351C39.4461 15.5862 35.9161 17.3312 31.4078 17.3312H29.1123C28.5609 17.3312 28.0962 17.7128 28.0105 18.2314L26.5023 27.3527C26.4465 27.6933 26.7217 28.0001 27.082 28.0001H31.1534C31.6353 28.0001 32.0449 27.6662 32.1208 27.2128L32.1608 27.0157L32.9274 22.3774L32.9767 22.123C33.0517 21.6681 33.4622 21.3339 33.9442 21.3339H34.553C38.4975 21.3339 41.5855 19.807 42.488 15.3881C42.8649 13.5423 42.6698 12.0009 41.6722 10.9169C41.3703 10.5901 40.9958 10.3188 40.5577 10.0978Z" fill="#019DDE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M39.4783 9.68738C39.3206 9.6435 39.158 9.60384 38.9912 9.56798C38.8235 9.533 38.6517 9.50204 38.4749 9.47486C37.856 9.37951 37.1777 9.33429 36.4513 9.33429H30.3191C30.1679 9.33429 30.0244 9.36681 29.8962 9.42563C29.6132 9.55528 29.4032 9.81057 29.3523 10.1231L28.0476 18.0016L28.0103 18.2313C28.096 17.7127 28.5607 17.3311 29.1121 17.3311H31.4076C35.9158 17.3311 39.4459 15.5852 40.4776 10.535C40.5084 10.3855 40.5344 10.2401 40.5575 10.0977C40.2965 9.96562 40.0138 9.85268 39.7094 9.75644C39.6342 9.7326 39.5566 9.70966 39.4783 9.68738Z" fill="#00164C" />
            <path fillRule="evenodd" clipRule="evenodd" d="M29.3523 10.1232C29.4032 9.81062 29.6133 9.55533 29.8962 9.42657C30.0254 9.36753 30.1679 9.33501 30.3191 9.33501H36.4514C37.1778 9.33501 37.856 9.38045 38.4749 9.4758C38.6518 9.50276 38.8235 9.53394 38.9913 9.56892C39.1581 9.60456 39.3207 9.64444 39.4784 9.6881C39.5567 9.71038 39.6342 9.73355 39.7102 9.75649C40.0146 9.85273 40.2975 9.96656 40.5585 10.0978C40.8655 8.23118 40.5559 6.96027 39.4975 5.80944C38.3305 4.54232 36.2245 4.00009 33.5295 4.00009H25.7055C25.155 4.00009 24.6854 4.3817 24.6004 4.9012L21.3416 24.597C21.2773 24.9867 21.5925 25.3382 22.0047 25.3382H26.8349L29.3523 10.1232Z" fill="#012F86" />
          </svg>
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="32" rx="2" fill="#FBFAF8" />
            <g clipPath="url(#clip0_302_659)">
              <path d="M18.3587 12.1038C18.3592 11.7636 18.3287 11.424 18.2676 11.0887H13.2839V13.0104H16.1377C16.0793 13.3171 15.9557 13.6094 15.7744 13.8698C15.5931 14.1302 15.3578 14.3532 15.0827 14.5254V15.7759H16.7863C17.7837 14.9076 18.3587 13.6228 18.3587 12.1038Z" fill="#4285F4" />
              <path d="M13.284 16.9811C14.7088 16.9811 15.9113 16.5385 16.7863 15.776L15.0828 14.5278C14.6083 14.8329 13.9985 15.0052 13.284 15.0052C11.9061 15.0052 10.7358 14.128 10.3175 12.9457H8.56299V14.2317C9.00263 15.0582 9.67696 15.753 10.5106 16.2385C11.3443 16.7241 12.3045 16.9812 13.284 16.9811Z" fill="#34A853" />
              <path d="M10.3175 12.9457C10.0963 12.3262 10.0963 11.6552 10.3175 11.0357V9.74942H8.56291C8.19246 10.445 7.99951 11.2127 7.99951 11.9913C7.99951 12.7699 8.19246 13.5376 8.56291 14.2332L10.3175 12.9457Z" fill="#FBBC04" />
              <path d="M23.1346 12.8634V16.3796H21.9524V7.693H25.0855C25.4596 7.68541 25.8316 7.74795 26.18 7.87701C26.5283 8.00606 26.8461 8.19907 27.115 8.44487C27.3823 8.67998 27.5954 8.96455 27.7412 9.28085C27.887 9.59715 27.9622 9.93841 27.9622 10.2834C27.9622 10.6283 27.887 10.9696 27.7412 11.2859C27.5954 11.6022 27.3823 11.8867 27.115 12.1219C26.5667 12.6156 25.8902 12.862 25.0855 12.8612H23.1339L23.1346 12.8634ZM23.1346 8.76361V11.7964H25.1159C25.4303 11.8019 25.7394 11.7198 26.0047 11.5604C26.27 11.401 26.4797 11.1714 26.6076 10.9001C26.7356 10.6289 26.7761 10.3281 26.7241 10.0353C26.6722 9.74243 26.5301 9.47052 26.3155 9.25347C26.3049 9.2431 26.2955 9.23303 26.2832 9.22297C26.1341 9.07236 25.9528 8.95341 25.7514 8.87401C25.5499 8.7946 25.3328 8.75656 25.1146 8.76239L23.1346 8.76361ZM30.6867 10.2433C31.5606 10.2433 32.2497 10.4635 32.754 10.9039C33.2583 11.3444 33.5108 11.9486 33.5114 12.7166V16.3796H32.3809V15.556H32.3302C31.8407 16.2356 31.1897 16.5752 30.377 16.5748C29.684 16.5748 29.1041 16.3807 28.6373 15.9925C28.4134 15.8143 28.2344 15.5911 28.1133 15.3394C27.9923 15.0876 27.9321 14.8135 27.9373 14.537C27.9373 13.9217 28.1836 13.4326 28.676 13.0698C29.1685 12.7071 29.8253 12.5253 30.6464 12.5245C31.3476 12.5245 31.9268 12.6465 32.3796 12.8878V12.6321C32.381 12.4437 32.3379 12.2573 32.2536 12.0866C32.1692 11.9158 32.0457 11.7649 31.8919 11.6448C31.5793 11.3786 31.1719 11.2335 30.751 11.2385C30.0914 11.2385 29.5691 11.5013 29.1841 12.027L28.1457 11.4066C28.7165 10.6306 29.5632 10.2428 30.6858 10.2433H30.6867ZM29.1573 14.5608C29.1567 14.7026 29.1919 14.8425 29.2599 14.969C29.3279 15.0954 29.4268 15.2048 29.5485 15.2879C29.8099 15.482 30.1343 15.5849 30.4668 15.5792C30.9652 15.5779 31.4428 15.3907 31.7956 15.0583C32.1871 14.7101 32.3827 14.3017 32.3825 13.833C32.0139 13.5558 31.5001 13.4171 30.8411 13.4167C30.3612 13.4167 29.9608 13.5259 29.6402 13.7442C29.3172 13.9672 29.1557 14.2368 29.1557 14.5608H29.1573ZM39.9999 10.4382L36.0551 19H34.8354L36.2989 16.0038L33.7039 10.4382H34.9882L36.8616 14.7084H36.8871L38.7115 10.4382H39.9999Z" fill="#5F6368" />
              <path d="M13.284 8.97621C14.0373 8.96457 14.7652 9.23321 15.3105 9.72411L16.8199 8.30029C15.8632 7.45211 14.5962 6.98627 13.284 7.00031C12.3046 7.0005 11.3446 7.25766 10.5109 7.74309C9.67731 8.22852 9.00291 8.92314 8.56299 9.74943L10.3175 11.0357C10.7358 9.85344 11.9061 8.97621 13.284 8.97621Z" fill="#EA4335" />
            </g>
            <defs>
              <clipPath id="clip0_302_659">
                <rect width="32" height="12" fill="white" transform="translate(8 7)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
      <div className='border-l border-neutralsRule h-[640px] mx-12'>
      </div>
      <div className='w-[33rem]'>
        <PriceDetails
          onClick={submitPayment}
          disabled={disableButton}
          buttonText='Pay and Place Order' />
      </div>
    </main>
  )
}

export default PaymentPage