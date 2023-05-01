import { FC } from 'react'
import AssignationsProfile from '../../modules/AssignationsProfile/Assignations/AssignationsProfile'
import HeaderProfile from '../../modules/Profile/HeaderProfile'
import LeftPanelProfile from '../../modules/Profile/LeftPanelProfile/LeftPanelProfile'
import FooterMainLayout from '../FooterMainLayout'

const Assignations: FC = () => {
  return (
    <div className='flex flex-col'>
    <div className="px-28 pt-5">
        <HeaderProfile />
        <div className="flex mt-16">
            <LeftPanelProfile />
            <AssignationsProfile />
        </div>
    </div>
    <FooterMainLayout />
</div>
  )
}

export default Assignations