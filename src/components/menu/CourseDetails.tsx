import {Link, useLocation} from "react-router-dom";
import {
    ClipboardDocumentListIcon,
    SignalIcon,
    UserGroupIcon,
    VideoCameraIcon,
    ChatBubbleLeftRightIcon,
    BookmarkIcon, SparklesIcon
} from "@heroicons/react/24/outline";
import React from "react";


const CourseDetailsMenu:React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const courseIdMatch = currentPath.match(/\/admin\/courses\/(\d+)\/details/);
    const courseId = courseIdMatch ? courseIdMatch[1] : '';

    const chapterIdMatch = currentPath.match(/\/admin\/courses\/(\d+)\/details\/chapters\/(\d+)\/details/);
    const chapterId = chapterIdMatch ? chapterIdMatch[1] : '';

    const reviewIdMatch = currentPath.match(/\/admin\/courses\/(\d+)\/details\/reviews\/(\d+)\/details/);
    const reviewId = reviewIdMatch ? reviewIdMatch[1] : '';

    const classNames = (...classes: string[]) =>{
        return classes.filter(Boolean).join(' ')
    }

    const Menu = [
        {
            name: 'Chapter',
            href: `/admin/courses/${courseId}/details/chapters`,
            icon: VideoCameraIcon,
            current: currentPath === `/admin/courses/${courseId}/details/chapters` || currentPath === `/admin/courses/${courseId}/details` || currentPath === `/admin/courses/${courseId}/details/chapters/${chapterId}/details`
        },
        {
            name: 'Live Classes',
            href: `/admin/courses/${courseId}/details/live-classes`,
            icon: SignalIcon,
            current: currentPath === `/admin/courses/${courseId}/details/live-classes`
        },
        {
            name: 'Articles',
            href: `/admin/courses/${courseId}/details/articles`,
            icon: ClipboardDocumentListIcon,
            current: currentPath === `/admin/courses/${courseId}/details/articles`
        },
        {
            name: 'Notice',
            href: `/admin/courses/${courseId}/details/notices`,
            icon: BookmarkIcon,
            current: currentPath === `/admin/courses/${courseId}/details/notices`
        },
        {
            name: 'Students',
            href: `/admin/courses/${courseId}/details/students`,
            icon: UserGroupIcon,
            current: currentPath === `/admin/courses/${courseId}/details/students`
        },
        {
            name: 'Reviews',
            href: `/admin/courses/${courseId}/details/reviews`,
            icon: SparklesIcon,
            current: currentPath === `/admin/courses/${courseId}/details/reviews` || currentPath === `/admin/courses/${courseId}/details/reviews/${reviewId}/details`
        },
        {
            name: 'Forums',
            href: `/admin/courses/${courseId}/details/forums`,
            icon: ChatBubbleLeftRightIcon,
            current: currentPath === `/admin/courses/${courseId}/details/forums`
        },
    ];

    return(
        <div>
            <ul className={'flex items-center divide-x divide-gray-300 border-y border-gray-300 mb-6'}>
                {Menu.map((item) => (
                    <li key={item.name} className={'flex-auto text-center'}>
                        <Link to={item.href} className={classNames(item.current ? 'bg-base text-white' : '', 'p-3 block') }>
                            <item.icon className={'w-6 h-6 inline-block mr-2'}/>
                            {item.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default CourseDetailsMenu;