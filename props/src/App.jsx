import Card from "./components/Card";




export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Hello props!</h1>
      <div
        className="flex flex-wrap gap-5 justify-center items-center mt-5
      "
      >
        <Card
          link="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEBIPFhUQGBUQEBAVDxUPEBUQFRcXFhUVFRUYHighGB0lHRUVITEhJykrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0dHiYwLS0rLS0tLSstLS0tKy01LS0tLS0tLS0tKy0tKystLS0tKy0tLSstLS0tLS0tLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAEUQAAIBAgIFBwkECAUFAAAAAAABAgMRBCEFBhIxQQczUWFxdLETIiNzgZGztMIygqHRJEJSYnLB8PEUFZKy4RY0k6TS/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIhEBAAICAgICAwEAAAAAAAAAAAECETEDIRIyE1EEIkFh/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAPJSSV20l0t2RhCtF7pRfZJMo3lK2JnWxSqzjGjUlQoQVthRhLZlKz3tu5t0jpyFGHlMTVpxjuTnGLbe+0Va8n1Ir81vxdbXgFT0NpKjiKaq4eVOcJZbcPMzW9O1mn1M64Smt1Sp7ZyfiyykTfSFq4WEED/i6q/Xb9kf8A5Pf80qr9j/Q/5SRP47Ip0EItNyW+EX95x/kzZHTseMJfdkn42OeFvoS4bNeHrxnFSg7p7nu/sVjX3SDp0prPZp0aleavbaknGFOLtwvJu37qITOHYjMrFLSFFZOrSV915xV+zM2060ZfZlF9kkz5tqxqJh3RhWxynXxNeKq1ZTrVNmDmrqnCMZJJRTSvvyfYSf8A0LgU7xjiIN8YYzEWXYpTaXuJeMmF6BRnqbbOlpDScOhKvTnH8YXfvNOP0djsPTnW/wA3qKFGMqk3Vwca7UIJt5Rkm8luSGJF/B8/0TjtLVqMK+GxWjq9Oom4OpQq4ZuzcWmkpNNNNPsO+GldMRXpMHg6nqcXa/8A5FE44uIKjDWvGLndFYuP8FWjW9ypyZ36A1tw+KqSopVaVeC25YavSlRrbF7bSjLfG/FAT4AAAAAAAAAAAAAAAAAAAAAAAKPqv/2VbvFf40j5tyntxrwdRSdN07U87Lau9tJ9P2b9Vj6Vqsv0Kr3iv8aRWtfNZcPhoRpVcPDETqLbVGdvJxinZTm2nxvZJZ2e4prOJaLRExKL5CI1HHFvPyTlSUHwdZKXlLPqj5O/aj6c28rW32a6nxRXOTjWaljaD8lRjRdBqE6EbeTinnFwslk8+G9MsW0aeDuZU31D2TNE2bJM0TZrVtU2aJM2TZpmBP6ry82a/eUverfSV7lR5jE91fxoE/qtuqfd+ogeU/mMT3V/GgYubcp1SuBrejpp/sxv/pR3QkQWBqeZD+GPgjvpYg0WphbNHftW3bjKaUk00mmrSTV008mmug0RrJnqlbsZWhhvwdCFOEadOEYQgtmEIxUIRj0KKySN5ppyubSMoy9K9rZh0pYTEpekw+Kw9OM1lLyWJqRw9WDf7LVRO3TFFhIbWrmqXesB83ROS4swAIgAAAAAAAAAAAAAAAAAAB5Pcz0xnufYBStUl+g1PXVviyKLylas4qrVhiMLTlVUoKjUpxa24tN2dm1eLUrPot1l71QX6DP11X4rKJypa1YmjUjhMLUdL0flqtVWU3tOSjCMn9n7LeWbbWfTTXOemi2MTlMckGqdfBwrVcVHYniXCMaV1KUadPazls3Sbc3lwS6y4qRSuRnWbEYqFajiZyqSw/k5Qqy+24VNpbMnxs4PPfmW/bNX4+5U2xiMNkpGmUg5GuUjUrYyZqkZyZrbAn9Vt1T7v1EFymcziO6v41MnNVt1T7v1EJyl8ziO6v40DFzblOqP0fVexD+GPgiQjUbIXB1LQinf7MfBHfTq2tmelMdNdbZSuGxNspHfB9Dvcg1UudeGxLWT3Ge9HbUz3CWo1LOz4nYmRimn/J9J14erwZRKi9HUQ+tPNUu9YH5uiS6IjWjmqXesD81RIypWUAEQAAAAAAAAAAAAAAAAAAA8ksj0AUrVBfoU10V6y91WSITXbUKGkHCpGq6NWmthz8n5SMqd72lG6d027O/F+z2lRTpxWaUq9RuKk9lvznuv059p2RwyW5zXZOS/mSr+POInK2eSO4mG7UvVSjoujNRm5zqNSrVpRUHJxVoxjFbkruyu3eTzOmMjlp0Ve7cm1ucpOduy+433L+Lj8Nq7TE6ZuRrkzxswbLUCTMbnkpGDYFk1V3VPu/UQvKTzWI7q/jQJnVTdU+79RD8pHNYjur+NTMXNtOqEwjTpw/hj4I2bLW5kXgq9ox/hjnfjbd1EjRrp5f2PTjTNxc9qzh1QqHbQkRynnmdmGrx6URvV6HHz+SWw8bux2NGGFirXTT2uK8Da0YbT2lM9t1CtnZ+w4NZ+ap96wXzVE2ydmn0P8DVrNzVPvOC+aokZU3rjtZAARVgAAAAAAAAAAAAAAAAAAHknkenklkB8zwr9FD10/wDbI70zgw/Mw9dP/bI7FI2V9YcnbapDaNe0eORJxscjCUjByMJSAybMdowlIw2gLZqluqfd+oiOUfmsR3V/Gpkrqe/Nqfd+oiuUbmsR3V/GpmLm3KdXz/CYzzI3tuXC3A78PWu8n1Ig1FbEZKzVl4HlHGWlvtx/p/1xPYisYYZtWZXh2cU7q6yfT7Pcc8cM73Vyp4bSc3iIyd2o3iorcla2S9xc6FdNKxTaZhs4q5sndE1dmNp9F99ySU8r8GQNGeXWdeDxLfmt7mvcY7x3lv8Aj6zCRqJ27MzVrHzNLvOC+apEnsK1iL1g5ml3nBfNUSpmvbMLOACKoAAAAAAAAAAAAAAAAAAAAAfMqfNR9fU8JHQpHNF+ij6+p4SM7myvrDk7bto8czU5GLmScbHI1ymYOZrlMDY5GCmapSPFIC7amPzZ/d+oi+UbmsR3V/GpklqS/Mn2x+ojeUd+ixHdX8amYuXcp1fHtG6STirdCvE24qCfnR7bEXV0bKKUoX3J/gMPjuE8nuv+aPYi0anqWSK0vONJPQ1f0ifHMvGjZ7ij6Hp3qp9KefDdwLfgp7Jzxzls9cR/iwU2ewqbMrvde7OChiHbd2Hfhqsb58LXXU8mZb0w3cd+lowda6s/Z2HHrBK9Gn3rBfNUTfQwbilbhl7OBzacfoafVisGv/bomW0dMnJj+LUACtUAAAAAAAAAAAAAAAAAAAAAPmCfoo+vqeEg5GLfoY+vqeEjW5GynrDk7ZykYOZrlI1uZJxslMwczU5mLkBsczyMzS5HsJAX7UV+ZPtj9RG8pPNYjur+NTJDUN+jqdsfqI/lJ5uv3V/HpmLm3KdVHeBUqccl9mPgrFe0roZu7SzXG2/sJLVjT0ZxjRrNKVkoSeSkrbr9PiWKthek9eYi0PO1KkaEi4txvZrg+nqLVhal96tJb/zObGaMV9qKs1259p7sySUs2lla2cf+CcR008d82xKbwzOumkn1NZ+0icLienqz3EjTqFHI9CnS76Kr7dKL4pWl2rI49Y1alT71g378XSOLVjF5uF9/DrO/Wdeipd5wPzVEw8kYnCm21lABSgAAAAAAAAAAAAAAAAAAAAAPltR+hj6+fhI55SN1V+hj6+fhI5Js2V9YcnZKRqcjyTNbZJxk5HjkYXPGwMmz2LNTkewYH0PUHm59sfqI/lKfo6/dX8emd/J+/R1O2P1EdymP0dfur+PTMXNtZTb4So3iuxFm1f1qcLUcU247oVd7j0KfSusqVCq4pcVZZHdGlGorxefFcfcenW2e4Yb0+30SrjErXatPOE1nFrtQw9dXySaXmvi+xopWisbOmnSneVN74cY5749B30MZOhNSTc6c+PTH28UaqTEwq8baWSVNLODvF5Lpi+g6aNVpr8H1EWm1Jyu3Gp5yfC35rcdSrbjPMfth7MTPxR5bWTQMvTxS/Wd32cSxa0c1T71gvmqJEal0dqcqnCCUU/3pf8L8SX1m5qn3nBfNUjF+RP7YUTOVkABmcAAAAAAAAAAAAAAAAAAAAAHyqu/Qr18/CRxTkdlfmF66fhI4JmynrDk7a5s1ykZSNbJOFzwADwyizw9igPofJ7zdTtj9RHcpz9HW7q/j0yR5PebqdsfqIzlQfo63dX8emYubcrKbfAoSyXYjJPjFtNcU7NMxoK6W/cjbGlnl+VzfXjmYUZiZw6sNpeayqRjNdP2J+9ZfgTOAxVKeUG1x2JKzuujg/YQVKjf+WRIYTR97NdXaXcdbE8cbqsiqWVlx4eJto1Lv8TPDYJyp3la8d98tr95dH5ln1V1dbqqVSElCk9p7UWtqazjFdK3P2dZ3k5IjMysmb5/b+rhoDBeRoQg1aTW3Pp25ZtPsyXsObWuVqNPvWB/HF0UTJCa38zT71gfm6J5lpmcy6tIAKwAAAAAAAAAAAAAAAAAAAAAfKa/ML10/CRwTO+tzC9dPwkcTRsp6w5O2hozpqFvO33691vzPXEx2CTjColwRp8nLp9h07A2ANOyZQibdg9jEC98n/N1O2P1EVypc3W7q/jUyW1B5up2x+oiOVR+jrd1l8amYubaym3wzC0cl2EjDAPf/AHLhq3qfN0oVqsWoyinFNZtNb2rZI6K+g0k5RSt+Nvb7j2PkpHUMmJ2pVHDrdfPev+CXwVO359Z7itHtbv69p7o/D1ak1TpQlKT/AFUr+19C6yczHjl2sTnpZdC3xE6NBcXtVHw2Fm37rn1QgdU9XY4SF5WdWfOS4JfsR6vEnjy+S8WnppkIPXHmKfesB85QJ0gtceYp96wHzlArnTkLUACsAAAAAAAAAAAAAAAAAAAAAHyqrzC9dPwZytHfpzB1KE5UnF7LqOrSlbzXFt5X6UnZnJGlJ7oyNdJjxgmO2nZGydtPR1WW6nJ/idNPV/EvdTl7U14o75R9uYROwe7BP09VMS96iu1r8zqp6m1X9qcF/XYc+Sv2YVbZPVEuVPUtfrVX7I/2OmlqdQX2pTftt+ZH5amGGocPRTl0z2V7Ff6iC5WeZr90l8amX/C4aFOKhTioxjkkiq8oOiZ1abnCMpR8lVoVYRW1PZk4yhNR3u0oZpZ+d1GbknPadNpjCxUqUOhwj/tRAaQ0S1LZinsyz2uCytu3dJTNV+UWthqMMNi8HiasqCVKnXobNRTpx82G2pNWkkkn+KTJt8oOKqL9H0NjJ341KkaUfwjIsryRCM1dUtSXNJqtHfdyttK3UWjRGiaWHgoU4q6VpTstuWbd2+1sqENO6dmvRaKw9JcHVrylb2JRM4UNZKm+WjaPWqTm/dKbO25Zt1JFcL0eoo0dVdOT53S6inwp4elH3Wh/M9XJriJu9fTGk5dKjXnCPuTS/Ary6u8st+XbkU3WbTlKvisJo7DzjUqyxFHEYhQkpqjQw01Wbm1km3CKS6+y+tcj2Ak716mLrPpnXlLxuWjVrVLBYFP/AAlCEHPKdT7VSS6HJ526hkTgAOOAAAAAAAAAAAAAAAAAAAAADGcE8mk10NXRjGhFboxXZFIADYAAAAAAAAAAMdhXvZX6bZmQAAAAAAAAAAAAAAAAAAAAAAB//9k="
          title="samsung s21"
          desc="this is a samsung phone s21"
        />
        <Card
          link="https://cdn.gadgetbytenepal.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Cream.png"
          title="samsung 22"
          desc="this is a samsung phone"
        />
        <Card
          link="https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/09/Samsung-Galaxy-A06-Gold.jpg"
          title="samsung A06"
          desc="This is a samsung phone A06"
        />
        <Card
          link="https://static-01.daraz.com.np/p/088f72b7b338c361309e30e5e2132256.jpg"
          title="samsung A07"
          desc="This is a samsung phone A07"
        />
        <Card
          link="https://www.samsungplaza.com.np/public/files/D1BAF266D335CBD-SM-S928_Violet.png"
          title="Samsung s22"
          desc="This is a samsung phone"
        />
      </div>
    </>
  );
}
